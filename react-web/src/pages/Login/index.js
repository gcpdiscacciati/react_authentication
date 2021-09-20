import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { PageTitle, SmallerTitle, Main, Form, Label, Button, Paragraph, TextField, Link } from './styles';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const history = useHistory();
    
    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setSenha(event.target.value);
    }

    function handleKey(event) {
        if(event.keyCode === 13){
            handleLogin(event);
        }
    }

    async function handleLogin(event){
        event.preventDefault();
        try{
            const response = await api.post("/auth/authenticate",
            {
                email,
                password,
            });
            localStorage.setItem('auth', true);
            history.push({
                pathname: '/home',
                state: response.data
            });
        }catch(err){
            alert("Invalid e-mail address or password!");
            console.log(err.response.data.error);
        }
    }

    return(
        <Main>
            <PageTitle>Authentication</PageTitle>
            <SmallerTitle>Please, enter your credentials</SmallerTitle>
            <Form>
                <Paragraph>
                    <Label>
                        E-mail:
                        <TextField type='text' value={email} placeholder='lorem@ipsum.com' onChange={handleEmail}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Password:
                        <TextField type='password' value={password} placeholder='Enter your password' onChange={handlePassword} onKeyUp={handleKey}/>
                    </Label>
                </Paragraph>
                <Button type='button' value='Login' onClick={handleLogin} />
                <Link href='/sign-up'>Create Account</Link>
            </Form>
        </Main>
    );
}