import { ReactElement, ReactNode } from "react";
import Card from "./card"

export default function List({title}: {title: string}) {
  return (
    <div className="flex flex-col justify-start w-96 h-80 min-h-full rounded-lg bg-rose-500 mx-4">
      <h1 className="text-white text-center text-4xl pt-4 w-full h-20">{title}</h1>
      <div className="w-full px-2 py-2">
        <Card/>
      </div>
    </div>
  )
}