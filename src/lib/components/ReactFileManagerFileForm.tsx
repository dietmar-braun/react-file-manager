import React, { Component, useState } from 'react';

import './style/style.css';

interface IEventFunc {
    (event: any): {}
}
interface IFileForm {
    fileType?:string,
    isCentered?: boolean,
    handleFileSelection?:IEventFunc,
    handleFormSubmit?:IEventFunc,
    handleFileTextChange?:IEventFunc,
    errorMsg?:string,
    uploadButtonText?:string,
}

const ReactFileManagerFileForm:React.FC<IFileForm> = (props) => { 
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
        if(typeof props.handleFileSelection === 'function')
            props.handleFileSelection(event);
    };

    const handleFormSubmit = (event:any) => {
        event.preventDefault();

        if(typeof props.handleFormSubmit === 'function')
            props.handleFormSubmit(event);
    }


    return (
        <form onSubmit={handleFormSubmit} className={"rfm-file-form" + (props.isCentered ? " center" : "")}>
            <input type="text" className={inputClass + ' rmf-file-input'}

                placeholder={(props.fileType == 'none' || props.fileType == undefined ? "Datei" : props.fileType) + " auswählen..."} 
                value={fileName}
                onClick={handleFileTextFieldClick} 
                onChange={handleFileTextChange}
                />
            <input id="rmf-uploader-file-input" type="file" className="hidden" onChange={handleFileSelection} />

            {props.errorMsg !== undefined && props.errorMsg != '' ? <p className={errorMsgClass}>{props.errorMsg}</p> : null}
            
            <input type="submit" className={submitButtonClass} value={props.uploadButtonText} />
        </form>
    )
}

export default ReactFileManagerFileForm;