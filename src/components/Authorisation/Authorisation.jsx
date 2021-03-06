import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";
import {useCookies} from "react-cookie";
import {NavLink} from "react-router-dom";


export default function Authorisation(props){
    const [email,changeEmail]=useState('')
    const [password,changePassword]=useState('');
    const [cookies, setCookie] = useCookies();
    function SubmitOnClick(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(user=>{
             setCookie("userEmail",user.user.email,{path:'/'});
             setCookie("userToken",user.user.accessToken,{path:'/'})
            })

    }
    return(
        <div>
            <h1>Войдите в аккаунт:</h1>
            <input type={'text'} value={email} onChange={e=>{changeEmail(e.target.value)}} placeholder={'Email адресс'}/>
            <input type={'password'} value={password} onChange={e=>{changePassword(e.target.value)}} placeholder={'Пароль'}/>
            <input type={'button'} value={'Войти'} onClick={SubmitOnClick}/>
            <NavLink to={'/register'}>Зарегестрироваться</NavLink>
        </div>
    )
};

