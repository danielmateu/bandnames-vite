/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { BandAdd, BandList } from "./components"
import io from "socket.io-client"



const connectSocketServer = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  })
  return socket

}

function App() {

  const [socket] = useState(() => connectSocketServer())
  const [onLine, setOnLine] = useState(false)

  const [bands, setBands] = useState([])

  useEffect(() => {
    setOnLine(socket.connected)
  }, [onLine])

  useEffect(() => {
    socket.on('connect', () => {
      setOnLine(true)
    })

    socket.on('disconnect', () => {
      setOnLine(false)
    })
  }, [socket])

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands)
    })
  }, [socket])


  return (
    <div className="bg-gray-400 h-screen">
      {/* <h1 className="text-white font-semibold">Hello world!</h1> */}

      <p className="text-md bg-white p-2">Service status: {
        onLine ?
          (<span className="text-green-500 font-bold">Online</span>) :
          (<span className="text-red-500 font-bold">Offline</span>)
      }</p>

      <div className="flex flex-col md:flex-row justify-center items-start p-10 gap-4">
        <BandList data={bands}/>
        <BandAdd />

      </div>
    </div>
  )
}

export default App
