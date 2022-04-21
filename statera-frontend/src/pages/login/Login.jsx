import Input from '../../components/Input/Input';
import React from 'react';

const Login = () => {
    return (
        <div>
            <div className=''>
                
            </div>  
            <form className='w-2/6'>
                <Input title="Email"/>
                <Input title="Password"/>
                <div className='flex justify-around'>
                    <Input title="password" password/>
                    <Input title="confirm" password/>
                </div>
            </form>
            
        </div>
    );
};

export default Login;
