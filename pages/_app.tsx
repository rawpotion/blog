import { AppProps } from 'next/app'
import '../styles/index.css'
import React from "react";

export default ({Component, pageProps}: AppProps) => <Component {...pageProps} />
