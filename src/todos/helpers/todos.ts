import { Todo } from "@prisma/client";

export const updateTodos = async(id: string, complete: boolean): Promise<Todo> => {

        const body = {complete};

        const todo = await fetch(`/api/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json());

        console.log({ todo });

        return todo;
}

export const createTodo = async(description: string): Promise<Todo> => {

    try {
        const body = {description};

        const todo = await fetch(`/api/todos/`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json());

        console.log({ todo });

        return todo;

    } catch (error) {
        console.error('Error creating todo', error);
        throw error;
    }

}

export function deleteCompleted() {
    return fetch(`/api/todos/`, {
        method: 'DELETE'
    }).then((res) => res.json());
}
