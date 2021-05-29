import React from "react"; 
import styled from "@emotion/styled"; 
import PropTypes from "prop-types"; 
// import { useTheme } from "emotion-theming"; // lebih baik digunakan dalam function jsx
import { withTheme } from "emotion-theming"; // lebih baik digunakan dalam class jsx 
const StyledButton = styled.button`
    font-size: 1.8rem;
    font-family: 'Homemade Apple', sans-serif;

    color: ${ props => props.textColor };
    text-align: ${ props => props.align };

    padding: 24px;
    cursor: pointer;

    background: unset;
    border: unset;
    outline: unset;
`; 
class Button extends React.Component {
    render() {  
        const { text, onClick, color, align, theme } = this.props; 
        const { color: { primary } } = theme; 
        let textColor; 
        switch(color){
            case "black":
                textColor = "#484848";
                break;
            case "red":
                textColor = "#e06262";
                break;
            default:
                textColor =  "#484848";
        } 
        return (
        <StyledButton onClick={onClick} textColor={textColor} align={align} >
            { text }
        </StyledButton>
    );
} 
static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
}; 
static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["right", "left"])
};
}

export default withTheme(Button);