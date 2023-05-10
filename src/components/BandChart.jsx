import { useContext, useEffect } from 'react'
import { Chart, registerables } from 'chart.js';
import { SocketContext } from '../context/SocketContext';
Chart.register(...registerables);

export const BandChart = () => {

    const { socket } = useContext(SocketContext)

    // useEffect(() => {

    //     socket.on('current-bands', (bands) => {
    //         const labels = bands.map(band => band.name)

    //         const data = {
    //             labels: labels,
    //             datasets: [{
    //                 label: '# of Votes',
    //                 data: bands.map(band => band.votes),
    //                 backgroundColor: [
    //                     'rgba(255, 99, 132, 0.2)',
    //                     'rgba(54, 162, 235, 0.2)',
    //                     'rgba(255, 206, 86, 0.2)',
    //                     'rgba(75, 192, 192, 0.2)',
    //                     'rgba(153, 102, 255, 0.2)',
    //                     'rgba(255, 159, 64, 0.2)'
    //                 ],
    //                 borderColor: [
    //                     'rgba(255, 99, 132, 1)',
    //                     'rgba(54, 162, 235, 1)',
    //                     'rgba(255, 206, 86, 1)',
    //                     'rgba(75, 192, 192, 1)',
    //                     'rgba(153, 102, 255, 1)',
    //                     'rgba(255, 159, 64, 1)'
    //                 ],
    //                 borderWidth: 1
    //             }]
    //         }

    //         const config = {
    //             type: 'bar',
    //             data,
    //             options: {
    //                 indexAxis: 'y',
    //             }
    //         };

    //         const myChart = new Chart(
    //             document.getElementById('myChart'),
    //             config
    //         );

    //         return () => myChart.destroy()
    //     })
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        let chart = '';
        // recibo la data de mi emisor server
        socket.on('current-bands', (bands) => {
            if (chart) {
                chart.destroy()
            }
            chart = crearGrafica(bands);
        })
        return () => socket.off('current-bands');
    }, [socket])

    const crearGrafica = (bands = []) => {
        const ctx = document.getElementById('myChart');
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: bands.map(band => band.name),
                datasets: [{
                    label: '# of Votes',
                    data: bands.map(band => band.votes),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                animation: false,
                indexAxis: 'y',
                beginAtZero: true
            }
        });
    }










    return (
        <canvas id="myChart" className='bg-slate-200 p-4 mx-6 mt-6 rounded-xl shadow-lg'></canvas>
    )
}