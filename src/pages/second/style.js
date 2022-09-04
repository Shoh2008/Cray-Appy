import styled from "styled-components";

export const SecondBox = styled.div`
    width: 100%;
    height: 110vh;
    padding:0px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    background: #0C0D2E;
    color: white;
    font-family: sans-serif;
    .title{
        height: 35vh;
        width: 50%;
        text-align: center;
        margin: auto;
        h1{
            font-size: 40px;
            font-weight: 400;
            line-height: 54px;
        }
        p{
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
        }
    }
    .boxes{
        height: 35vh;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        .box{
            width: 270px;
            height: 200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: space-around;
            text-align: center;
            .img{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
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
    }
    @media screen and (min-width: 750px) and (max-width: 1100px) {
        width: 100%;
        padding: 50px;
        height: auto;
        .title{
            height: 50vh;
            width: 100%;
            h1{
                font-size: 35px;
                line-height: 40px;
            }
            p{line-height: 25px;}
        }
        .boxes{
            height: auto;
            width: 100%;
        }
    }
    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 50px;
        height: auto;
        .title{
            height: auto;
            width: 100%;
            h1{
                font-size: 35px;
                line-height: 40px;
            }
            p{line-height: 20px; font-size: 13px;}
        }
        .boxes{
            height: auto;
            width: 100%;
            .box{
                margin: 30px 0;
            }
        }
    }
`