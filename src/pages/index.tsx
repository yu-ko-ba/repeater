import { Container, TextField, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ButtonWithSnackbar from '../components/ButtonWithSnackbar'
import styles from '../styles/Home.module.css'
import copyToClipboard from '../utils/copyToClipboard'
import { repeatForNCharacters } from '../utils/repeat'

const Home: NextPage = () => {
  const [processedText, setProcessedText] = useState("")
  return (
    <>
      <Container maxWidth="xs">
        <TextField
          onChange={(event) => {
            setProcessedText(repeatForNCharacters(event.target.value, 140))
          }}
        />
        <Typography>{processedText}</Typography>
        <ButtonWithSnackbar
          buttonLabel='クリップボードにコピー'
          snackbarMessage='コピーしました'
          onClick={() => {
            copyToClipboard(processedText)
          }}
        />
      </Container>
    </>
  )
}

export default Home
