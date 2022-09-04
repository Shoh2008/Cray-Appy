import styled from "styled-components";

export const SixthBox = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    background: #010225;
    color: white;
    font-family: sans-serif;
    .head{
        text-align: center;
        b{
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
            font-size: 18px;
            line-height: 30px;
        }
        .box{
            display: flex;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            margin: auto;
            p{
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
            }
            .switch {
                border-radius: 50px;
                font-size: 17px;
                position: relative;
                display: inline-block;
                width: 45px;
                height: 20px;
            }
            .switch input {
                display: none;
                opacity: 0;
                width: 0;
                height: 0;
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #212250;
                transition: .2s;
                border-radius: 30px;
            }
            .slider:before {
                position: absolute;
                content: "";
                height: 14px;
                width: 14px;
                border-radius: 20px;
                left: 0.2em;
                bottom: 0.2em;
                background: #ffffff;
                transition: .4s;
            }
            input:checked + .slider:before {
                transform: translateX(25px);
            }

            div{
                text-align: left;
                b{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    color: white;
                }
                p{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                    color: #159BE8;
                }
            }
        }
    }
    .boxes{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .box{
            height: 440px;
            width: 390px;
            background: #0C0D2E;
            border-radius: 5px;
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            h1{
                font-weight: 400;
                font-size: 30px;
                line-height: 42px;
                width: 100%;
            }
            h2{
                font-weight: 400;
                font-size: 40px;
                line-height: 56px;
            }
            p{
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                width: 320px;
            }
            button{
                width: 200px;
                height: 50px;
                color: white;
                background: transparent;
                border: 2px solid #FFFFFF;
                border-radius: 100px;
                transition: .5s;
            }
            .a:hover{
                border: 2px solid #159BE8;
                background: #159BE8;
            }
            .b:hover{
                border: 2px solid #F95B74;
                background: #F95B74;
            }
            .c:hover{
                border: 2px solid #7C44E2;
                background: #7C44E2;
            }
        }
    }
    .block{
        width: 100%;
        height: 70vh;
        background: #0C0D2E;
        border-radius: 5px;
        margin:30px 15px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        position:relative;
        h1{
            font-weight: 400;
            font-size: 40px;
            line-height: 54px;
            width: 100%;
        }
        p{
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            width: 750px;
            margin: auto;
        }
        div{
            width: 100%;
            margin-top: 30px;
            button{
                margin: 0 10px;
                transition: .5s;
                width: 150px;
                height: 40px;
                color: white;
                background: transparent;
                border: 2px solid #FFFFFF;
                border-radius: 100px;
                transition: .5s;
                font-weight: 400;
                line-height: 16px;
                font-size: 16px;        
                &:hover{
                    border: 2px solid #159BE8;
                    background: #159BE8;
                }
            }
        }
        .A{
            position: absolute;
            width: 800px;
            height: 800px;
            border: 180px solid rgba(33, 34, 80, 0.4);
            left: calc(50% - 800px/2 - 653.5px);
            transform: translateY(-60%);
        }
        .B{
            position: absolute;
            width: 800px;
            height: 800px;
            border: 180px solid rgba(33, 34, 80, 0.4);
            left: calc(50% - 800px/2 + 534.5px);
            transform: translateY(10%);
        }
    }
    @media screen and (max-width: 1100px) {
        .head{
            width: 100%;
            h1{
                font-size: 35px;
                line-height: 40px;
            }
            p{
                font-size: 18px;
                line-height: 25px;
            }
            .box{
                flex-wrap: wrap;
                width: 100%;
                div{
                    width: 100%;
                    text-align: center;
                }
                p{ width: 100%; }
            }
        }
        .boxes{
            flex-wrap: wrap;
            .box{
                margin: 10px;
            }
        }
        .block{
            padding: 20px;
            height: auto;
            margin: 0;
            h1{
                font-size: 35px;
                line-height: 40px;
            }
            p{ line-height: 25px; }
            div{
                button{
                    margin: 10px;
                }
            }
            .A{
                width: 400px;
                height: 400px;
                border: 100px solid rgba(33, 34, 80, 0.4);
                top: 0;
                left: -80%;
            }
            .B{
                width: 400px;
                height: 400px;
                border: 100px solid rgba(33, 34, 80, 0.4);
                left: 50%;
                bottom: -30%;
            }
        }
    }
`