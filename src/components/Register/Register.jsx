import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config.js";
import { useState } from "react";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('password must be at least 6 characters');
            // console.log(password.length);
            return;
        }

        // console.log(registerError);


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                // Sign In
                const user = res.user;
                setSuccess('User Registered Successfully.');
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setRegisterError(error);
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <h3 className="text-3xl">Please Register</h3>
            <form onSubmit={handleRegister} className="text-center w-80">
                <input className="w-full my-5 py-2 px-6" type="email" name="email" id="1" placeholder="Email address" />
                <br />
                <input className="w-full mb-5 py-2 px-6" type="password" name="password" id="2" placeholder="Password" />
                <br />
                <input className="btn btn-primary w-full" type="submit" value="register" />
                {registerError && <p className="text-red-500">{registerError.message}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </form>
        </div>
    );
};

export default Register;