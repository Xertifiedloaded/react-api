import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './profileCards.module.css'
const ProfileCards = () => {
    const { id } = useParams()
    let [profile, setProfile] = useState([])

    const Profile = async () => {
        try {
            const res = await axios({
                method: "GET",
                url: `https://dummyjson.com/users/${id}`,
                "headers": {
                    "Content-Type": "application/json"
                }
            })
            console.log(res.data)
            setProfile(res.data)
        } catch (error) {
            console.log(error)
        }
    }

console.log(id)
    useEffect(() => {
        Profile()
    }, [])
    return (
        <>
            {/* <ProfileUser  /> */}
            <div className={classes.main}>
                <div className={classes.profile}>
                    <div className={classes.imgCont}>
                        <img src={`${profile.image}`} />
                    </div>
                    <div className={classes.information}>
                        <div className={classes.personal}>
                            <h5>Personal Information</h5>
                            <p> <span>FirstName: </span>{`${profile.firstName} ${profile.lastName}`}</p>
                            <p> <span>Age: </span>{`${profile.age}`}</p>
                            <p> <span>Height: </span>{`${profile.height}`}</p>
                            <p> <span>Gender: </span>{`${profile.gender}`}</p>
                            <p> <span>Weight: </span>{`${profile.weight}`}</p>
                            <p> <span>DOB: </span>{`${profile.birthDate}`}</p>
                            <p> <span>Blood Group: </span>{`${profile.bloodGroup}`}</p>
                            <p><a href={`mailto:certifedloaded@yahoo.com`} ><span>Email: </span>{`${profile.email}`}  </a> </p>
                            <p> <span>Phone Number: </span>{`${profile.phone}`}</p>
                            <p> <span>University: </span>{`${profile.university}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCards;