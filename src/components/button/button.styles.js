// sebelum 

// import { css } from '@emotion/core';

// export const button = ({ align }) =>  css`
//     width: 24%;
//     font-size: 1.8rem;
//     font-family: 'Homemade Apple', sans-serif;

//     color: ${ textColor };
//     text-align: ${ align };

//     padding: 24px;
//     cursor: pointer;

//     background: unset;
//     border: unset;
//     outline: unset;
//     `;

// sesudah membuat function class 

import { css } from "@emotion/core";

export const button = ({ color, align }) => {

    let textColor;

    switch (color) {
        case "black":
            textColor = '#484848';
        break;
        case "red":
            textColor = '#e06262';
        break;
        default:
            textColor = '#484848';
    }

    return css`
    
    font-size: 1.8rem;
    font-family: 'Homemade Apple', sans-serif;

    color: ${ textColor };
    text-align: ${ align };

    padding: 24px;
    cursor: pointer;

    background: unset;
    border: unset;
    outline: unset;
`;
};