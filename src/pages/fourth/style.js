import styled from "styled-components";

export const FourthBox = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    background: #010225;
    padding: 50px;
    color: white;
    font-family: sans-serif;
    .block{
        height: 85vh;
        width: 40%;
        display: flex;
        align-content: center;
        .boxes{
            display: flex;
        }
        h3{
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            text-transform: uppercase;
            color: #159BE8;
        }
        h1{
            font-weight: 400;
            font-size: 40px;
            line-height: 54px;
        }
        p{
            font-weight: 400;
            font-size: 12px;
            line-height: 30px;
        }
        .box{
            width: 270px;
            height: 200px;
            display: flex;
            flex-wrap: wrap;
            align-content: space-around;
            .img{
                width: 100%;
            }
            img{
                height: 50px;
                width: 50px;
                background: #010225;
                border-radius: 10px;
                padding: 10px;
            }
            h1{
                font-size: 20px;
                font-weight: 400;
                line-height: 20px;
            }
            p{
                font-size: 11px;
                font-weight: 400;
                line-height: 24px;
            }
            a{
                text-decoration: none;
                font-weight: 400;
                font-size: 18px;
                line-height: 20px;
                color: #159BE8;
            }
        }
        button{
            height: 50px;
            width: 165px;
            background: transparent;
            border: 2px solid #ffffff;
            border-radius: 100px;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: white;
            transition: .5s;
            &:hover{
                border: 2px solid #159BE8;
                background: #159BE8;
            }
        }
        .imgs{
            display: flex;
            flex-wrap: wrap;
        }
    }
    @media screen and (max-width: 1100px) {
        height: auto;
        flex-wrap: wrap;
        .block{
            width: 100%;
            height: auto;
            .boxes{flex-wrap: wrap;}
            h1{
                font-size: 35px;
                line-height: 40px;
            }
            p{line-height: 25px;}
        }
        .imgs{
            margin: 20px auto;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            img{
                width: 100%;
                margin: 10px 0;
            }
        }
    }
`