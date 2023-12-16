import React from 'react'

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
    `}
    </style>
}

