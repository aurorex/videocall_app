/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/app/context/GlobalContextProvider';

import { Button, CircularProgress, InputLabel, Paper, Stack, TextField } from "@mui/material"

export const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { token, channel, appId, setChannel, setAppId, setToken } = useGlobalContext();

    useEffect(()=> {
        setChannel(""); 
        setAppId("");
        setToken("");
        setLoading(false)
    }, [])

    const loginSession = () => {
        setLoading(true)
        setTimeout(()=>  {
            setLoading(false)
            router.push('/room')
        }, 2000);
    }

    return(
        <Paper elevation={0} variant="outlined" sx={{padding: '40px'}}>
            <Stack spacing={2} alignItems="center">
                <Stack flexDirection="row" justifyContent="center" alignItems="flex-end" >
                    <InputLabel shrink htmlFor="bootstrap-input"> App id</InputLabel>
                    <TextField
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    onInput={(e: any) => setAppId(e.target.value)}/> 
                </Stack>
                <Stack flexDirection="row" justifyContent="center" alignItems="flex-end" >
                    <InputLabel shrink htmlFor="bootstrap-input"> Token</InputLabel>
                    <TextField
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    onInput={(e: any) => setToken(e.target.value)}/> 
                </Stack>
                <Stack flexDirection="row" justifyContent="center" alignItems="flex-end" >
                    <InputLabel shrink htmlFor="bootstrap-input"> Room</InputLabel>
                    <TextField
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    onInput={(e: any) => setChannel(e.target.value)}/> 
                </Stack>
                <Button variant="contained" sx={{width: 300}} 
                disabled={!token.length || !channel.length || !appId.length}
                onClick={loginSession}>Join room 
                    {loading &&
                    <CircularProgress
                        size={30}
                        sx={{
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                        }}
                    />}
                </Button>
            </Stack>
        </Paper>
    )
}