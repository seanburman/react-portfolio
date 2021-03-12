import React from 'react'
import Submenu from '../../../components/menus/SubMenu'
import componentsData from './components.json'
import { useApp } from '../../../data/ContextProvider'
import ContactForm from './ContactForm'
import Information from './Information'
import './Contact.css'

export default function Contact() {
    const { component } = useApp()
    return (
        <React.Fragment>
        <Submenu componentsData={componentsData}/>
        {
            {
                'Information': <Information />,
                'Message Me': <ContactForm />,
                'undefined':  <Information />
            }[component.name]
        }
        </React.Fragment>
               

    )
}