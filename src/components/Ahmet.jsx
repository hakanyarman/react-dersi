import React from 'react'
import Mahmut from './Mahmut'

function Ahmet({ ahmet }) {
    console.log({ ahmet }, 1);

    return (
        <div>
            <div>{ahmet}</div>
            <Mahmut />
        </div>
    )
}

export default Ahmet