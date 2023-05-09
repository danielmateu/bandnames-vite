import { useState } from "react"
import { BandAdd, BandList } from "./components"
import { io } from "socket.io-client"


const connectSocketServer = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  })
}

function App() {

  const [socket] = useState(connectSocketServer())
  const [onLine, setOnLine] = useState(false)


  return (
    <div className="bg-gray-400 h-screen">
      {/* <h1 className="text-white font-semibold">Hello world!</h1> */}

      <p className="text-md bg-white p-2">Service status: {
        // navigator.onLine ? <span className="text-green-500 font-bold">Online</span> : <span className="text-red-500 font-bold">Offline</span>
        onLine ? <span className="text-green-500 font-bold">Online</span> : <span className="text-red-500 font-bold">Offline</span>
      }</p>

      <div className="flex justify-center items-center p-10 gap-4">
        <BandList/>
        <BandAdd/>

      </div>
    </div>
  )
}

export default App
