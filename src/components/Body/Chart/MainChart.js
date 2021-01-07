import React from 'react';
import './MainChart.css'

import { Bar, defaults, Pie } from 'react-chartjs-2' //use cntrl space within {} to see what we you import 
//import players from '../Players/Players';

defaults.global.legend.position = 'bottom';
const barchart = (props) => {

    const names = [...props.persons].map(person => {
        return person.name;
    });

    const scores = [...props.persons].map(person => {
        return person.score;
    });

    const colours = [...props.persons].map(person => {
        return person.colour;
    });



    return (
        //data {{}} outer: dynamic javascript content. inner javascript object
        <div>
            <div>
                <Bar
                    data={{
                        //a list of names:
                        labels: names,
                        datasets: [
                            {
                                label: 'Overall Winnings',
                                data: scores,
                                backgroundColor: colours,
                                borderColor: 'black',
                                borderWidth: 2,
                            },
                            {
                                //if we wanted to put it all on one graph, maybe one graph on a different page with all the games
                                label: 'Rummikub Winnings',
                                data: [15, 10],
                                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 2,
                            }
                        ]
                    }}
                    height={400}
                    width={200}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    }
                                }
                            ]
                        }
                    }}
                />

            </div>

            <div>
                <Pie
                    data={{
                        labels: names,
                        datasets: [
                            {
                                label: 'Overall Winnings',
                                data: scores,
                                backgroundColor: colours,
                                borderColor: 'black',
                                borderWidth: 2,
                            },
                        ]
                    }}
                    height={25}
                    width={100}
                />

            </div>


        </div>
    );
}

export default barchart;