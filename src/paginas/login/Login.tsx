import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text1'>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não Tem uma conta?                          </Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='text1'>Cadastre-se                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='img'>
            </Grid>
        </Grid>
    );
}

export default Login