"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { addTodo, deleteCompleted } from "../actions/todo-actions";

import * as todosApi from "../helpers/todos";
import { useRouter } from "next/navigation";



export const NewTodo = () => {
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const router = useRouter();
    if (description.trim().length === 0) return;

    setIsLoading(true);
    try {
      await todosApi.createTodo(description);
      router.refresh();
      setDescription("");
    } catch (error) {
      console.error("Error creating todo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        disabled={isLoading}
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        disabled={isLoading}
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={ () => deleteCompleted() }
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Eliminar completados
      </button>
    </form>
  );
};
