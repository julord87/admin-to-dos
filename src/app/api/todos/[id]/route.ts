import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request, segments: {id: string}) {
    const {id} = segments;
    const todo = await prisma.todo.findUnique({
        where: {
            id: id
        }
    });

    if (!todo) {
        return NextResponse.json({message: 'Todo not found'}, {status: 404})
    }

    return NextResponse.json(todo);
}