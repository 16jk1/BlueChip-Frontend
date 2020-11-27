import React from 'react'
import { CardDef } from '../utils/Cards'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AHFS = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef> 
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
        <a className="App-link"
          href="https://www.instagram.com/jangbaeknam/">
        장백남 인스타
        </a>
        <div class="addthis_inline_share_toolbox_qc3e">  </div>
      </CardDef>
    </Wrapper>
  )
}

export const AHFT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const AHDS = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const AHDT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const ALFS = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const ALFT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const ALDS = ({ title, content, onBackClick}) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const ALDT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PHFS = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PHFT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PHDS = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PHDT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PLFS = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PLFT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PLDS = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export const PLDT = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}
