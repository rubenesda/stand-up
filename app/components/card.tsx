export default function Card() {
  return (
    <div className="flex flex-col w-full bg-white px-2 py-2 rounded-lg">
      <h2 className="text-2xl font-medium">Stand Up #3</h2>
      <span className="bg-gray">Time: 9 hours</span>
      <span className="bg-gray">Count: 2/9</span>
      <button className="border-2 bg-gray-200 hover:bg-gray-300 rounded-md w-24 self-end">Done?</button>
    </div>
  )
}
