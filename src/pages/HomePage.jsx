/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react"
import { BandAdd, BandList } from "../components"
import { SocketContext } from "../context/SocketContext"
import { BandChart } from "../components/BandChart"

function HomePage() {

  const { onLine } = useContext(SocketContext)

  return (
    <div className="bg-gray-400 min-h-screen">

      <p className="text-md bg-white p-2">Service status: {
        onLine ?
          (<span className="text-green-500 font-bold">Online</span>) :
          (<span className="text-red-500 font-bold">Offline</span>)
      }</p>

      {/* <BandChart/> */}
      <BandChart/>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start py-10 gap-4">
        <BandList />
        <BandAdd />
      </div>
    </div>
  )
}

export default HomePage
