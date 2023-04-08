import React, { useState, useRef } from "react";

import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from "../UI/Button";

import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollegeName = collegeInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollegeName.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredUserAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        collegeInputRef.current.value = ''
    };

    const errorHandler = () => {
        setError(null);
    }

    return(
        <Wrapper>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username"
                    type="text"
                    ref={nameInputRef}
                />

                <label htmlFor="age">Age (Years)</label>
                <input id="age"
                    type="text"
                    ref={ageInputRef}
                />

                <label htmlFor="college">College Name</label>
                <input id="age"
                    type="text"
                    ref={collegeInputRef}
                />

                <Button type="submit">Add User</Button>

            </form>
        </Card>
        </Wrapper>
    );

};

export default AddUser;