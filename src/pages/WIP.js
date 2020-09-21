import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import wipLottie from '../utils/wipLottie.json'
import LottieLoader from '../utils/LottieLoader'

const Wrapper = withStyles({
    root:{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1B262C',
        textAlign: 'center'
    }
})(Box)

const WIP = () => (
    <Wrapper>
        <Typography variant='h2' color='secondary'>Under Construction<br/>Be back soon</Typography>
        <LottieLoader lottie={wipLottie} />
    </Wrapper>
)

export default WIP