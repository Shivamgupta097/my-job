import React, { useRef,useState  ,useContext } from "react";
import axios from "axios";

import FormInput from "../common/FormInput";
import Button from "../common/Button";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./SignInForm.scss";

// import Cookies from 'universal-cookie';

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");


    const {currentUser ,setCurrentUser}  =useContext(UserContext);
     const navigate = useNavigate();
    const ref =useRef()

    const { email, password } = formFields;

    // handleChange
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    // handleSubmit
    const handleSubmit = async (event) => {
        event.preventDefault();

        //email validation start here
        const regEx =/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
       
        if(regEx.test(email)){

        }else{
            setEmailError("Please enter a valid email address");

        }

        //Api fetch for user
        axios.post("https://jobs-api.squareboat.info/api/v1/auth/login",{
            email:email,
            password:password

        }).then(response =>{
            const data =response.data.data;
            const {token, ...userData} = data;
            const cookies = new Cookies();
            cookies.set('tkn', token);
            // localStorage.setItem("tkn" ,JSON.stringify(token));
            localStorage.setItem("user" ,JSON.stringify(userData));
            //setting the localStorage
            setCurrentUser(JSON.parse(localStorage.getItem("user")));
            //navigate
            navigate('/jobs');

        }).catch(error =>{
            console.log(error);
            if(error.response.status === 401 ||error.response.status === 401){
                setError("Incorrect email address or password.");
            }
        });

        setFormFields(defaultFormFields);
    };
    return (
        <div className="card form-container" style={{width: "557px"}}>
            <div className="card-body">
                <div className="card-title">Login</div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label={"Email address"}
                        type="text"
                        onChange={handleChange}
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        required
                    />
                    {emailError && <p className="error">{emailError}</p>}

                    <FormInput
                        label={"Password"}
                        type="password"
                        onChange={handleChange}
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <div className="btn-container">
                        <Button type="submit" primary>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
