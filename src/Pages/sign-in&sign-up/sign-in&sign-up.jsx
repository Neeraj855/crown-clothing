import React from 'react';
import './sign-in&sign-up.scss';
import SignIn from '../../Components/sign-in/sign-in';
import SignUp from '../../Components/Sign-up/sign-up';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />


    </div>
);

export default SignInAndSignUpPage;