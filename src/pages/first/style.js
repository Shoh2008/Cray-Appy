import styled from "styled-components";

export const FirstBox = styled.div`
    width: 100%;
    padding: 50px;
    background: #010225;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .text{
        height: 100vh;
        padding: 100px 0;
        width: 40%;
        h1{
            color: white;
            font-family: sans-serif,'League Spartan';
            font-style: normal;
            font-weight: 500;
            font-size: 60px;
            line-height: 76px;
        }
        p{
            color: white;         
            font-family: sans-serif,'League Spartan';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 30px;
        }
        .btns{
            display: flex;
            button{
                height: 55px;
                width: 140px;
                border-radius: 10px;
                background: transparent;
                outline: none;
                border: none;
                padding: 0;
                img{
                    width: 100%;
                }
            }
        }
    }
    .img{
        height: 100vh;
        width: 40%;
        img{
            width: 550px;
        }
    }
    @media screen and (min-width: 750px) and (max-width: 1100px) {
        .text{
            h1{
                font-size: 40px;
                line-height: 45px;
            }
            p{line-height: 20px;}
        }
        .img{
            img{
                transform: translateX(-150px);
            }
        }   
    }
    @media screen and (max-width: 750px) {
        padding: 0;
        .text{
            width: 100%;
            height: 80vh;
            margin: 50px;
            h1{
                width: 80%;
                font-size: 40px;
                line-height: 45px;
            }
            p{line-height: 20px;}
        }
        .img{
            width: 100%;
            height:auto;
            margin: 0px;
            display: flex;
            justify-content: end;
            img{
                width: 500px;
            }
        }   
    }
`