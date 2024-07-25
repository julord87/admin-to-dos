'use server';

import prisma from "@/lib/prisma";
import { Todo } from '@prisma/client';
import { revalidatePath } from "next/cache";

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

    revalidatePath('/dashboard/server-todos');
    return updatedTodo;
}

export const addTodo = async (description: string): Promise<Todo> => {

    try {
        const todo = await prisma.todo.create({
            data: { description },
        });
    
        revalidatePath('/dashboard/server-todos');
        return todo;
    } catch (error) {
        throw new Error(`Error creating todo: ${error}`);
    }

}

export const deleteCompleted = async (): Promise<void> => {
    try {
        await prisma.todo.deleteMany({
            where: { complete: true },
        });

        revalidatePath('/dashboard/server-todos');
    } catch (error) {
        throw new Error(`Error deleting completed todos: ${error}`);
    }
}