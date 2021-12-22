import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 611px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
      padding-bottom: 0px;
  }
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 20px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    text-transform: uppercase;
}
`
export const TopLineImg = styled.img`
  height: 25px;
  width: 25px;
  margin: 0 10px;
  transform: translateY(6px);
  @media screen and (max-width: 350px) {
    margin: 0 3px;
}
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const SubtitleLink  = styled.a`
border-radius: 50px;
  background: #01bf71;
  padding: 2px 8px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  `

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  border-radius: 10px;
  height: 544px;
  width: ${({imgWidth}) => (imgWidth ? imgWidth : '100%')};
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '0px')};
  margin-top: ${({marginTop}) => (marginTop ? marginTop : '0px')};
  padding-right: 0;
  @media screen and (max-width: 768px) {
    margin: 0;
    height: auto;
  }
`;
