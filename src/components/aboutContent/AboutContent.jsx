import React from "react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./AboutContent.styles";

const AboutContent = () => {
    return (
        <section className="about-page-content-component">
            <Container flexDirection="column">
            <Item align="center">
                <h1 css={styles.aboutPageHeader}>About this App</h1>
                <h1 css={styles.aboutPageSubHeader}>
                    What i learn by building this app
                </h1>
            </Item>
            <Item>
                <Container>
                    <p css={styles.aboutPageParagraph}>
                        from building this app. i have learned React from ground up.
                        I know about npm, components, props, function, styling, emotion css
                        React in JS, React in Class, CSS in JS, styles in CSS
                    </p>
                </Container>
            </Item>
            <Item align="center">
                <Link to="/">
                    <span css={styles.backToHome}>Back to Home</span> 
                </Link>
            </Item>
            </Container>
        </section>
    )
}

export default AboutContent;