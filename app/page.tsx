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
  const [standUps, setStandUps] = useState<Array<Schema["Standup"]["type"]>>([]);
  const [standUpsDone, setStandUpsDone] = useState<Array<Schema["Standup"]["type"]>>([]);
  const [hours, setHours] = useState<string>("");

  function listStandUps() {
    client.models.Standup.observeQuery({ filter: { isDone: { eq: 'false' } } }).subscribe({
      next: (data) => setStandUps([...data.items]),
    });
  }

  function listStandUpsDone() {
    client.models.Standup.observeQuery({ filter: { isDone: { eq: 'true' } }}).subscribe({
      next: (data) => setStandUpsDone([...data.items]),
    });
  }

  useEffect(() => {
    listStandUps();
    listStandUpsDone();
  }, []);

  async function createStandUp(e: any) {
    e.preventDefault();
    console.log('30 Executed');
    const dateNow = new Date();
    await client.models.Standup.create({
      hours: parseInt(hours, 10),
      attempt: 1,
      standupGroupId: dateNow.getTime().toString(),
      isDone: 'false',
    });
    setHours('');
  }

  function handleChange(e: any) {
    setHours(e.target.value);
  }

  return (
    <main className="flex flex-col justify-center">
      {
        standUps.length > 0 || standUpsDone.length > 0 ?
        <>
        </>
        :
        <form onSubmit={createStandUp} className="flex flex-row justify-center py-8">
        {/* Generator */}
        <label className="mr-2">Hours: </label>
        <input
          className="border-2 mr-10 rounded placeholder:italic placeholder:text-slate-400"
          placeholder="Type number of hours"
          onChange={handleChange}
          value={hours}
        />
        <button className="hover:bg-gray-100 border-2 border-current rounded-md px-4" type="submit">Generate</button>
      </form>}
      <div className="flex flex-row justify-center min-h-screen py-8">
        <List title="To-Do" items={standUps} listStandUp={listStandUps} listStandUpDone={listStandUpsDone}/>
        <List title="Done" items={standUpsDone} listStandUp={listStandUps} listStandUpDone={listStandUpsDone}/>
      </div>
    </main>
  );
}
