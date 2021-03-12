import React from 'react'
import './Sandbox.css'
//import * as Nav from '../../Navigation/Nav'
import Main from '../../Main'
//import Contact from '../Contact/Contact'
//import * as Windows from '../../../components/windows/Windows'
import Console from '../../Navigation/Console'
import BodyContainer from '../BodyContainer'
import { useApp } from '../../../data/ContextProvider'
import Footer from '../../Navigation/Footer'
import PageSorter from '../../PageSorter'


export default function Sandbox({on}) {

    const {view} = useApp()
    if(!on) return null 
    const visible = view.length !== 0 ? true : false

    return (
        <React.Fragment>
            <Main>
                <Console />                
                <BodyContainer visible={visible}><PageSorter /></BodyContainer>
                <Footer />
            </Main>
        </React.Fragment>
    )
}