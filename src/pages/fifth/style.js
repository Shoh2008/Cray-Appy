import styled from "styled-components";

export const FifthBox = styled.div`
    width: 100%;
    height: 110vh;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    background: #010225;
    color: white;
    font-family: sans-serif;
    .block{
        width: 100%;
        height: 110vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-around;
        .head{
            width: 60%;
            text-align: center;
            p{
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
        }
        .logo{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .data{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .box{
                height: 360px;
                width: 300px;
                margin: 0 10px;
                b{
                    padding: 8px 10px;
                    border-radius: 10px;
                    background: #212250;
                    color: #159BE8;
                    margin: 0 5px;
                }
                p{
                    margin: 10px 0;
                    font-weight: 300;
                    font-size: 17px;
                }
                .info{
                    display: flex;
                    align-items: center;
                    img{
                        height: 50px;
                        width: 50px;
                        border-radius: 5px;
                    }
                    .text{
                        margin-left: 5px;
                        h2{
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 20px;
                        }
                        p{
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 16px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1100px) {
        width: 100%;
        height: auto;
        .block{
            height: auto;
            .head{
                h1{
                    font-size: 35px;
                    line-height: 40px;
                }
            }
            .logo{
                flex-wrap: wrap;
                img{
                    margin: 10px auto;
                }
            }
            .data{
                flex-wrap: wrap;
                margin-top: 10px;
                justify-content: center;
                align-items: center;
                .box{
                    height: auto;
                    width: 300px;
                    margin: 10px;
                }
            }
        }   
    }
`