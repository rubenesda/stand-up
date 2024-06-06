import { generateClient } from 'aws-amplify/data';
import type { Schema } from "@/amplify/data/resource";

export default function Card({
  hours,
  attempt,
  isDone,
  standUpId,
  listStandUp,
  listStandUpDone} :
  {
    hours: number;
    attempt: number;
    isDone: string;
    standUpId: string;
    listStandUp: () => void;
    listStandUpDone: () => void;
  }) {
  const client = generateClient<Schema>();

  async function updateStandUp() {
    const { data: updatedTodo, errors } = await client.models.Standup.update({
      id: standUpId,
      isDone: 'true',
    });
    listStandUp();
    listStandUpDone();
  }

  async function deleteStandup() {
    await client.models.Standup.delete({ id: standUpId });
  }

  return (
    <div key={standUpId} className="flex flex-col w-full bg-white px-2 py-2 rounded-lg">
      <h2 className="text-2xl font-medium">Stand Up #{attempt}</h2>
      <span className="bg-gray">Time: {hours} hours</span>
      <span className="bg-gray">Count: {attempt - 1}/{hours}</span>
      <div className='flex flex-row self-end'>
        <button
          className="border-2 bg-gray-200 hover:bg-gray-300 rounded-md w-24 mr-2"
          onClick={updateStandUp}
          disabled={isDone === 'false' ? false : true}
        >
          {isDone === 'false' ? 'Done?' : 'Completed'}
        </button>
        <button
          className="border-0 bg-red-500 hover:bg-red-600 rounded-md w-24 text-white"
          onClick={deleteStandup}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
