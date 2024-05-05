import { useLoaderData } from "react-router-dom"

export default function PageRealTime() {
  const data = useLoaderData()
  return (
    <>
      <h1>Real Time DATA</h1>
      <h2>DATA status = {data.status}</h2>
    </>
  )
}