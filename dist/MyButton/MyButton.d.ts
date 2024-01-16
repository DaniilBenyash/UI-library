import React from "react";
type Sizes = 'big' | 'small';
type Colors = 'red' | 'blue';
type MyButtonProps = {
    size: Sizes;
    color: Colors;
    text: string;
};
export declare const MyButton: ({ size, color, text }: MyButtonProps) => React.JSX.Element;
export {};
