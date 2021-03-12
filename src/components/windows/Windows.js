import React, { useState } from 'react';
import Button from '../buttons/Buttons';
import './Windows.css'

//<button className="closeWindow" onClick={() => setShow(false)}></button>

export function Window({children, close, title, space, moreSpace, bg, color, center, shadow}){
    const [show, setShow] = useState(true)

    if(!show) return null
    const _shadow = shadow ? " shadow " : ""
    return (
                <div className={"window ubuntu" + _shadow}>
                {
                    close && 
                    <Header space={space} moreSpace={moreSpace} bg={bg} 
                            color={color} center={center}>
                    {title && <div className="title">{title}</div>}
                        <div className="buttons">
                            <Button type="close" click={() => setShow(false)} />
                        </div>  
                    </Header>
                }
               {children}
                </div>
    ) 
}

export const Header = ({children, bg="white", color="black", space, moreSpace, center}) => {
    //TO DO
    //WRITE A CUSTOM HOOK FOR THIS
    var sp = space ? " header-space " : ""
    var moreSp = moreSpace ? " more-space " : ""
    var justifyCenter = center === true ? " center " : ""
    let style = {
        "backgroundColor": bg,
        "color": color
    }

    return (
        <div className={"window-header" + sp + moreSp + justifyCenter} style={style}>
        {children}
        </div>
    )
}

export const Body = ({children, bg="white", color="black", space, moreSpace}) => {
    var sp = space ? " space " : ""
    var moreSp = moreSpace ? " more-space " : ""

    let style = {
        "backgroundColor": bg,
        "color": color
    }

    return (
        <div className={"window-body" + sp + moreSp} style={style}>
        {children}
        </div>  
    )
}

export const Footer = ({children, bg="white", color="black", space, moreSpace}) => {
    var sp = space ? " space " : ""
    var moreSp = moreSpace ? " more-space " : ""

    let style = {
        "backgroundColor": bg,
        "color": color
    }

    return (
        <div className={"window-footer" + sp + moreSp} style={style}>
        {children}
        </div>  
    )
}

export const Solo = ({children, bg="white", color="black", space, moreSpace}) => {
    var sp = space ? " space " : ""
    var moreSp = moreSpace ? " more-space " : ""

    let style = {
        "backgroundColor": bg,
        "color": color
    }

    return (
        <div className={"window-solo" + sp + moreSp} style={style}>
        {children}
        </div>  
    )
}
