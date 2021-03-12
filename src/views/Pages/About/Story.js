import * as Windows from '../../../components/windows/Windows'

export default function Story() {

    const h1Title = <h1 className="ubuntu w500" >My Story</h1>
    return (
        <Windows.Window>
            <Windows.Header space bg="rgb(77, 158, 66, 1)" color="white">{h1Title}</Windows.Header>
            <Windows.Footer moreSpace>
            My name is <b>Sean Burman</b> and I'm a passionate software developer. It is my life's
            passion to be a lifelong learner and to gain new skills in whichever domain possible.<br /><br />
            This portfolio is an exposé of my knowledge and experience. I invite you to browse the sections and to
            reach out to me with comments and inquiries.
            </Windows.Footer>
        </Windows.Window>
    )
}