/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { BandAdd, BandList } from "../components"
import { useSocket } from "../hooks/useSocket"
import { SocketContext } from "../context/SocketContext"

function HomePage() {

  // const [bands, setBands] = useState([])
  // const { socket, onLine } = useSocket('http://localhost:8080')

  const { onLine } = useContext(SocketContext)

  // useEffect(() => {
  //   socket.on('current-bands', (bands) => {
  //     setBands(bands)
  //   })
  // }, [socket])

  // const voteBand = (id) => {
  //   // console.log('Votar banda', id);
  //   socket.emit('vote-band', id)
  // }

  // // deleteBand
  // const deleteBand = (id) => {
  //   // console.log('Borrar banda', id);
  //   socket.emit('delete-band', id)
  // }

  // // changeNameBand
  // const changeNameBand = (id, name) => {
  //   // console.log('Cambiar nombre banda', id, name);
  //   socket.emit('change-name-band', { id, name })
  // }

  return (
    <div className="bg-gray-400 min-h-screen">

      <p className="text-md bg-white p-2">Service status: {
        onLine ?
          (<span className="text-green-500 font-bold">Online</span>) :
          (<span className="text-red-500 font-bold">Offline</span>)
      }</p>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start py-10 gap-4">
        {/* <BandList
          data={bands}
          voteBand={voteBand}
          deleteBand={deleteBand}
          changeNameBand={changeNameBand}
        /> */}
        {/* <BandAdd /> */}
      </div>
    </div>
  )
}

export default HomePage
