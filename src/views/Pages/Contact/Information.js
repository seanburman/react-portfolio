import React from 'react'
import * as Windows from '../../../components/windows/Windows'
import Tabs from './../../../components/menus/Tab'
import informationData from './Information.json'
export default function Information() {

    const h1Title = <h2 className="ubuntu w500 information-title" >Get In Touch</h2>
    return (
        <React.Fragment>
            <Windows.Window>
                <Windows.Solo space bg="transparent" color="white">
                {h1Title}
                <p className="tab-info">
                Whether you would like to work with me or collaborate, I would love to hear from you!
                </p>
                </Windows.Solo>
            </Windows.Window>
            <Tabs tabData={informationData}/>
        </React.Fragment>
        

    )
}