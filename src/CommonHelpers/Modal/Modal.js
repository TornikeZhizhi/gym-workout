import React, { useContext, useEffect } from 'react';
import { ModalTheme } from '../../Contexts/ModalContext';
import "./Modal.scss";

const Modal = () => {

const ctxModal = useContext(ModalTheme)

    useEffect(() => {

        // window click
        var closeMenu = () => {
            ctxModal.menuToglerHandler(false);
        };
        window.addEventListener("click", closeMenu);
        return () => window.removeEventListener("click", closeMenu);
      }, []);

    return (
        <div className='modal_fluid'>
            <div className='modal_container'>
            <form action="#" method="post" class="contact-form" onClick={(e)=>{
                e.preventDefault()
                e.stopPropagation()
            }}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required  autoComplete='off'/>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required autoComplete='off'/>
                </div>
                
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required autoComplete='off'></textarea>
                </div>
                
                <div class="form-group btn_group">
                    <button type="submit" class="btn-submit">Send</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;