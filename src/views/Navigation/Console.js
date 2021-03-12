import React, { useEffect } from 'react';
import { useState } from 'react'
import Icon from '../../components/Img/Img';
import { useApp } from '../../data/ContextProvider'
import style from './Console.css'



function ConsoleItem({ name, color, icon, selected, click }) {
    const { toggleTop } = useApp()
    const shadowColor = "255,255,255"


    var start = {
        "WebkitBoxShadow": `0px 0px 2px 2px rgba(${shadowColor}, 0.1)`,
        "MozBoxShadow": `0px 0px 2px 2px rgba(${shadowColor}, 0.1)`,
        "boxShadow": `0px 0px 2px 2px rgba(${shadowColor}, 0.1)`,
        "backgroundColor" : `rgba(${color})` 
    }

    var end = {
        "WebkitBoxShadow": `0px 0px 8px 2px rgba(${shadowColor}, 0.6)`,
        "MozBoxShadow": `0px 0px 8px 2px rgba(${shadowColor}, 0.6)`,
        "boxShadow": `0px 0px 8px 2px rgba(${shadowColor}, 0.6)`,
        "backgroundColor" : `rgba(${color})` 
    }

    const hr = {
        backgroundColor: `rgba(${color})`,
        borderColor: `rgba(${color})`
    }

    const [ shadow, setShadow ] = useState(start)

    //If menu item is not selected, acquire className "top"
    //const top = selected === "true" ? " " : " top "
    const top = (
        selected === "true" ? " selected " :
        selected === "false" ? " top ":
        ""
    )

    const toggle = (click) => {
        //Callback Console item click 
        //calls transition()
        click()
        //Toggle selected console item
        toggleTop(name)
    }

    return (
        <div 
        className={"menu-item" + top} 
        onClick={() => toggle(click)}
        >
        <div 
            className={"icon surface fade" + top} 
            // eslint-disable-next-line
            style={style, shadow} 
            onMouseEnter={() => setShadow(end)}
            onMouseLeave={() => setShadow(start)}
        >
            <div className="icon-wrapper">
                <Icon icon={icon} top={top} className={"visible"}/>
            </div>
        </div>
            
           <p className="ubuntu w300 surface">{name}</p>
           <hr style={hr}/>
       </div>
    )
}

export default function Console() {

    const { views, view, setView } = useApp()
    // When icon is clicked, add "top" class to menu item
    // Add icon name to ContextProvider: view state array
    
    const transition = ({name}) => {
        setView(name)
    }

    useEffect(() => {
    }, [view])

    return(

        <React.Fragment>
        <div className="menu-bar"></div>
            <div className="menu" style={style}>
            {
                views.map((view, i) =>
                <ConsoleItem
                key={i}
                id={view.id}
                name={view.name}
                selected={view.selected}
                icon={view.icon}
                color={view.color}
                click={() => transition(view)}
                />
                )
            }    
            </div>
        </React.Fragment>
    )
}