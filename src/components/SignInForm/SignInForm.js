import React from "react";
import { useState } from "react";
import FormInput from "../common/FormInput";
import Button from "../common/Button";

import "./SignInForm.scss";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormFields(defaultFormFields);

    };
    return (
        <div className="card form-container" style={{width: "557px"}}>
            <div className="card-body">
                <div className="card-title">Login</div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label={"Email address"}
                        type="email"
                        onChange={handleChange}
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        required
                    />
                    <FormInput
                        label={"Password"}
                        type="password"
                        onChange={handleChange}
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        required
                    />
                    <div className="btn-container">
                        <Button type="submit" primary>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
