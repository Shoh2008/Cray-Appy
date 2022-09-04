import styled from "styled-components";

export const SevenBox = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    background: #0C0D2E;
    color: white;
    font-family: sans-serif;
    .block{
        margin: auto;
        text-align: center;
        h1{
            font-weight: 400;
            font-size: 30px;
            line-height: 70px;
        }
        div{
            margin: auto;
            width: 150px;
            padding: 10px;
            display: flex;
            justify-content: space-between;
        }
        h3{
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
        }
        input{
            width: 400px;
            outline: none;
            color: white;
            padding-left: 10px;
            height: 50px;
            border: 2px solid #282B53;
            border-radius: 1px;
            background: #010225;
        }
        button{
            width: 200px;
            height: 50px;
            color: white;
            background: transparent;
            border: 2px solid #FFFFFF;
            border-radius: 100px;
            transition: .5s;
            margin-top: 30px;
            &:hover{
                border: 2px solid #159BE8;
                background: #159BE8;
            }
        }
        p{
            margin-top: 30px;
            color: white;
            a{
                margin: 10px;
                text-decoration: none;
                color: #159BE8;
            }
        }
    }
    @media screen and (max-width: 1100px) {
        width: 100%;
        .block{
            width: 100%;
            h1{
                font-size: 25px;
                line-height: 40px;
            }
            input{
                width: 100%;
            }
        }
    }
`