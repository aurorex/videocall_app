import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import AgoraRTC from "agora-rtc-sdk-ng"
import { useGlobalContext } from "../context/GlobalContextProvider";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import UserCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';

const config: any = {
    mode: 'rtc',
    codec: 'vp8'
}

const rtc: any = {
    client: null,
    localVideoTrack: null,
    localAudioTrack: null,
}

export const RoomContainer = () => {
    const router = useRouter();
    const [remote, setRemote] = useState(false);
    const [camera, setCamera] = useState(false);
    const [microphone, setMicrophone] = useState(false);
    const [btnCall, setBtnCall] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const {appId, channel, token}= useGlobalContext()

    const join = async() => {
        rtc.client = AgoraRTC.createClient(config);
        await rtc.client?.join(appId, channel, token || null);
    }

    const initVideoCall = async() => {
        join().then(() => {
            // startVideo()
            // startAudio();
            // toggleCam(true);
            // toggleMicrophone(true);
            rtc.client?.on('user-published', async(user: any, mediaType: any) => {
                if (rtc.client?._users.length > 1) {
                    rtc.client?.leave();
                    setRemote(true)
                    return;
                } else {
                    setRemote(false)
                }
    
                await rtc.client?.subscribe(user, mediaType);
                if (mediaType === 'video') {
                    const remoteVideoTrack: any = user.videoTrack;
                    remoteVideoTrack.play('remote');
    
                }
                if (mediaType === 'audio') {
                    const remoteAudioTrack = user.audioTrack;
                    remoteAudioTrack.play()
                }
            });
       });
    }
    
    const startVideo = async() => {
        rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
        rtc.client?.publish(rtc.localVideoTrack);
        rtc.localVideoTrack.play('local');
      
    }
    
    const startAudio = async() => {
        rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        rtc.client?.publish(rtc.localAudioTrack);
        rtc.localAudioTrack.play();
    }
    
    const stopVideo = () => {
        rtc.localVideoTrack?.close();
        rtc.localVideoTrack?.stop();
       rtc?.client?.unpublish(rtc.localVideoTrack);
    }
    
    const stopAudio = () => {
        rtc.localAudioTrack?.close();
        rtc.localAudioTrack?.stop();
        rtc.client.unpublish(rtc.localAudioTrack);
    }
    
    
const startCall = () => {
    setBtnCall(true)
    initVideoCall();
}

const endCall = () => {
    setBtnCall(false)
    rtc.client?.leave();
    toggleCam(false);
    toggleMicrophone(false);
    router.push('/')
    
}

const toggleCam = (value: boolean) => {
    setCamera(value)
    if(value) startVideo();
    else stopVideo();
}

const toggleMicrophone = (value: boolean) => {
    setMicrophone(value)
    if(value) startAudio();
    else stopAudio();
}
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} >
                <Box id="remote" style={{width: '100%', height: '80vh', background: 'black', borderRadius: 20, }} >
                    <Box id="local" style={{width: isMobile ? '25%': '20%', height: isMobile ? '20%': '30%', background: 'white', position: 'fixed', zIndex: '1000', right: 20, top: 20, borderRadius: 20}}>
                        { !camera && <Stack display="flex" justifyContent="center" alignItems="center" height='100%'>
                            <UserCircleIcon color="primary" sx={{fontSize:"100px"}} />
                            <Typography >Local user</Typography>
                        </Stack>}
                    </Box>
                    { !(!remote && camera) && <Stack display="flex" justifyContent="center" alignItems="center"  height='100%'>
                        <UserCircleIcon color="warning" sx={{fontSize:"250px"}} />
                        <Typography style={{color: 'white'}}>Remote user</Typography>
                    </Stack>}
                </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Stack flexDirection="row" justifyContent="center" alignItems="center" sx={{height: '10vh'}}>
                    {camera ?
                        <IconButton aria-label="" size="large" onClick={()=> toggleCam(false)} color="error" >
                            <VideocamOffIcon fontSize="large"/> 
                        </IconButton>
                        : <IconButton aria-label="" size="large" onClick={()=> toggleCam(true)}  color="primary">
                            <VideocamIcon fontSize="large"/> 
                        </IconButton>
                    }
                    {microphone ?
                        <IconButton aria-label="" size="large" onClick={()=> toggleMicrophone(false)} color="error">
                            <MicOffIcon fontSize="large"/> 
                        </IconButton>
                        : <IconButton aria-label="" size="large" onClick={()=> toggleMicrophone(true)}  color="primary">
                                <MicIcon fontSize="large"/> 
                        </IconButton>
                    }
                    {
                        btnCall ?  
                        <IconButton aria-label="" size="large" onClick={endCall} color="error">
                            <PhoneDisabledIcon fontSize="large"/> 
                        </IconButton>
                        :<IconButton aria-label="" size="large" onClick={startCall} color="primary">
                            <PhoneEnabledIcon fontSize="large"/> 
                        </IconButton>  
                    }
                </Stack>
           
            </Grid>
        </Grid>
    )
}