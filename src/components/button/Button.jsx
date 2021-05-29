import React from 'react';  
import PropTypes from 'prop-types'; 
import { useTheme } from "emotion-theming"; 
// import cx from "classnames";
// menamakan cx untuk tidak clash dengan nama classnames 
// import styles from "./button.module.css"; cara 2 
import * as styles from './button.styles'; 
    // tidak perlu memberi .js 
    // merename const button (*) menjadi styles 
const Button = ({ text, onClick, color, align }) => { 
    const theme = useTheme();

    // cara 1: yang menggunakan classnames (mengambil dari file style.css )

    // const classNames = [
    //     "header-btn",
    //     color === "black" && "main-black-color",
    //     color === "red" && "main-red-color",
    //     align === "left" && "align-left",
    //     align === "right" && "align-right"
    // ].join(" "); // merubah array menjadi string, karena classnames meminta dalam data string


    // cara 2: yang menggunakan import styles dan membuat file css agar dijangkau/scalability

    // const classNames = cx( styles.headerBtn,  {
    //     [styles.mainBlackColor]: color === 'black',
    //     [styles.mainRedColor]: color === "red",
    //     [styles.alignLeft]: align === "left",
    //     [styles.alignRight]: align === "right"
    // });

    return (
        // sebelum
        // <button className={classNames} onClick={onClick}>{ text }</button>

        // sesudah menggunakan import * as styles
        <button css={styles.button({ align, color, theme })} onClick={onClick}>{ text }</button>
    )
}

Button.defaultProps = {
    text : "Button",
    color : "black",
    align : "left"
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func,
    color : PropTypes.oneOf([ "black", "red" ]),
    align : PropTypes.oneOf([ "right", "left" ])
}

export default Button;