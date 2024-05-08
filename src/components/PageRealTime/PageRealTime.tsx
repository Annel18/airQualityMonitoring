import { useLoaderData } from "react-router-dom"
import WidgetDetails from "../Widget/WidgetDetails"

interface LoaderData {
  status: string;
  // Define other properties if needed
}

export default function PageRealTime() {
  const data = useLoaderData() as LoaderData

  return (
    <>
      <h1>Real Time DATA</h1>
      <h2>DATA status = {data.status}</h2>
      <WidgetDetails/>
    </>
  );
}
