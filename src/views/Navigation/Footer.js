import { useApp } from '../../data/ContextProvider'
import './Footer.css'

export default function Footer() {

    const { view } = useApp()
    const position = view.name ? " absolute-bottom " : " absolute-top "
    const size = view.name ? " bottom " : " top "
    return (
        <div className={"footer" + position}>
            <p className={"roboto w500 name" + size}>Sean Burman </p>
            <p className={"ubuntu w300 role" + size}>software developer</p>
        </div>
    )
}