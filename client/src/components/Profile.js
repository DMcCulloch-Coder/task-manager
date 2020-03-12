import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const Profile = () => {

    const token = localStorage.getItem('Authorization');

    const header = {
        headers: {
            'Authorization': token
        }
    }

    const [userState, setUserState] = useState({
        name: '',
        email: ''
    });

    const [originalUserState, setOriginalUserState] = useState({
        name: '',
        email: ''
    });

    const [passVis, setPassVis] = useState(false)

    useEffect(() => {

        API.getUser(header).then(
            (result) => {
                setUserState({
                    name: result.data.name,
                    email: result.data.email
                })
                setOriginalUserState({
                    name: result.data.name,
                    email: result.data.email
                })
            }
        )
    }, []);

    useEffect(() => {
        document.getElementById('name').value = userState.name
        document.getElementById('email').value = userState.email
    }, [userState])

    const toggleVis = () => {
        setPassVis(!passVis)
    };

    const updateProfile = (e) => {
        e.preventDefault();

        if (originalUserState.name === $('#name').val()
            && originalUserState.email === $('#email').val()
            && !$('#password').val()
        ) {
            return console.log('Didn\'t Update User')
        }

        if (originalUserState.name !== $('#name').val()) {
            setUserState({
                ...userState,
                name: $('#name').val()
            })
        }

        if (originalUserState.email !== $('#email').val()) {
            setUserState({
                ...userState,
                email: document.getElementById('email').value
            })
        }

        if ($('#password').val()) {
            setOriginalUserState({
                ...originalUserState,
                password: $('#password').val()
            })
        }

        API.updateUser(originalUserState, header).then(result => {
            console.log(result)
        })

    };

    const logoutAll = () => {
        API.logoutAll(header).then(result => {
            console.log(result)
        })
    };

    const deleteUser = () => {
        API.deleteUser(header).then(result => {
            console.log(result)
        })
    };

    return (
        <div className='profile'>
            <h2 className='page__title'>Profile</h2>
            <p>Name: <input type='text' id='name'></input></p>
            <p>E-mail: <input type='text' id='email'></input></p>
            {passVis ?
                <p>Password: <input type='text' id='password'></input></p> :
                <button
                    onClick={toggleVis}
                >Create New Password</button>
            }
            <p><button
                onClick={updateProfile}
            >
                Submit Updates
            </button></p>
            <p><button
                onClick={logoutAll}
            >
                Logout of All Accounts
            </button></p>
            <p><button
                onClick={deleteUser}
            >
                Delete User Account
            </button></p>
        </div>
    );

};

export default Profile;