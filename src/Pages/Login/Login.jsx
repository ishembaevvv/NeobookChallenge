import React, { useEffect, useState } from 'react';
import scss from './Login.module.scss';
import bgLogin from './PhotoBackground.png';
import { Link, json } from 'react-router-dom';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export default function Login() {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetch(`https://neobook.online/mobi-market/users/change-password/`)
        .then(respone => respone.json())
        .then(json => console.log(json))
      }, []);

    return (
        <div className={scss.Login_screen} >
            <img src={bgLogin} alt="" />
            <div className={scss.login}>
                <input type="text" placeholder='Имя пользователя' />
                <input
                    value={password}
                    placeholder='Пароль'
                    id="Пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    type={visible ? "text" : "password"}></input>
                <div className={scss.eye} onClick={() => setVisible(!visible)}>
                    {
                        visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                    }
                </div>


                <p>Забыли пароль</p>

                <button className={scss.btn1}>Войти</button>

                <button className={scss.btn2}>Зарегистрироваться</button>

            </div>
        </div>

    )
}
