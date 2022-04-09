import React, { useEffect } from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showDetails } from "../Redux/action";
import { Card } from "./Card";

const EmployeesWrapper = styled.div`
margin-top: 100px;
.details{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
`

function Employees() {

    const employee_details = useSelector((state) => state.employee_details)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:3001/posts`)
        .then((res) => res.json())
        .then((res) => dispatch( showDetails( res ) ))
        .catch((err) => console.log(err))
    }, [])

    return(
        <EmployeesWrapper>
            <div>
                <h1>Employees List</h1>
                <div className="details">
                { employee_details.map((item) => <Card key={ item.id } name={ item.name } age={ item.age } gender={ item.gender } department={ item.department } salary={ item.salary } /> ) }
                </div>
            </div>
        </EmployeesWrapper>
        
    )
}

export { Employees }