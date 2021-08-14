import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { device } from './sizes';

const Works = ({ english }) => {
  return (
    <>
      <GlobalStyles />
      <WorksContainer>
        <WorkArea>
          <ProjectName>Project Name</ProjectName>
          <Description>
            Amet amet aute consectetur incididunt commodo mollit aliqua dolore consectetur
            esse. Sunt cillum anim dolore do ex nisi veniam. Incididunt commodo culpa in
            incididunt cillum irure voluptate esse.In ea anim commodo eiusmod non. Nostrud ipsum sunt
          </Description>
        </WorkArea>
        <ImgArea>
          <Img src={require('./images/AdminSitePick.png')} alt="Poietic" />
        </ImgArea>
        <BtnsArea>
          <Button
            href='https://poieticdemo.net'
            big={false}
          > {english ? 'Go to the Page' : 'Ir a la Página'}
          </Button>
          <Button
            href='https://github.com/GabrielTurrillas?tab=repositories'
            big={false}
          > {english ? 'Go to the Code' : 'Ir al Código'}
          </Button>
        </BtnsArea>
      </WorksContainer>
    </>
  )
}

export default Works


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
    grid-column-start:1;
    grid-column-end:3;
  }
`

const ImgArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  @media ${device.laptop} {
    grid-column-start:2;
    grid-column-end:3;
  }

`

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
    grid-column-start:1;
    grid-column-end:2;
`

const Img = styled.img`
  border-radius:5px;
  width: 80%;
  height:auto;
`;


const ProjectName = styled.h3`
  height: fit-content;
  padding:1rem;
  `

const Description = styled.article`
  display:flex;
  height: fit-content;
`

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
    grid-template-rows:2fr 1fr
  }
  @media ${device.laptopL} {
    padding:0 12rem;
  }
`;

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
} 
#root {
  margin:0 auto;
}
`
