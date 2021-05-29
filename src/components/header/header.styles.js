import { css } from "@emotion/core";

export const header = () =>
    css`
        display: flex;
        align-items: flex-start;
    `;

export const headerTitle = () =>  
    css` 
    
    text-align: center; 
    color: var(--main-black-color);
    font-size: 3.6rem;
    font-family: "Syne Tactile", sans-serif;
    text-transform: lowercase;
`;