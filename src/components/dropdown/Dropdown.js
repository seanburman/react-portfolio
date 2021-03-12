import { useState } from 'react'
import * as Windows from '../windows/Windows'
import './Dropdown.css'

export default function Dropdown({title="Title", color="grey", children}) {    
    
    const [ show , setShow ] = useState(false)

    const dropdownVisibility = show ? " dropdown-visible " : " dropdown-hidden "
    const contentVisibility = show ? " content-visible " : " content-hidden "
    const toggleArrow = show ? " toggle-on " : " toggle-off "

    const toggleDropdown =() => {
        setShow(!show)
    }
    return (
        <Windows.Window>
        
            <Windows.Solo bg={color}>
                <div className="title-wrapper" onClick={() => toggleDropdown()}>
                    <b>{title}</b>
                    <div className="toggle">
                    <div className={"toggle-arrow" + toggleArrow}>►</div>
                    </div>
                </div>
                <div className={dropdownVisibility}>
                    <div className={contentVisibility}>
                    {children}
                    </div>
                </div>
            </Windows.Solo>
        </Windows.Window>
    )
}