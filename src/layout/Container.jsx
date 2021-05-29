import React from "react";

import { css } from "@emotion/core";

import PropTypes from "prop-types";

const Container = ({ children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, height, minHeight }) => {
    
    const containerStyle = css`
        display: flex;
        flex-direction: ${flexDirection};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        align-content: ${alignContent};
        height: ${height};
        min-height: ${minHeight};
    `
 
    return <div className="flex-container" css={containerStyle}>{children}</div>;
}

Container.defaultProps = {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    height: "auto",
    minHeight: "initial"
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    flexDirection: PropTypes.oneOf([
        "row",
        "row-reserver",
        "column",
        "column-reserve"
    ]),

    flexWrap: PropTypes.oneOf([
        "nowrap",
        "wrap",
        "wrap-reverse"
    ]),

    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "start",
        "end",
        "left",
        "right",
    ]),

    alignItems: PropTypes.oneOf([
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "first baseline",
        "last baseline",
        "start",
        "end",
        "self-start",
        "self-end"
    ]),

    alignContent: PropTypes.oneOf([
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "first baseline",
        "last baseline",
        "start",
        "end",
        "space-between",
        "space-around",
        "space-evenly",
    ]),

    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    minHeight: PropTypes.string,
};

export default Container;