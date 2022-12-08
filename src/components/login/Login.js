import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { loginUser } from "../../network/registerUser";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


export default function Login() {

    let [userDetails, setUserDetails] = useState({ email: "", password: "" });
    let [validationError, setValidationError] = useState("");
    let navigate = useNavigate();
    let {userDispatch} = useContext(UserContext);

    function handleInput(event) {

        let { id, value } = event.target;

        setUserDetails((oldState) => {
            return { ...oldState, [id]: value }
        })
    }

    function login() {
        if (validate().success) {
            //proceed to login
            loginUser(userDetails.email, userDetails.password)
                .then((loggedInUser) => {
                    if (loggedInUser) {
                        console.log("Login is successful");
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

        return { success: true }
    }

    return (
        <div className="login bg-color1 h-[90vh] flex">
            <div className="form flex flex-col bg-white w-11/12 sm:w-1/2 lg:w-[500px] mx-auto h-fit mt-40 p-8 shadow-lg">
                <span className="text-color2 mb-2">{validationError}</span>
                <span className="font-bold mb-1 ">E-mail</span>
                <input type="email" placeholder="Your e-mail"
                    className="border-[1px] border-black outline-none p-2 rounded-lg focus:border-color2"
                    onChange={handleInput} value={userDetails.email} id="email"></input>

                <span className="font-bold mb-1  mt-4">Password</span>
                <input type="password" placeholder="Your password"
                    className="border-[1px] border-black outline-none p-2 rounded-lg focus:border-color2"
                    onChange={handleInput} value={userDetails.password} id="password"></input>

                <button className="p-2 bg-color2 text-white mt-6 rounded-lg" onClick={login}>Login</button>

                <span className="mt-2">Don't have an account.&nbsp;
                    <span className="text-color2 underline underline-offset-2 cursor-pointer font-bold">
                        <Link to="/register">Register now.</Link>
                    </span>
                </span>
            </div>
        </div>
    );
}