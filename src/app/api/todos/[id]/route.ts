import prisma from '@/lib/prisma';
import { Segment } from 'next/dist/server/app-render/types';
import { NextResponse } from 'next/server';
import * as yup from 'yup';


export async function GET(request: Request, { params }: Segment) {
    const { id } = params;
    const todo = await prisma.todo.findFirst({
        where: { id }
    });

    if (!todo) {
        return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json(todo);
}

const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional()
});

export async function PUT(request: Request, { params }: Segment) {

    try {
        const { id } = params;
        const todo = await prisma.todo.findFirst({
            where: { id }
        });
    
        if (!todo) {
            return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
        };
    
        const { complete, description, ...rest } = await putSchema.validate(await request.json());
    
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete, description }
        });
    
        return NextResponse.json(updatedTodo);

    } catch (error) {

        return NextResponse.json(error, { status: 400 });
        
    }
}