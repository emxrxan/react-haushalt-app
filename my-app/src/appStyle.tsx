import React from 'react'
import { color } from './enums/color'

export const AppStyle : React.FC = () => {
    return <style>
        {`
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        html, body{
            width: 100%;
            height: 100%;
            font-family: Arial, Helvetica, sans-serif;
        }
        h1{
            width: 100%;
            height: auto;
            padding: 0.5rem;
            text-align: center;
            background-color: ${color.GREY_Light};
            color: ${color.WHITE};
            border-bottom: 1px solid ${color.BLACK};
            -webkit-text-stroke: 1px ${color.BLACK};
        }
    `}
    </style>
}

