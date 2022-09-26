import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, FormControlLabel, FormGroup, Slider, Switch, TextField, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import ButtonWithSnackbar from '../components/ButtonWithSnackbar'
import HeadWithOGP from '../components/HeadWithOGP'
import theme from '../theme'
import copyToClipboard from '../utils/copyToClipboard'
import repeat from '../utils/repeat'

const Home: NextPage = () => {
  const [unprocessedtext, setUnprocessedText] = useState("")
  const [processedText, setProcessedText] = useState("")
  const [processedTextMaxLength, setProcessedTextMaxLength] = useState(140)
  const [cramToTheMax, setCramToTheMax] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <HeadWithOGP
        url='https://yu-ko-ba.github.io/repeater/'
        title='repeater'
        description='入力された文字を繰り返します'
        imageUrl='https://raw.githubusercontent.com/yu-ko-ba/repeater/main/screenshot.png'
      />
      <main>
        <Container maxWidth="xs">
          <TextField
            label="繰り返したい文字列を入力してください"
            multiline
            margin='dense'
            fullWidth
            onChange={(e) => {
              setUnprocessedText(e.target.value)
              setProcessedText(repeat(
                e.target.value,
                processedTextMaxLength,
                cramToTheMax
              ))
            }}
          />
          <Box>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant='subtitle2'>詳細設定</Typography>
              </AccordionSummary>
              <AccordionDetails>
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
                <Typography>文字数</Typography>
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
                  step={70}
                  min={0}
                  max={500}
                  marks={[
                    { value: 140, label: "140文字" },
                    { value: 280, label: "280文字" }
                  ]}
                  valueLabelDisplay="auto"
                />
              </AccordionDetails>
            </Accordion>
          </Box>
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
    </ThemeProvider>
  )
}

export default Home
