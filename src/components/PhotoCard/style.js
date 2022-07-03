import styled from "styled-components"
import { fadeIn } from "../../styles/animation"

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.figure`
  border-radius: 10px;
  margin: 0;
  display: block;
  overflow: hidden;
  height: 0;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  ${fadeIn()}
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
