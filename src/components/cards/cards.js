import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from './cards.module.css'
import { Link } from 'react-router-dom'
const Cards = () => {
    const [user, setUser] = useState([])
    const getUsers = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://dummyjson.com/users",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response.data.users)
            setUser(response.data.users)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            <div className={classes.cards}>
                {
                    user.map((items, i) => (
                        <CardTemplate user= {user} {...items} index={i} />
                    ))
                }
            </div>
        </>
    )
}

export default Cards;

const CardTemplate = ({ user, index }) => {
    return (
        <>
            <div className={classes.main} >
                <div className={classes.imgCont}>
                    <div className={classes.imgCont}>
                        <img src={`${user[index].image}`} alt='name' />
                    </div>

                </div>
                <p className={classes.name}>
                    {`${user[index].firstName} ${user[index].lastName}`}
                </p>
                <p>
                    {`${user[index].phone}`}
                </p>
                <p>
                    {`${user[index].username}`}
                </p>
               
                <Link to={`/profile/${user[index].id}`}  >
                    <button>
                        click for more
                    </button>
                </Link>
            </div>
        </>
    );
};


