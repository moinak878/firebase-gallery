import { useState, useEffect } from 'react';
import { storage ,db, timeStamp} from '../firebase/config'

const useStorage = (file) => {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    //runs when new file uploaded
    useEffect(() => {
        storage.ref(file.name).put(file)
            .on('state_changed', (snap) => {
            }, (err) => {
                setError(err)
            }, async () => { //after completion 
                console.log('uploaded...')
                const url = await storage.ref(file.name).getDownloadURL();
                setUrl(url);
                //uploading url to firestore db 
                const createdAt = timeStamp();
                db.collection('images').add({ url, createdAt});
            })
    }, [file])
    return {url,error}
}
export default useStorage;
