import React, { useRef } from 'react'
import axios from 'axios'
type Props = {}

const Login = (props: Props) => {
    const [userName, setuserName] = React.useState("")
    const [pwd, setpwd] = React.useState("");
    const [error, setError] = React.useState(false);
    const [flag, setflag] = React.useState(false)
    const [user, setuser] = React.useState({});

    const handleClick = async (e: any) => {
        // e.preventDefault();
        setflag(true)
        try {
            await axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
                setuser(data)
            })
        } catch (err) {
            setError(!!err)
        }
        setflag(false) 
    }

    return (
        <>
            <input type='text' placeholder='username' value={userName}
                onChange={(e) => setuserName(e.target.value)} required />
            <input type='text' placeholder='password' value={pwd}
                onChange={(e) => setpwd(e.target.value)} required />
            <button disabled={!userName || !pwd} onClick={handleClick}>{flag ? "please wait" : "login"}</button>
            <span data-testid="errorMsg" style={{ visibility: error ? "visible" : "hidden" }}>error</span>
        </>
    )
}

export default Login