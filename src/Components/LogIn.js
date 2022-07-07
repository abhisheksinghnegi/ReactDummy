import { Button } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import style from '../Components/LogIn.module.css'
import ShowUser from './ShowUser';
import { UserContext } from './UserContext';

function LogIn() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("empty");
    useEffect(() => {
        if (localStorage.getItem('storeuser') != null) {
            setUser(JSON.parse(localStorage.getItem('storeuser')))
            navigate('/showuser')
        }
    }, [])
    //aw check 2 345tdsgfsdg

    function handleSubmit(event) {
        event.preventDefault();
        if (email === "abhi@gmail.com" && password === "test123") {
            localStorage.setItem('storeuser', JSON.stringify({ name: "Abhishek", age: 23 }))
            setUser(JSON.parse(localStorage.getItem('storeuser')))
            navigate('/')
        } else {
            setCheck("incorrect")
        }
    }

    return (
        <React.Fragment>
            {user == null ? (<div><h1 className={style.middle}>LogIn</h1>
                <br />
                <div className={style.login}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => { setCheck("empty"); setEmail(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => { setCheck("empty"); setPassword(e.target.value) }}
                            />
                        </Form.Group>
                        <br />
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </Form>
                </div>
                <br />
                <div className={style.wrong} hidden={!(check == 'incorrect')}>
                    Wrong UserName or Password
                </div></div>) :
                <ShowUser user={user} />}
        </React.Fragment>
    );
}

export default LogIn