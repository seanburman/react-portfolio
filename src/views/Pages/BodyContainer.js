import './BodyContainer.css'

export default function BodyContainer({children, visible}) {

    if(!children) return null

    const show = visible ? " visible " : " invisible "
    return (
        <div className={"body-container" + show} >
        {children}
        </div>
    )
}