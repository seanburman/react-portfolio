import React from 'react'
import * as Windows from '../../../components/windows/Windows'
import Tabs from './../../../components/menus/Tab'
import educationData from './Education.json'

export default function Education() {

    const h1Title = <h2 className="ubuntu w500 education-title" >Educational Experiences</h2>
    return (
        <React.Fragment>
            <Windows.Window>
                <Windows.Solo space bg="transparent" color="white">
                {h1Title}
                </Windows.Solo>
            </Windows.Window>
            <Tabs tabData={educationData}/>
        </React.Fragment>
        

    )
}