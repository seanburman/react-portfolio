import './Img.css'

export default function Icon({icon, top}){

    const style = top === " selected " ? icon.selected : icon.style 
        

    return (
        <img
        id="pic"
        src={icon.src} 
        alt={icon.alt} 
        style={style}
        className={"iconPic visible" + top}/>
    )
}