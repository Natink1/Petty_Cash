import { useState } from 'react'
import './App.css'
import Petty from './Petty'
import { ModalProvider } from "./Petty";

function App() {

  return (
    <>
    <ModalProvider>
    <Petty />
    </ModalProvider>
    </>
  )
}

export default App
