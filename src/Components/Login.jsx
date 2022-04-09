import React from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { loginFirst } from "../Redux/action";

const LoginWrapper = styled.div`
margin-top: 100px;
`

function Login() {

   const dispatch = useDispatch()

    const [formDetails, setFormDetails] = React.useState({
        username: "",
        password: ""
    })

    const { username, password } = formDetails

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => dispatch( loginFirst( res ) ))
        .catch((err) => console.log(`err ${err}`))
    }

    return(
        <LoginWrapper>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleChange} />
                    <br />
                    <input type="text"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange} />
                    <br />
                    <input type="submit" value={"SUBMIT"} />
                </form>
            </div>
        </LoginWrapper>
        
    )
}

export { Login }