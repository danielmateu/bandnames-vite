import { useEffect } from 'react'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const BandChart = () => {

    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
    const data = {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
    }

    // const config = {
    //     type: 'bar',
    //     data: data,
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // }

    const config = {
        type: 'bar',
        data,
        options: {
          indexAxis: 'y',
        }
      };

    useEffect(() => {

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

        return () => {
            myChart.destroy()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <canvas id="myChart" className='bg-slate-200 p-4 mx-6 mt-6 rounded-xl shadow-lg'></canvas>
    )
}