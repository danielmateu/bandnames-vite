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



  return (
    <div className="bg-gray-400 h-screen">
      {/* <h1 className="text-white font-semibold">Hello world!</h1> */}

      <p className="text-md bg-white p-2">Service status: {
        onLine ?
          (<span className="text-green-500 font-bold">Online</span>) :
          (<span className="text-red-500 font-bold">Offline</span>)
      }</p>

      <div className="flex justify-center items-center p-10 gap-4">
        <BandList />
        <BandAdd />

      </div>
    </div>
  )
}

export default App
