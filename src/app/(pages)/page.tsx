"use client"; 
import { Fragment } from 'react'
import { Container, CssBaseline } from '@mui/material';
import { Login } from '@/app/containers/Login';

export default function Page() {
    return (
      <Fragment>
        <CssBaseline />
        <Container >
          <Login/>
        </Container>
      </Fragment>
  )
}
