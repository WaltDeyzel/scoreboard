import React from 'react'

import TopList from '../TopLists/TopList'
import './Rankings.css'

const rankings = (props) => {
   return(
       <div className={'Rankings'}>
           <TopList players={props.players} />
           <TopList players={props.players} />
           <TopList players={props.players} />
       </div>
   );
}
export default rankings;