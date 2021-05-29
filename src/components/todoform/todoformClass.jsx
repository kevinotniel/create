import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import Button from "../button/Button";

const StyledAddInput = styled.input`
    background: unset;
    border: unset;
    padding: 0 64px;

    width: 100%;

    border-bottom: 1px solid ${props => props.theme.color.primary.red};
    outline: unset;

    font-family: "Syne Tactile", sans-serif;
    font-size: 16px;
    text-transform: lowercase; 
`

class TodoForm extends React.Component {

    // const [value, setValue] = useState(""); // cara state dengan REACT HOOKS
    state = { //object property
        value: ""
    }

    handleFormSubmit = e => {
        const { value } = this.state; //object this.constructor
        const { addTodo } = this.props;
        e.preventDefault();

        // if(!this.state.value) { // mengambil this dari luar method
        if(!value) {
            alert("No blank todo!");
            return;
        }

        if(value.length > 40) {
            alert("please create a shorter todo text!");
            // setValue(""); // cara state REACT HOOKS
            this.setState({
                value: ""
            })
            return;
        }

        addTodo(value);
        // setValue(""); cara state REACT HOOKS
        this.setState({
            value: ""
        })
    }

    handleOnChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        const { showAdd, theme } = this.props; 
        // addTodo tidak diperlukan lagi karena sudah di deklar props di method handle

        if (showAdd){
            return(
                <section className="todoform-component">
                    <form  onSubmit={this.handleFormSubmit}>  {/*membutuhkan helper function*/}
                        <Container alignItems="flex-start">
                            <Item flex={1} padding="0 0 0 16px">
                            <StyledAddInput  
                                type="text" 
                                theme={theme} 
                                value={this.state.value} // constructor
                                // onChange={e => setValue(e.target.value)}
                                onChange={this.handleOnChange} // membutuhkan helper function
                            />
                            </Item>

                            <Item>
                                {/* <button css={styles.addBtn({ theme })}>ADD</button> */}
                                <Button text ="Add"/>
                            </Item>
                        </Container>
                    </form>
                </section> 
            )
        }else {
            return null;
        }
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        showAdd: PropTypes.bool.isRequired
    }
}

export default withTheme( TodoForm );