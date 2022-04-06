import React, {useState} from "react";

const LoginForm = () => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Mock user database
    const database = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    }
    ];

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        //Take input, compare to (mock) database
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            setErrorMessages({ name: "uname", message: "User already exists." });
        } else {
            //Some code here to add user to database...
            database.push({uname, pass});
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for sign up form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                <div className="button-container">
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );

    return(
        <div className="signup-form">
            <div className="title">Sign Up</div>
            {isSubmitted ? <div>User Has successfully n</div> : renderForm}
        </div>
    );
}

export default LoginForm;