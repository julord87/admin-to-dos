import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { object, string } from 'yup';
import { getUserSession } from '@/auth/actions/auth-actions';

export async function GET(request: Request) { 
    const {searchParams} = new URL(request.url);
    const take = searchParams.get('take') ?? '10';
    const skip = searchParams.get('skip') ?? '0';

    if (isNaN(Number(take))) {
        return NextResponse.json({message: 'Invalid take parameter'}, {status: 400})
    }

    if (isNaN(Number(skip))) {
        return NextResponse.json({message: 'Invalid skip parameter'}, {status: 400})
    }

    const todos = await prisma.todo.findMany({
        skip: Number(skip),
        take: Number(take),
        orderBy: {
            createdAt: 'asc'
        }
    });

    return NextResponse.json(todos);
}

const postSchema = object({
    description: string().required()
});

export async function POST(request: Request) {

    const user = await getUserSession();
    if(!user) {
        return NextResponse.json({message: 'Unauthorized'}, {status: 401});
    }

    try {
        const { description} = await postSchema.validate(await request.json());
        const todo = await prisma.todo.create({
            data: {
                description,
                userId: user.id
            }
        });
            
    
        if(!description) {
            return NextResponse.json({message: 'Missing description'}, {status: 400});
        }

        return NextResponse.json(todo, {status: 201});

    } catch (error) {
        return NextResponse.json(error, {status: 400});
    }
}

export async function DELETE(request: Request) {

    const user = await getUserSession();
    if(!user) {
        return NextResponse.json({message: 'Unauthorized'}, {status: 401});
    }

    try {
        await prisma.todo.deleteMany({ where: { complete: true, userId: user.id } });
        return NextResponse.json({ message: 'Completed todos deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting completed todos:', error);
        return NextResponse.json({ message: 'Error deleting completed todos', error: (error as Error).message }, { status: 500 });
    }
}