"use client"; 
import { Fragment, useState } from 'react'
import { Container, CssBaseline } from '@mui/material';
import { Login } from '../containers/Login';

export default function Index() {
    return (
      <Fragment>
        <CssBaseline />
        <Container >
          <Login/>
        </Container>
      </Fragment>
  )
}
