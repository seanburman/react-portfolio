import React, { createContext, useContext, useState} from "react";
import viewData from "./views.json"
const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function ContextProvider({ children }) {
    //viewData
    const [ views, setViews ] = useState(viewData)
    //Active view
    const [view, setViewObject] = useState([]);
    //Active components
    const [components, setComponents] = useState([])
    //Selected component
    const [component, setComponent] = useState([])

    ///------------///
    ///   Views    ///
    ///------------///
    //Iterate over views and set view.selected to false if view.name !== param (name)
    //Used for toggling icons and their correlating views
    const toggleTop = (name) => {
        var new_views = views
        for(let v of new_views) {
            v.name === name ? v.selected = "true" : v.selected = "false"
        }
        setViews(new_views)
    }

    //Takes view string and matches view object in views array by name key
    const setView = (name) => {
        toggleTop()
        let viewArray = views.filter(view => view.name === name)
        let viewObject = viewArray[0]
        setViewObject(viewObject)
    }

    ///------------///
    /// Components ///
    ///------------///

    //Determine if component (target) is in array of active components (components)
    //returns boolean
    const isActive = (target) => {
        let active = components.indexOf(target) > -1
        return active
    }

    const addComponent = (target) => {
        let componentsPlusTarget = components.concat(target)
        setComponents(componentsPlusTarget)
    }

    const removeComponent = (target) => {
        let filteredComponents = components.filter(component => component !== target)
        setComponents(filteredComponents)
    }

    const flushComponents = () => {
        setComponents([])
    }
    
    //Context functions for views and components
    return (
        <AppContext.Provider value={{
            view,
            setView,
            views,
            toggleTop,
            isActive,
            addComponent,
            removeComponent,
            flushComponents,
            components,
            setComponents,
            component,
            setComponent
        }}>
            { children }
        </AppContext.Provider>
    )
}