import React, { useState } from "react";

import { useTheme } from "emotion-theming";

import PropTypes from "prop-types";

// import styles from "./todoforms.module.css";
import * as styles from "./todoform.style";

import Item from "../../layout/Item";
import Container from "../../layout/Container";

import Button from "../button/Button";
// untuk di table button dan tidak perlu menggunakan style 

const TodoForm = ({ addTodo, showAdd }) =>{
    const theme = useTheme();

    const [value, setValue] = useState("");

    const handleFormSubmit = e => {
        e.preventDefault();

        if (!value) {
            alert("task belum diisi");
            return;
        } 

        if (value.length > 40) {
            alert("maximum 40 huruf");
            setValue("");
            return;
        }

        addTodo(value);
        setValue("");        
    };

    if (showAdd) {
        return ( 
            <section className="todoform-component">
                <form  onSubmit={handleFormSubmit}>
                    <Container alignItems="flex-start">
                        <Item flex={1} padding="0 0 0 16px">
                        <input 
                            type="text" 
                            css={styles.addInput({ theme })} 
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        </Item>

                        <Item>
                            {/* <button css={styles.addBtn({ theme })}>ADD</button> */}
                            <Button text ="Add"/>
                        </Item>
                    </Container>
                </form>
            </section>
    );
    } else {
        return null;
    } 
};

TodoForm.propTypes = {
    addTodo : PropTypes.func.isRequired,
    showAdd : PropTypes.bool.isRequired
}

export default TodoForm;