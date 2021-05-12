import { useState } from 'react';
import Upload from './Upload';

const UplloadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    return (
        <form>
            <label>Upload images : </label>
            <input
                type="file"
                onChange={(e) => {
                    let selected = e.target.files[0];
                    // console.log(selected);
                    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
                    if (selected && types.includes(selected.type)) {
                        setFile(selected);
                        setError(null);
                        // console.log(file);
                    }
                    else {
                        setFile(null);
                        setError('Please select valid image file');
                    }
                }}
            />
            <div className="output">
                {error && <div>{error}</div>}
                {file && <Upload file={file}></Upload>}
            </div>
        </form>
     );
}
 
export default UplloadForm;