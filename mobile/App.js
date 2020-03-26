import React from 'react';
import Routes from './src/routes'
import { StatusBar } from 'react-native'


export default function App() {
  return (
    <>
    <StatusBar 
    barStyle='dark-content'//branco
    backgroundColor='#7d40e7' //no android
    />
    <Routes />
    </>
  );
}