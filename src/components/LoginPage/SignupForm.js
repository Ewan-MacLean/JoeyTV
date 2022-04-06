import React, {useState} from "react";

const SignupForm = () => {
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
        var { email, uname, pass1, pass2 } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            setErrorMessages({ name: "uname", message: "User already exists." });
        } //else if (){
        //check email validity too tired to code rn
        //setErrorMessages({ name: "email", message: "Invalid email address." });
        //} 
        else if (pass1 !== pass2){
            setErrorMessages({ name: "pass2", message: "Please check that password matches." });
        }
        else {
            //Some code here to add user to database...
            database.push({uname, pass1});
            setIsSubmitted(true);
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
                    <label>Email </label>
                    <input type="text" name="email" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass1" required />
                </div>
                <div className="input-container">
                    <label>Repeat Password </label>
                    <input type="password" name="pass2" required />
                    {renderErrorMessage("pass2")}
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
            {isSubmitted ? <div>User Has successfully signed up</div> : renderForm}
        </div>
    );
}

export default SignupForm;