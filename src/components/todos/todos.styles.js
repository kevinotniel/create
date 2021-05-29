import { css } from "@emotion/core";

export const todos = () => css`
    display: flex;
    flex-direction: column;

    min-height: 500px;
`;

export const todoPlaceholderText = () => css`
    font-family: "Syne Tactile", sans-serif;
    font-size: 24px;
    text-align: center;
    padding: 16px;
`;

export const addButtonPlaceholderText = () => css`
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
`;

export const seeAboutPagePlaceholderText = () => css`
    font-family: "Syne Tactile", sans-serif;
    font-size: 18px;
`