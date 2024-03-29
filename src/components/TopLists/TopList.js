import React from 'react';
import './TopList.css';

import TopListTile from './TopListTile/TopListTile'

const topList = (props) => {
    const players = [...props.players].sort((a,b) => {return(b.score - a.score)}); 
    
    for(let key in players){
        console.log(players[key].score);
    }
   return(
       <div className="TopList">
           <h1>SCORE</h1>
           {
               players.map( (player, index) => {
                   if( index < 4){
                    return <TopListTile name={player.name} amount={player.score}/>;
                   }
                   else{
                       return
                   }
               })
           }
       </div>
   );
}
export default topList;