import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};
    height: ${props => props.height};
    min-height: ${props => props.minHeight};
`

class Container extends React.Component {
    
    render() {
        const { children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, height, minHeight } = this.props;

        return (
            <StyledContainer flexDirection={flexDirection} flexWrap={flexWrap} justifyContent={justifyContent} alignContent={alignContent} alignItems={alignItems} height={height} minHeight={minHeight}>
                {children}
            </StyledContainer>
        )
    }
    
    static defaultpropTypes = {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        height: "auto",
        minHeight: "initial"
    }

    static propTypes = {
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
    } 
}

export default Container;