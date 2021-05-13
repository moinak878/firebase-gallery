import useStorage from "../hooks/useStorage"
// import {useEffect} from 'react'

export default function Upload({file}) {
    const { url } = useStorage(file);
    // useEffect(()=> {
    //     if (url) {
    //         setFile(null);
    //     }
    // }, [url, setFile])
    console.log('hiiii from upload.js')
    return (
        <div className="pics">
            <p>{url}</p>
        </div>
    )
}

// <img src={url} alt="" style={ { height : '500px' , width : '500px' }}/>