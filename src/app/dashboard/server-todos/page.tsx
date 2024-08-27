export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import TodosGrid from "@/todos/components/TodosGrid";

export const metadata = {
  title: "Server Todos",
  description: "Server todos page",
};

export default async function ServerTodosPAge() {

  const todos = await prisma.todo.findMany({ 
    where: { userId: '' },
    orderBy: { description: "asc" } 
  });

  return (
    <>
      <div className="mx-5">
        <div className="w-full px-3 mx-5 mb-5">
          <NewTodo />
        </div>

        <TodosGrid todos={todos} />
      </div>
    </>
  );
}
