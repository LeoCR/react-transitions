import {css} from 'styled-components'

export const global = css`
  
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  * {
    box-sizing: border-box;
    font-weight: 300;
    font-family: Roboto;
  }

  body {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  } 
`