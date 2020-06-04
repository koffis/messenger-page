import React from 'react';
import s from './Dialog.module.css'

const DefaultWindow = (props) => {
    return (
        <div className={s.defaultWindow}>
            <p>Please select chat</p>
            <i className="fa fa-comments" aria-hidden="true"/>
        </div>

    );
};

export default DefaultWindow;