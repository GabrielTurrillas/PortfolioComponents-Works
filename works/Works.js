import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { device } from './sizes';

const Works = ({
  english,
  projectName,
  description,
  engDescription,
  imgURL,
  pageURL,
  githubURL,
  imgStart }) => {
  return (
    <>
      <GlobalStyles />
      <WorksContainer imgStart={imgStart}>
        <WorkArea>
          <ProjectName>{projectName}</ProjectName>
          <Description>
            {english ? description : engDescription}
          </Description>
        </WorkArea>
        <ImgArea>
          <Img src={imgURL} alt={projectName} />
        </ImgArea>
        <BtnsArea>
          <Button
            href={pageURL}
            big={false}
          > {english ? 'Go to the Page' : 'Ir a la Página'}
          </Button>
          <Button
            href={githubURL}
            big={false}
          > {english ? 'Go to the Code' : 'Ir al Código'}
          </Button>
        </BtnsArea>
      </WorksContainer>
    </>
  )
}

export default Works


const WorksContainer = styled.div`
  color: #f7f8fa;
  background: #010606;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr 1fr;
  font-family:'Didact Gothic', sans-serif;
  justify-content: center;
  @media ${device.mobileS} {
    grid-template-rows: repeat(3,1fr);
  }
  @media ${device.mobileM} {
    justify-content:center;
    grid-template-rows: repeat(3, 2fr);
  }
  @media ${device.mobileL} {
    padding:0 2rem;
  }
  @media ${device.tablet}{
    font-size:25px;
    grid-template-rows: repeat(2, 2fr) 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows:2fr 1fr;
    grid-template-areas: ${({ imgStart }) => (imgStart ? "'col2 col1' 'buttons buttons'" : "'col1 col2' 'buttons buttons'")}
  }
`;

const WorkArea = styled.div`
  display: flex;
  text-align:center;
  justify-content:center;
  flex-direction:column;
  padding:0 1rem;
  @media ${device.tablet}{
    padding:2rem;
  }
  @media ${device.laptop} {
    grid-area:col1;
  }
`

const ImgArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  @media ${device.laptop} {
    grid-area:col2;
  }
`

const BtnsArea = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0 2rem;
  @media ${device.tablet}{
    flex-direction:row;
  }
  @media ${device.laptop} {
    grid-area:buttons;
  }
`

const ProjectName = styled.h3`
  height: fit-content;
  padding:1rem;
`

const Description = styled.article`
  display:flex;
  height: fit-content;
`


const Img = styled.img`
  border-radius:5px;
  max-width: 80%;
  height: auto;
`;


const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: solid;
  border-color:#01BF71;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  margin:1rem;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  };
`



