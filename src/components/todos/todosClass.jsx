import React from "react";
import PropTypes from "prop-types"; 
import styled from "@emotion/styled";
import Todo from "../todo/Todo";
import Container from "../../layout/Container";

const StyledTodoPlaceholderText = styled.div`
    font-family: "Syne Tactile", sans-serif;
    font-size: 24px;
    text-align: center;
    padding: 16px;
`

const StyledAddButtonPlaceholderText = styled.span`
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
`

class Todos extends React.Component {
    render(){

        const { todos, completeTodo } = this.props;

        return(
            <section className="todos-component">
                <Container flexDirection="column" minHeight="500px">
                    {todos.length > 0 &
                        todos.map((todo, index) => {
                            return(
                                <Todo
                                    key={index}
                                    text={todo.text}
                                    isCompleted={todo.isCompleted}
                                    completeTodo={completeTodo}
                                    index={index}
                                />
                            )
                        })}
                        {todos.length === 0 && (
                            <StyledTodoPlaceholderText>
                                {[
                                    "Add todo by clicing ",
                                    <StyledAddButtonPlaceholderText>
                                        Add
                                    </StyledAddButtonPlaceholderText>,
                                    " button on the top of left corner"
                                ]}
                            </StyledTodoPlaceholderText>
                        )}
                </Container>
            </section>
        )
    }

    static propTypes = {
        todos: PropTypes.arrayOf( PropTypes.shaape({
            text: PropTypes.string
        })),
        completeTodo : PropTypes.func.isRequired
    };
} 

export default Todos;