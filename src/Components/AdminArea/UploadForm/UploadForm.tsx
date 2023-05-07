import GenericModal from "../GenericModal/GenericModal";
import "./UploadForm.css";
import * as React from 'react';

function UploadForm(): JSX.Element {
    const [uploadType, setType] = React.useState('');
    const stateCleaner = ()=>setType('');
    return (
        <div className="UploadForm">
            {!uploadType && <>
                <button onClick={() => setType('concept')} className="btn btn-primary">הוספת קונספט</button>
                <button onClick={() => setType('review')} className="btn btn-primary">הוספת ביקורת</button>
                <button onClick={() => setType('gallery')} className="btn btn-primary">הוספת סרטון לגלריה</button>
            </>}
            {uploadType && <GenericModal type={uploadType} stateCleaner={stateCleaner} />}
        </div>
    );
}

export default UploadForm;
