export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getUserSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import TodosGrid from "@/todos/components/TodosGrid";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Rest Todos",
  description: "Rest todos page",
};

export default async function RestTodosPAge() {
  
  const user = await getUserSession();
  if(!user) redirect('api/auth/signin');

  const todos = await prisma.todo.findMany({ 
    where: { userId: user.id },
    orderBy: { description: "asc" } 
  });

  return (
    <div className="mx-5">
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
