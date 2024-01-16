
import React from "react"
import styled from "styled-components"

type Sizes = 'big' | 'small'
type Colors = 'red' | 'blue'
type MyButtonProps = {
    size: Sizes,
    color: Colors,
    text: string
}

const Button = styled.button<{$size: Sizes; $color: Colors}>`
        background: ${props => props.$color === 'red' ? "red" : "blue"};
        color: ${props => props.$color === 'red' ? "blue" : "red"};
        width: ${props => props.$size === 'big' ? "100px" : "50px"}
        height: ${props => props.$size === 'big' ? "30px" : "15px"}
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #BF4F74;
        border-radius: 3px;
    `

export const MyButton = ({size = 'small', color = "red", text}: MyButtonProps) => {
    
    return <Button $color={color} $size={size}>{text}</Button>
}