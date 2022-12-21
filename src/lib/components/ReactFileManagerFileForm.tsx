import React, { Component, useState } from 'react';

interface IFileForm {
    
}

const ReactFileManagerFileForm:React.FC<any> = (props) => { 
    const [fileName, setFileName] = useState<string>('');
    //const [fileType, setFileTye] = useState<string>('');

    const [inputClass, setInputClass] = useState<string>('');
    const [errorMsgClass, setErrorMsgClass] = useState<string>('');
    const [submitButtonClass, setSubmitButtonClass] = useState<string>('');

    const handleFileTextFieldClick = (event:any) => {
        //$('#tb_uploader_file_input').click();
        event.target.blur();
    };

    const handleFileTextChange = (event:any) => {
    };

    const handleFileSelection = (event:any) => {
        if(props.handleFileSelection === 'function')
            props.handleFileSelection(event);
    };

    const handleFormSubmit = (event:any) => {
        event.preventDefault();

        if(props.handleFormSumbit === 'function')
            props.handleFormSubmit(event);
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" className={inputClass}

                placeholder={(props.filetype == 'none' || props.filetype == undefined ? "Datei" : props.filetype) + " auswählen..."} 
                value={fileName}
                onClick={handleFileTextFieldClick} 
                onChange={handleFileTextChange}
                />
            <input id="tb_uploader_file_input" type="file" className="hidden" onChange={handleFileSelection} />

            {props.errorMsg !== undefined && props.errorMsg != '' ? <p className={errorMsgClass}>{props.errorMsg}</p> : null}
            
            <input type="submit" className={submitButtonClass} value={props.uploadButtonText} />
        </form>
    )
}

export default ReactFileManagerFileForm;