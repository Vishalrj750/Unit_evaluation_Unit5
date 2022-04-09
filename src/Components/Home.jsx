import React from "react";
import styled from 'styled-components';

const HomeWrapper = styled.div`
margin-top: 100px;
`

function Home() {
    return(
        <HomeWrapper>
            <div>
                <h1>Home</h1>
            </div>
        </HomeWrapper>
    )
}

export { Home }