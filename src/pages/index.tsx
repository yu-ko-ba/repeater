import { Container, FormControlLabel, FormGroup, Slider, Switch, TextField, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import ButtonWithSnackbar from '../components/ButtonWithSnackbar'
import HeadWithOGP from '../components/HeadWithOGP'
import copyToClipboard from '../utils/copyToClipboard'
import repeat from '../utils/repeat'

const Home: NextPage = () => {
  const [unprocessedtext, setUnprocessedText] = useState("")
  const [processedText, setProcessedText] = useState("")
  const [processedTextMaxLength, setProcessedTextMaxLength] = useState(140)
  const [cramToTheMax, setCramToTheMax] = useState(false)

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
            onChange={(e) => {
              setUnprocessedText(e.target.value)
              setProcessedText(repeat(
                e.target.value,
                processedTextMaxLength,
                cramToTheMax
              ))
            }}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) => {
                    setCramToTheMax(e.target.checked)
                    setProcessedText(repeat(
                      unprocessedtext,
                      processedTextMaxLength,
                      e.target.checked
                    ))
                  }}
                />
              }
              label="上限いっぱいまで文字を詰め込む"
            />
          </FormGroup>
          <Slider
            aria-label='文字数の上限'
            defaultValue={140}
            onChange={(_, v) => {
              setProcessedTextMaxLength(v as number)
              setProcessedText(repeat(
                unprocessedtext,
                v as number,
                cramToTheMax
              ))
            }}
            step={35}
            min={0}
            max={500}
            marks={[
              { value: 140, label: "140" },
              { value: 280, label: "280" }
            ]}
            valueLabelDisplay="auto"
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
