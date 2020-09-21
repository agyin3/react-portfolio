import React from 'react'
import { SimpleContainer } from '../../styled-components'
import LottieLoader from './LottieLoader'
import loader from "../../utils/loader.json"

const LoaderPage = () => (
    <SimpleContainer
    background='#30323d'
    color='#F9C2DC'
    >
        <LottieLoader lottie={loader} />
    </SimpleContainer>
)

export default LoaderPage