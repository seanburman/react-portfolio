import React from 'react';
import { useApp } from '../data/ContextProvider';
import About from './Pages/About/About';
import Clients from './Pages/Clients/Clients';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';

export default function PageSorter() {
    const { view } = useApp();

    if(!view.name) return null;

    return (
        <React.Fragment>
        {
            {
            'About': <About />,
            'Projects': <Projects />,
            'Clients': <Clients />,
            'Contact': <Contact />
            }[view.name]
        }
        </React.Fragment>
    )
}