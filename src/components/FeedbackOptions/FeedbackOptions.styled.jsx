import styled from '@emotion/styled'

export const ButtonsSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;

    button {
        color: blue;
        width: 100px;
        padding: 10px;
        border: none;
        outline: none;
        text-transform: uppercase;
        background-color: #ffff49;

    :first-of-type{
        background-color: #3be93b;
        color: white;
    }  
    :last-of-type{
        background-color: red;
        color: green
    }  
    }
`
