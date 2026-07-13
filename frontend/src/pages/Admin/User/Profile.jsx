import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/store/authSlice'
import { useState } from 'react'
import Accounts from '@/components/Accounts'

const Profile = () => {
    const firstName = useSelector((state) => state.auth.firstName)
    const lastName = useSelector((state) => state.auth.lastName)

    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)

    const [editing, setEditing] = useState(false)
    const [newFirstName, setNewFirstName] = useState('')

    const handleEdit = () => {
        setEditing(true)
        setNewFirstName(firstName)
    }

    const handleSave = () => {
        fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                firstName: newFirstName,
                lastName: lastName
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log('lastName depuis Redux:', lastName)
                dispatch(setUser({
                    firstName: newFirstName,
                    lastName: data.body.lastName
                }))
                setEditing(false)
            })
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {editing ? (
                    <>
                        <h1>Welcome back</h1>
                        <div className='edit-form'>
                            <div className="edit-form-row">
                                <label>First name:</label>
                                <input
                                    type="text"
                                    value={newFirstName}
                                    onChange={(e) => setNewFirstName(e.target.value)}
                                />
                            </div>
                            <div className="edit-form-row">
                                <label>Last name:</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    readOnly
                                />
                            </div>
                            <div className='main-button'>
                                <button className="edit-button" onClick={handleSave}>Save</button>
                                <button className="edit-button" onClick={() => setEditing(false)}>Cancel</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Welcome back<br />{firstName} {lastName}!</h1>
                        <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                    </>
                )}
            </div>
            <Accounts />
        </main>
    );
};

export default Profile;