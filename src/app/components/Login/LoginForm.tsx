/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/app/context/GlobalContextProvider';

import { Button, InputLabel, Paper, Stack, TextField } from "@mui/material"

export const LoginForm = () => {
    const router = useRouter();
    const { token, channel, appId, setChannel, setAppId, setToken } = useGlobalContext();

    useEffect(()=> {
        setChannel(""), 
        setAppId(""), 
        setToken("") 
    }, [])

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
                onClick={() => router.push('/room')}>Join room</Button>
            </Stack>
        </Paper>
    )
}