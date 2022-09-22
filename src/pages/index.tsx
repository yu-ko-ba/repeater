import { Container, TextField, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ButtonWithSnackbar from '../components/ButtonWithSnackbar'
import HeadWithOGP from '../components/HeadWithOGP'
import copyToClipboard from '../utils/copyToClipboard'
import { repeatForNCharacters } from '../utils/repeat'

const Home: NextPage = () => {
  const [processedText, setProcessedText] = useState("")
  return (
    <>
      <HeadWithOGP
        url='https://yu-ko-ba.github.io/repeater/'
        title='repeater'
        description='入力された文字を繰り返します'
        imageUrl='https://raw.githubusercontent.com/yu-ko-ba/repeater/main/screenshot.png'
      />
      <main>
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
      </main>
    </>
  )
}

export default Home
