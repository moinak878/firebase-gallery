import React from 'react'
import useFirestore from '../hooks/useFirestore'

function Images() {
    const { docs } = useFirestore('images');
    return (
    <div className="images-layout">
        { docs && docs.map(doc => (
            <div className="img-wrap" key={doc.id}>
                <img src={doc.url} alt="picz"/>
            </div>
        ))}
     </div>
    )
    
}

export default Images
