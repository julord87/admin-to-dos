import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

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

export async function POST(request: Request) {

    const body = await request.json();
    const todo = await prisma.todo.create({data: body});
        
    if(!body.id) {
        return NextResponse.json({message: 'Missing id'}, {status: 400});
    }

    if(!body.description) {
        return NextResponse.json({message: 'Missing description'}, {status: 400});
    }

    return NextResponse.json(todo);
}