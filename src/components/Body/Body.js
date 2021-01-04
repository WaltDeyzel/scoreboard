import React from 'react';

import './Body.css'
import Players from './Chart/Players'

const body = (props) => {

    return (
        <div>
            <ul>
                <li id="nav-side"><div className='Temp'></div></li>
                <li id="chart-side">
                    <ul>
                        <li><div className='Temp2'></div></li>
                        <li>
                            <div>
                                {props.persons.map((person, index) => {
                                    return (< Players
                                        Click={() => { props.scoreAdd(person.id) }}
                                        name={person.name}
                                        score={person.score}
                                        key={person.id} />
                                    )
                                })}
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default body;