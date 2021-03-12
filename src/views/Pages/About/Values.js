import React from 'react'
import * as Windows from '../../../components/windows/Windows'
import Tabs from './../../../components/menus/Tab'
import valuesData from './Values.json'
import './About.css'
export default function Values() {

    const h1Title = <h2 className="ubuntu w500 values-title" >Core Values</h2>
    return (
        <React.Fragment>
            <Windows.Window>
                <Windows.Solo space bg="transparent" color="white">
                {h1Title}
                <p className="tab-info">
                My core values as a developer are a framework which I use to navigate the 
                myriad decisions involved in the development process.
                </p>
                </Windows.Solo>
            </Windows.Window>
            <Tabs tabData={valuesData}/>
        </React.Fragment>
        

    )
}