import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { UserContext } from "../../context/UserContext";
import { registerUser } from "../../network/registerUser";


export default function Register() {

    let [userDetails, setUserDetails] = useState({ name: "", email: "", password: "", repassword: "" });
    let [validationError, setValidationError] = useState("");
    let {userDispatch} = useContext(UserContext);
    let navigate = useNavigate();


    function handleInput(event) {
        let { id, value } = event.target;

        setUserDetails((oldState) => {
            return { ...oldState, [id]: value }
        })
    }

    function register() {
        if (validate().success) {
            //proceed to register
            registerUser(userDetails.email, userDetails.name, userDetails.password)
                .then((loggedInUser) => {
                    if (loggedInUser) {
                        console.log("Registration is successful");
                        //update the login state
                        userDispatch ({
                            type : "SET",
                            user : {...loggedInUser, loggedin : true}
                        });
                        navigate("/menu");
                    }
                })
                .catch((err) => {
                    setValidationError(err.message);
                })
        }

        else {
            setValidationError(validate().message);
        }
    }

    function validate() {
        let message = "";

        if (!validator.isEmail(userDetails.email)) {
            message = "Invalid e-mail"
            return { success: false, message }
        }
        if (userDetails.password.length == 0) {
            message = "Invalid passsword"
            return { success: false, message }
        }
        if (userDetails.password !== userDetails.repassword) {
            message = "Password did not match"
            return { success: false, message }
        }

        return { success: true }
    }

    return (
        <div className="register bg-color1 h-[90vh] flex">
            <div className="form flex flex-col bg-white w-11/12 sm:w-1/2 lg:w-[500px] mx-auto h-fit mt-40 p-8 shadow-lg">
                <span className="text-color2 mb-2">{validationError}</span>

                <span className="font-bold mb-1 ">Your Name</span>
                <input type="text" placeholder="Your e-mail"
                    className="border-[1px] border-black outline-none p-2 rounded-lg focus:border-color2"
                    onChange={handleInput}
                    id="name"
                    value={userDetails.name} ></input>

                <span className="font-bold mb-1 mt-4">E-mail</span>
                <input type="email" placeholder="Your e-mail"
                    className="border-[1px] border-black outline-none p-2 rounded-lg focus:border-color2"
                    onChange={handleInput} id="email"
                    value={userDetails.email}></input>

                <span className="font-bold mb-1  mt-4">Password</span>
                <input type="password"
                    placeholder="Your password" className="border-[1px] border-black outline-none p-2 rounded-lg focus:border-color2"
                    onChange={handleInput} id="password"
                    value={userDetails.password}></input>

                <span className="font-bold mb-1  mt-4">Repeat password</span>
                <input type="password" placeholder="Your password"
                    className="border-[1px] border-black outline-none p-2 rounded-lg focus:border-color2"
                    onChange={handleInput} id="repassword"
                    value={userDetails.repassword}></input>

                <button className="p-2 bg-color2 text-white mt-6 rounded-lg" onClick={register}>Register</button>
                <span className="mt-2">Already have an account&nbsp;
                    <span className="text-color2 underline underline-offset-2 cursor-pointer font-bold">
                        <Link to="/login">Login Now</Link>
                    </span>
                </span>
            </div>
        </div>
    );
}