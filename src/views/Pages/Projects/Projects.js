import React from 'react'
import Dropdown from '../../../components/dropdown/Dropdown'
import { CCCLink } from '../Clients/CCC'
import * as Windows from './../../../components/windows/Windows'
import './Projects.css'

export default function Projects() {

    return (
        <React.Fragment>
            <Windows.Window>
                <Windows.Solo space bg="transparent" color="white">
                <h2 className="ubuntu w500 projects-title" >Recent Projects</h2>
                <p className="tab-info">
                Click one one of my recent projects below for some extra details.
                This list is always growing!
                
                </p>
                </Windows.Solo>
            </Windows.Window>
            <Dropdown title="seanburman.ca" color="#20A4F3">
            All of the React components in my portfolio are made from scratch without the use
            of external libraries like Bootstrap or Material-UI. <br/><br/>
            I am currently working on making some of these reusable and customizable components
            available through Npm. For now, you can clone the full source code from github and try them
            out for yourself!
            <a href="https://github.com/seanburman/react-portfolio" rel="noreferrer" target="_blank">
                <p className="github-link" > 
                github.com/seanburman/react-portfolio
                <i className="fa fa-github"></i>
                </p>
            </a>
            </Dropdown>
            <Dropdown title="catherineclarkconnects.com" color="#E0AF2E">
            Catherine Clark Connects is a mental health consulting firm whose website I was commissioned to create.
            The website is made using React and React Bootstrap.<br /><br />
            <CCCLink />
            <br /><br />
            </Dropdown>
            <Dropdown title="In the Works" color="#E75A7C">
            The next leg of my development journey will include some reusable and customizable
            React components available through Npm. <br /><br />
            In addition, I will be adding some colorful and interactive web application tools for use
            by content creators! Check back soon for updates.
            </Dropdown>
        </React.Fragment>
    )
}