import styled from "styled-components";

export const ThirdBox = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    background: #0C0D2E;
    color: white;
    text-align: center;
    font-family: sans-serif;
    overflow: hidden;
    position:relative;
    .design{
        position: absolute;
        width: 800px;
        height: 800px;
        transform: translate(-50%, -50%);
        border: 180px solid rgba(33, 34, 80, 0.4);
    }
    .header{
        width: 60%;
        margin: auto;
        text-align: center;
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
    }
    .blocks{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .block{
            margin: 0 20px;
            .box{
                height: 200px;
                width: 350px;
                margin: 30px 0;
                div{
                    height: 8px;
                    width: 8px;
                    margin:20px 8px;
                    background: #159be8;
                    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.12);
                }
                h1{
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 20px;
                }
                p{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    margin-top: 15px;
                }
            }
        }
        .right{
            text-align: right;
            .box{
                div{
                    transform: translateX(calc(350px - 24px));
                }
            }
        }
        .left{
            text-align: left;
        }
    }
    @media screen and (max-width: 1100px) {
        .header{
            width: 100%;
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
        }
        .blocks{
            flex-wrap: wrap;
        }
    }
`