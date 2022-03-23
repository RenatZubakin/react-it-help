import React, {useState} from "react";
import s from "./ContactForm.module.css"
import {NavLink} from "react-router-dom";

function ContactForm(props) {
    const [nameValue, setName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [messageValue, setMessage] = useState('');


    return (
        <div className={s.modal}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                    <div className={s.top}>
                        <h1 className={s.text}>Написать нам</h1>
                        <div className={s.closeblock}>
                            <NavLink className={s.close} to='/'>X</NavLink>
                        </div>
                    </div>
                <form className={s.form} action="/" method={"post"}>
                    <input className={s.component} id={"name"} required name={"name"} type={"text"} placeholder={"Ваше имя"}
                           value={nameValue} onChange={e => setName(e.target.value)}/>
                    <input className={s.component} id={'email'} required name={"email"} type={"email"}
                           placeholder={"Email адресс"} value={emailValue}
                           onChange={e => setEmail(e.target.value)}/>
                    <textarea className={`${s.component} ${s.message}`} id={'message'} required name={"message"}
                              placeholder={"Сообщение.."} value={messageValue}
                              onChange={e => setMessage(e.target.value)}/>
                    <input className={s.btn} type="submit" id='submit' value="Отправить"/>
                </form>
            </div>
        </div>
            )
            }

            export default ContactForm;