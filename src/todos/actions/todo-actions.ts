'use server';

import prisma from "@/lib/prisma";
import { Todo } from '@prisma/client';

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const todo = await prisma.todo.findFirst({
        where: { id },
    });

    if(!todo) {
        throw new Error(`Todo with id ${id} not found`);
    }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete },
    });

    return updatedTodo;
}