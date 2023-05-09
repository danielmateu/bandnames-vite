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

  const voteBand = (id) => {
    // console.log('Votar banda', id);
    socket.emit('vote-band', id)

  }

  // deleteBand
  const deleteBand = (id) => {
    // console.log('Borrar banda', id);
    socket.emit('delete-band', id)
  }

  // changeNameBand
  const changeNameBand = (id, name) => {
    // console.log('Cambiar nombre banda', id, name);
    socket.emit('change-name-band', { id, name })
  }

  // addBand
  const addBand = (name) => {
    // console.log('Agregar banda', name);
    socket.emit('add-band', { name })
  }

  return (
    <div className="bg-gray-400 h-screen">

      <p className="text-md bg-white p-2">Service status: {
        onLine ?
          (<span className="text-green-500 font-bold">Online</span>) :
          (<span className="text-red-500 font-bold">Offline</span>)
      }</p>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start py-10 gap-4">
        <BandList
          data={bands}
          voteBand={voteBand}
          deleteBand={deleteBand}
          changeNameBand={changeNameBand}
        />
        <BandAdd
          addBand={addBand}
        />
      </div>
    </div>
  )
}

export default App
