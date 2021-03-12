import React from "react";
import { useApp } from "../data/ContextProvider";


export default function ComponentSorter(theseComponents){

    // Check if components being passed in are already active
    // If not, flush components
    // Add components being passed in
    const { component, setComponents } = useApp();
    setComponents(theseComponents)

    return (
        <React.Fragment >
        {component}
        </React.Fragment>
    )
}