import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/logo.svg'
import axios from 'axios';

const theme = createTheme();

export default function SignIn() { // componente SignIn

//    let contador = 0

    // função para fazer o login
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget); // recebe os dados do formulário

// teste de login        
//        console.log({
//            email: data.get('email'),
//            password: data.get('password'),
//        });

// teste funcional de criação de usuário com os dados do formulário para a implementação da interface de cadastro
//        axios.post('http://localhost:4000/create', {
//            email: data.get('email'),
//            password: data.get('password'),
//            blocked: 0
//        })
//        .then(res => {
//           console.log(res.data)
//        })

        // chamada na API para fazer a autenticação passando os dados do formulário
        axios.post(
            'http://localhost:4000/verify', { email: data.get('email'), password: data.get('password') } )
        .then(res => {
            
            if(res.data.bloqueado != undefined){// se a variavel estiver definida alerta que o usuário está bloqueado
                alert(res.data.bloqueado)
            } else {
                alert(res.data.usuario) // se não estiver bloqueado, alerta o status do usuário
                
                if(res.data.senha != undefined){ // se a variavel estiver definida alerta o status da senha
                    alert(res.data.senha)
                }
                
            }
        })

// primeiros testes de condicionais qno frontend que foram transferidos para o backend        
//        if (data.get('email') !== 'alexandrematis@gmail.com') {
//            alert('email incorreto')
//        } else {
//            alert('email correto')
//        }

//        if (data.get('password') !== '1234567890') {
//            alert('senha incorreta')
//            contador++
//            console.log(contador)
//        } else {
//            alert('senha correta')
//        }

//       if (contador >= 3) {
//            alert('usuário bloqueado por inserir 3 vezes a senha incorreta')
//        }
};

return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        //border: 'solid',
                    }}
                >

                    <img src={logo} alt="logo" />
                    <Typography component="h1" variant="h5">
                        epistemic
                    </Typography>


                    <Box 
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>

                        <TextField
                            margin="normal"
                            required
                            //fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            //fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Entrar
                        </Button>


                        <Link href="#" variant="body2" underline="none">
                            Esqueceu sua senha? Clique aqui
                        </Link>
                        
                        <p></p>
                        
                        <Link href="#" variant="body2" underline="none">
                            {"Não tem conta? Cadastre-se"}
                        </Link>

                    </Box>
                
                
                </Box> 
                <Typography variant="body2" color="text.secondary" align="center">
                    <p>
                        0.0.56
                    </p>
                    <Link color="inherit" href="https://www.epistemic.com.br/">
                        Termos de uso
                    </Link>
                </Typography>
            </Container>
        </ThemeProvider>
    );
}