import React from 'react';
import './BarChart.css'

import {Bar,defaults} from 'react-chartjs-2' //use cntrl space within {} to see what we you import 

defaults.global.legend.position = 'bottom';
const barchart = (props) => {
    return (
        // <div className='Chartcard'>
        //     barchart
        // </div>

        //data {{}} outer: dynamic javascript content. inner javascript object
        //To do: use input from other class
        //if colours given an array of values they will be assigned according to labels
        <div>
            <Bar
                data = {{
                    labels: ['Lynn','Walt'],
                    datasets: [
                        {
                            label: 'Overall Winnings',
                            data: [25, 20],
                            backgroundColor:'rgba(153, 102, 255, 0.6)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth:2,
                        },
                        {
                            label: 'Rummikub Winnings',
                            data: [15, 10],
                            backgroundColor:'rgba(54, 162, 235, 0.6)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth:2,
                        }
                    ]
                }}
                height = {400}
                width = {200} 
                options={{
                    maintainAspectRatio:false,
                    scales:{
                        yAxes: [
                            {
                                ticks:{
                                    beginAtZero: true,
                                }
                            }
                        ]
                    }
                }}
            >
                
            </Bar>
        </div>
    );
}

export default barchart;