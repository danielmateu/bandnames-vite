import { useEffect, useMemo, useState } from "react"
import { io } from "socket.io-client"

export const useSocket = (serverPath) => {
    const socket = useMemo(() => io.connect(serverPath, {
        transports: ['websocket']
    }), [serverPath])

    const [onLine, setOnLine] = useState(false)

    useEffect(() => {
        setOnLine(socket.connected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onLine])

    useEffect(() => {
        socket.on('connect', () => {
            setOnLine(true)
        })

        socket.on('disconnect', () => {
            setOnLine(false)
        })
    }, [socket])


    return {
        socket,
        onLine
    }
}
