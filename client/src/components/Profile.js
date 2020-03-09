import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const Profile = () => {

    const [userState, setUserState] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('Authorization');

        const header = {
            headers: {
                'Authorization': token
            }
        }

        API.getUser(header).then(
            (result) => {
                setUserState({
                    name: result.data.name,
                    email: result.data.email
                })
            }
        )
    }, []);

    return (
        <div>
            <h3>Profile working !</h3>
            <p>Name: {userState.name}</p>
            <p>E-mail: {userState.email}</p>
        </div>
    );

};

export default Profile;