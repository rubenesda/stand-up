import { ReactElement, ReactNode } from "react";
import type { Schema } from "@/amplify/data/resource";
import Card from "./card"

export default function List({title, items, listStandUp, listStandUpDone}: {title: string, items: Array<Schema["Standup"]["type"]>, listStandUp: () => void, listStandUpDone: () => void}) {
  return (
    <div className="flex flex-col justify-start w-96 h-80 min-h-full rounded-lg bg-rose-500 mx-4">
      <h1 className="text-white text-center text-4xl pt-4 w-full h-20">{title}</h1>
      <div className="w-full px-2 py-2">
        {items.map((item) => (
          <Card
            hours={item?.hours || 0}
            attempt={item?.attempt || 0}
            isDone={item?.isDone || 'false'}
            standUpId={item?.id || ""}
            listStandUp={listStandUp}
            listStandUpDone={listStandUpDone}
          />
        ))}
      </div>
    </div>
  )
}