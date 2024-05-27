"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import List from "./components/list";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main className="flex flex-col justify-center">
      <form className="flex flex-row justify-center py-8">
        {/* Generator */}
        <label className="mr-2">Hours: </label>
        <input className="border-2 mr-10 rounded placeholder:italic placeholder:text-slate-400" placeholder="Type number of hours"></input>
        <button className="hover:bg-gray-100 border-2 border-current rounded-md px-4" type="submit">Generate</button>
      </form>
      <div className="flex flex-row justify-center min-h-screen py-8">
        <List title="To-Do"/>
        <List title="Done"/>
      </div>
    </main>
  );
}
