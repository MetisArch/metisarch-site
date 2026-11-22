import React from 'react'
import Head from 'next/head'
import { BackBtn, Code, Message, Wrapper } from './styles'

export const NotFoundView: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 — Página não encontrada | MetisArch</title>
      </Head>
      <Wrapper>
        <Code>404</Code>
        <Message>A página que você procura não foi encontrada.</Message>
        <BackBtn href="/">Voltar para o início</BackBtn>
      </Wrapper>
    </>
  )
}
