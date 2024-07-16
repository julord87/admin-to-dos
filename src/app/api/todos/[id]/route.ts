import prisma from '@/lib/prisma';
import { Segment } from 'next/dist/server/app-render/types';
import { NextResponse } from 'next/server'

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