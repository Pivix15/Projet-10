import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, setUser } from '@/store/authSlice';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState('')

    const [rememberMe, setRememberMe] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() //évite le rechargement de la page

        if (!email || !password) {
            setErrorMessage("Veuillez remplir tous les champs")
            return
        }

        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.body && data.body.token) {
                    dispatch(loginSuccess(data.body.token)) //stock le token dans redux

                    if (rememberMe) {
                        console.log('Remember est coché, saugarde du token...')
                        localStorage.setItem('token', data.body.token)
                    }

                    fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: { Authorization: `Bearer ${data.body.token}` }
                    })
                        .then(res => res.json())
                        .then(profile => {
                            console.log(profile.body)
                            dispatch(setUser({
                                firstName: profile.body.firstName,
                                lastName: profile.body.lastName
                            }))
                            navigate('/admin')
                        })
                        .catch(err => console.log(err))
                } else {
                    setErrorMessage("Email ou mot de passe incorrect")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={onSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;