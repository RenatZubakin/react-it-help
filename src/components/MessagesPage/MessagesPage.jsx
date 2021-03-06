import React from "react";
import s from "./MessagesPage.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import UserMessage from "./UserMessage/UserMessage";
import Messages from "./Dialogs/Messages/Messages";
import Dialogs from "./Dialogs/Dialogs";

function MessagesPage(props){
        return (
            <div className={s.container}>
                <div className={s.names}>
                    {props.messages.map(function (e) {
                            return <UserMessage name={e.name} email={e.email}/>
                        }
                    )}
                </div>
                <div className={s.messages}>
                    <Routes path={'/messages'}>
                        {props.messages.map(function (e) {
                            return <Route path={e.name} element={<Dialogs name={e.name} email={e.email} message={e.message}/>}/>
                        })}
                    </Routes>
                </div>
            </div>
        )
}
export default MessagesPage;