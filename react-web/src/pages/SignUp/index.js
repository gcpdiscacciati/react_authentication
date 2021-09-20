import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Form, Main, PageTitle, Label, TextField, Button, Link, Paragraph } from './styles';


export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const history = useHistory();
    
    function handleName(event){
        setName(event.target.value);
    }
    
    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setSenha(event.target.value);
    }

    async function handleSignUp(event){
        event.preventDefault();
        try{
            const response = await api.post("/auth/register",
            {
                name,
                email,
                password,
            });
            alert("Account created successfully");
            history.push({
                pathname: '/',
                state: response.data
            });
        }catch(err){
            alert("User already exists or invalid field values!");
            console.log(err.response.data.error);
        }
    }

    return(
        <Main>
            <PageTitle>Create a new account:</PageTitle>
            <Form>
                <Paragraph>
                    <Label>
                        Name:
                        <TextField type='text' value={name} placeholder='Enter your name' onChange={handleName}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        E-mail:
                        <TextField type='text' value={email} placeholder='lorem@ipsum.com' onChange={handleEmail}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Password:
                        <TextField type='password' value={password} placeholder='Enter your password' onChange={handlePassword}/>
                    </Label>
                </Paragraph>
                <Button type='button' value='Create Account' onClick={handleSignUp} />
                <Link href='/'>Back to Login</Link>
            </Form>
        </Main>
    );
}