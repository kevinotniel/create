import { css } from "@emotion/core";

// export const add = () => css`
//     padding: 16px;          
// `;

// export const addForm = () => css`
//     display: flex;
//     align-items: flex-start;
// `;

export const addInput = ({ theme }) => css`
    background: unset;
    border: unset;
    padding: 0 64px;

    width: 100%;

    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;

    font-family: "Syne Tactile", sans-serif;
    font-size: 16px;
    text-transform: lowercase; 
`;

// tidak digunakan karena mengambil dari file button

// export const addBtn = ({ theme}) => css`
//     font-size: 1.8rem;
//     font-family: 'Homemade Apple', sans-serif;
//     cursor: pointer;

//     padding: 16px;
//     padding-right: unset;

//     background: unset;
//     border: unset;
//     outline: unset;
//     &:active {
//         text-shadow: 1px 1px 2px ${theme.color.primary.black    };
//     }
// `;

