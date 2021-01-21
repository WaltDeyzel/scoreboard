import React from 'react'
import './TopListTile.css'

const topListTile = (props) => {
   return(
       <div className={'TopListTile'}>
           <h2>{props.name}</h2>
           <h2>{props.amount}</h2>
       </div>
   );
}
export default topListTile;