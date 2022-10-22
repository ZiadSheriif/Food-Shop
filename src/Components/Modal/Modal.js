import React from 'react';
import ReactDOM from 'react-dom';
import {ModalStyled, BackdropStyled} from "./Modal.styled";

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div onClick={props.onCLosed} className={classes.backdrop}/>
    );
};


const ModalOverlay = (props) => {
    return (
        <>
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>

        </>
    );

};


const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCLosed={props.onCLosed}/>, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </>
    );
};

export default Modal;
