import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../Components/ShowUser.module.css'
import { UserContext } from './UserContext'
export default function ShowUser(props) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('storeuser') == null) {
            console.log("hello")
            navigate('/login')
        } else {
            console.log("trust")
            setUser(JSON.parse(localStorage.getItem('storeuser')))
        }
    }, [])
    const handleClick = () => {
        localStorage.removeItem('storeuser');
        setUser(null);
        navigate('/login')
    }
    return (
        <React.Fragment>
            {user != null ? <div className={style.middle}>
                <p>Username : {user.name}</p>
                <p>Age : {user.age}</p>
                <button className='btn btn-primary' onClick={handleClick}>LogOut</button>
            </div> : ""}
        </React.Fragment>
    )
}
