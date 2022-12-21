import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #FFFFFF;
    z-index: 1;
    max-width: 1900px;
    margin-right: auto;
    margin-left: auto;
    overflow:hidden;
    @media screen and (max-width: 820px) {
     max-width: 820px;
  }
`

export const FooterWrap = styled.div`
`

export const SocialMedia = styled.section`
  max-width: 1180px;
  @media screen and (max-width: 820px) {
     max-width: 700px;
  }
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px) {
      width: 300px;
  }
`

export const SocialLogo = styled(Link)`
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
   @media screen and (max-width: 820px) {
   position: absolute;
     width: 150px;
        left: 50%;
        transform: translateY(-150%);
   }
`
export const SocialIconLink = styled.a`
  color: #7283bc;
  font-size: 50px;
`

export const ImgWrap = styled.div`
  display: flex;
  max-width: 300px;
 
  @media screen and (max-width: 480px) {
    max-width: 250px;
  }  
  @media screen and (max-width: 350px) {
    max-width: 150px;
  } 
`;
export const Img = styled.img`
  height: 400px;
  object-fit: cover;
  @media screen and (max-width: 820px) {
    height: 197px;
  }
  @media screen and (max-width: 768px) {
     display: flex;
     justify-content: space-between;
     align-items: center;
  }

`;