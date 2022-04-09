import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
.card-main{
    width: 250px;
    background-color: aliceblue;
    box-shadow: 10px 10px 5px #cecece;
}
`

function Card({ name, age, gender, department, salary }) {
    return(
        <CardWrapper>
            <div className="card-main">
                <h3 className="name">{ name }</h3>
                <h3 className="age">{ age }</h3>
                <h3 className="gender">{ gender }</h3>
                <h3 className="department">{ department }</h3>
                <h3 className="salary">{ salary }</h3>
            </div>
        </CardWrapper>
    )
}

export { Card }