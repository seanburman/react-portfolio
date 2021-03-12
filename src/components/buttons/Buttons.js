import React from 'react';
import './Buttons.css'

function Close({click}) {
    return (
        <button className="close-button" onClick={click}><p className="btn-label">✖</p></button>
    )
}


export default function Button({children, type, click}) {
    return (
        <React.Fragment>
        {
            {
                'close': <Close click={click} />
            }[type]
        }
        </React.Fragment>
    )
}

