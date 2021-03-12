import React from 'react'
import * as Windows from '../../../components/windows/Windows'
import './Clients.css'

export function CCCLink () {

    return (
    <a 
    href="https://www.catherineclarkconnects.com" 
    target="_blank" 
    rel="noreferrer" 
    className="ccc-link">
        <img className="ccc" src="/img/ccc-logo.png" alt="Catherine Clark Connects"/>
        <br /><br />
        https://www.catherineclarkconnects.com
    </a>
    )
}

export default function CCC() {

    return (
        <React.Fragment>
            <Windows.Window>
                <Windows.Solo moreSpace>
                <CCCLink />
                <p className="ccc-paragraph">
                Catherine Clark Connects is a boutique mental health consulting firm that 
                specializes in helping individuals and organizations proactively address 
                mental health, create a safe space for vulnerable conversations, and build 
                more meaningful, fulfilled lives.
                </p>
                </Windows.Solo>
            </Windows.Window>
        </React.Fragment>
        

    )
}