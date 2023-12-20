/* eslint-disable @next/next/no-img-element */
import { Grid, Stack, Typography } from "@mui/material"
import Image from 'next/image';
import portadaVideocall from '@/app/assets/images/portada-videocall.png'
import { LoginForm } from "@/app/components/Login/LoginForm";

export const Login = () => {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
                <Stack justifyContent="center" alignItems="center" height={'100vh'}>
                    <Image src={portadaVideocall} alt="portada-videocall" width={550} height={400} priority={true} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Stack justifyContent="center" alignItems="center" height={'100vh'}>
                    <Stack spacing={2}>
                        <Stack>
                            <Typography variant="h4" sx={{textAlign: 'center'}} gutterBottom>React Videocall App</Typography>
                            <Typography variant="subtitle1" sx={{textAlign: 'center'}} gutterBottom>Aplicación para reuniones por videollamada con Agora, next y react typescript</Typography>
                        </Stack>
                        <LoginForm />
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}