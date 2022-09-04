import styled from "styled-components";

export const NavbarBox = styled.div`
    width: 100%;
    height: 80px;
    background: #0c0d2eef;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transition: .5s;
    .links{
        a{
            text-decoration: none;
            color: #ffffff;
            font-family: sans-serif;
            margin: 0 10px;
        }
        button{
            margin: 0 20px;
            height: 45px;
            width: 160px;
            border: 2px solid #ffffff;
            border-radius: 100px;
            background: rgba(12, 13, 46, 0.9);
            color: white;
            transition: .5s;
            &:hover{
                border: 2px solid #159BE8;
                background: #159BE8;
            }
        }
    }
    .navBtn{
        height: 40px;
        width: 40px;
        top: 10px;
        left: 10px;
        padding-top: 10px;
        position: fixed;
        background: transparent;
        border: 2px solid #ffffff; 
        color: white;
        font-size: 30px;
        outline: none;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        height: 100vh;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-around;
        left: -100%;
        .links{
            display: flex;
            justify-content: center;
            align-content: space-around;
            flex-wrap: wrap;
            a{
                margin: 10px;
                width: 100%;
                font-size: 30px;
                text-align: center;
            }
            button{
                margin: 30px 20px;
            }
        }
        .navBtn{
            display: flex;
        }
    }
`