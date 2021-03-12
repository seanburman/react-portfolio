import { useEffect } from 'react'
import { useApp } from '../../data/ContextProvider'
import * as Windows from '../windows/Windows'
import './SubMenu.css'

function Items({componentData, select}) {

    const { view, component } = useApp()
    // //Give menu item class "selected" if selected
    var selected
    if(component.name){
        selected = component.name === componentData.name ? " selected " : ""
    } else {
        selected = componentData.default === "true" ? " selected " : ""
    }

    return (
 
        <div 
        id={componentData.id} 
        className={"submenu-item" + selected + " " + view.name} 
        onClick={() => select()}
        onKeyDown={() => select()}
        tabIndex={componentData.id + 4}
        aria-label={componentData.name}
        role="button"
        aria-pressed="false"
        >
            <div className="subtitle"><p>{componentData.name}</p></div>
        </div>
    )
}

export default function Submenu({componentsData}) {
    const { setComponent } = useApp()

    const selectComponent = (componentData) => {
        setComponent(componentData)
    }
    
    
    useEffect(() =>{
        setComponent(componentsData[0])
    // eslint-disable-next-line    
    },[componentsData[0]])

    return (

        <Windows.Window>
            <Windows.Solo bg="transparent" color="white">
            <div className="submenu">
            {
                componentsData.map((componentData, i ) =>
                <Items 
                key={i} 
                componentData={componentData} 
                select={() => selectComponent(componentData)}
                />)
            }
            </div>
            </Windows.Solo>
        </Windows.Window>
    )
}