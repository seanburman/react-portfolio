import React from 'react'
import * as Windows from '../../../components/windows/Windows'
import CCC from './CCC'

export default function Clients() {

    return (
        <React.Fragment>
        <Windows.Window>
        <Windows.Solo space bg="transparent" color="white">
        <h2 className="ubuntu w500 clients-title" >Web Development</h2>
        <p className="tab-info">
        If you like my work and would like to inquire about a web development project you need help with,
        please visit the Contact page. I offer free consultations!<br/><br />
        </p>
        </Windows.Solo>
    </Windows.Window>
        <CCC />
        </React.Fragment>
        
    )
}