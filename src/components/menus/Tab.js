import React, { useState } from 'react'
import * as Windows from '../windows/Windows'
import './Tab.css'

//This component is meant to be used as a child for a Windows.Window element

function TabDialog({tabId, text, visible}) {

    const show = tabId === visible ? true : false
    return (
        <React.Fragment>
        {
            show === true && (
                <Windows.Window>
                    <Windows.Solo moreSpace>
                    <div dangerouslySetInnerHTML={{__html: text}}></div>
                    </Windows.Solo>
                </Windows.Window>  
            )
        }
        </React.Fragment>
    )
}

function Tab({id, name, select, selected}) {
    const highlight = id === selected ? " highlight " : " "

    return (
        <React.Fragment>
            <div className="tab">
            <button 
            className={"ubuntu w700" + highlight} 
            onClick={() => select()}>{name}</button>
            </div>
        </React.Fragment>
    )
}

export default function Tabs ({tabData}) {

    const [ selected, setSelected ] = useState(0)

    return (
        <React.Fragment>
            <Windows.Window>
                <Windows.Solo bg="transparent" color="white">
                <div className="tabs">
                {
                    tabData.map((tab, i) => 
                    <Tab 
                    key={i} 
                    id={tab.id} 
                    name={tab.name} 
                    text={tab.text} 
                    select={() => setSelected(tab.id)}
                    selected={selected}
                    />
                    )
                    
                }
                </div>
                </Windows.Solo>
            </Windows.Window>
            {
                tabData.map((tab, i) => 
                <TabDialog key={i + 5} tabId={tab.id} text={tab.text} visible={selected}/>
                ) 
            }
        </React.Fragment>
    )
}