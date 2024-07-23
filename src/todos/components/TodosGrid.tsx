'use client'
import { Todo } from "@prisma/client";
import TodoItem from "./TodoItem";
import { toggleTodo } from "../actions/todo-actions";


interface TodosGridProps {
    todos?: Todo[];
}   


export default function TodosGrid( {todos = []} : TodosGridProps) {

  // const router = useRouter();

  // const toggleTodo = async (id: string, complete: boolean) => {
  //   await api.updateTodos(id, complete);

  //   router.refresh();
  // }



  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {
            todos.map( todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))
        }
    </div>
  );
}