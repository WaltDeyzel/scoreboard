import React from 'react';

import Aux from '../../hoc/Auxx'
import './Layout.css'

const layout = (props) => {
    return (
        <Aux>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );

}

export default layout;