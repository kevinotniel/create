import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";



// import styles from "./header.module.css";

import Button from "../button/Button";

// import { css } from "@emotion/core";

import * as styles from './header.styles';

import Container from "../../layout/Container";

import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {

    const theme = useTheme();

    return (
        <section className="header-component">
            <Container alignItems="flex-start">
                <Item flex={1}> 
                    <Button text={showAdd ? 'Finish' : 'ADD'} onClick={showAddToggle} />
                </Item>

                <Item flex={2}>
                    <h1 css={styles.headerTitle(theme)}>Todo Lists</h1> 
                </Item>

                <Item flex={1} align="right">
                    <Button text="Clear" onClick={clearTodos} color="red" align="right" />
                </Item>
            </Container>
        </section> 
    )
}

Header.propTypes = {
    showAddToggle : PropTypes.func.isRequired,
    showAdd : PropTypes.bool.isRequired,
    clearTodos : PropTypes.func.isRequired
}

export default Header;