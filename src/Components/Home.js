import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext'
import axios from 'axios';
import Post from './Post';

function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [posts, setPosts] = useState([])
  const date = new Date();
  const today_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  useEffect(() => {
    console.log("called")
    if (localStorage.getItem('storeuser') == null) {
      console.log("Print");
      navigate('/login')
    } else {
      setUser(JSON.parse(localStorage.getItem('storeuser')))
      axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${today_date}&sortBy=publishedAt&apiKey=04d8f69895e546d6adf1dd290740f391`)
        .then(function (response) {
          // handle success
          setPosts(response.data.articles)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }, [])
  // console.log(test)

  return (
    <div>{posts.map((post, index) => {
      return <Post key={index} post={post} />
    })}</div>
  )
}

export default Home