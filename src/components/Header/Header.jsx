import React from 'react';
import styled from "styled-components";


// Responsive
import device from "../../responsive/breakpoints";


// Styles
const AppHeader = styled.header`
        background-color: #f5f1f1;

        & h1 {
                font-family:   ${({theme}) => theme.playfair};
                background-image: linear-gradient(to right, 
                ${({theme}) => theme.lightViolet}, 
                ${({theme}) => theme.darkViolet});
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        }
`

const Header = () => {
        return (
                <AppHeader>
                        <h1>Discworld Checklist</h1>
                </AppHeader>
        )
}

export default Header;