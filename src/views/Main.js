import './Main.css'

export default function Main({children, color}) {
    return (
        <div className="main-container">
            {children}
        </div>
    )
}