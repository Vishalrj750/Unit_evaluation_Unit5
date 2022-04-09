import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const RegisterWrapper = styled.div`
margin-top: 100px;
`

function Register() {

    const [formDetails, setFormDetails] = React.useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    })

    const { name, email, password, username, mobile, description } = formDetails

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    const handlClick = () => {
        navigate(`/login`)
    }

    return(
        <RegisterWrapper>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange} />
                    <br />
                    <input type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange} />
                    <br />
                    <input type="text"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange} />
                    <br />
                    <input type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleChange} />
                    <br />
                    <input type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={handleChange} />
                    <br />
                    <input type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={handleChange} />
                    <br />
                    <input type="submit" value={"SUBMIT"} />
                </form>
                <button onClick={handlClick}>Redirect to login page</button>
            </div>
        </RegisterWrapper>
        
    )
}

export { Register }