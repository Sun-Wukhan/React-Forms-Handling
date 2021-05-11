import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from './components/DataContext'
import MainContainer from './components/MainContainer'
import Form from './components/Form'
import Input from './components/Input'
import { Link } from 'react-router-dom'
import PrimaryButton from './components/PrimaryButton'
import Typography from "@material-ui/core/Typography";
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field."),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("Last name field is required.")
});

export const Step1 = () => {
    const { setValues, data } = useData();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.LastName },
        mode: "onBlur",
        resolver: yupResolver(schema)
    });
    const history = useHistory();

    const onSubmit = (data) => {
        history.push("/step2");
        setValues(data)
    };



    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('firstName', {
                        required: true,
                    })}
                    name="firstName"
                    type="text"
                    label="First Name"
                    errors={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                {/* {errors.firstName && <p>First name is required.</p>} */}
                <Input
                    {...register('lastName', {
                        required: true,
                    })}
                    name="lastName"
                    type="text"
                    label="Last Name"
                    errors={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer >
    );
};

export default Step1;
