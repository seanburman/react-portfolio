import React from 'react'
import Mission from './Mission'
import Values from './Values'
import Education from './Education'
import Submenu from '../../../components/menus/SubMenu'
import componentsData from './components.json'
import { useApp } from '../../../data/ContextProvider'
import Story from './Story'

export default function About() {
    const { component } = useApp()
    

    return (
        <React.Fragment>
        <Submenu componentsData={componentsData}/>
        {
            {
                'Mission': <Mission />,
                'Values': <Values />,
                'Story': <Story />,
                'Education': <Education />,
                'undefined': <Story />
            }[component.name]
        }
        </React.Fragment>
        
    )
}