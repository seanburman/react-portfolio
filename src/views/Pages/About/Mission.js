import * as Windows from '../../../components/windows/Windows'

export default function Mission() {

    const h1Title = <h1 className="ubuntu w500" >Mission Statement</h1>
    return (
        <Windows.Window>
            <Windows.Header space bg="rgb(32, 164, 243)" color="white">{h1Title}</Windows.Header>
            <Windows.Footer moreSpace> My mission​ is to develop creative, innovative, and accessible business solutions that make a
            meaningful difference in the lives of the people who use them.</Windows.Footer>
        </Windows.Window>
    )
}

//#4d9e42