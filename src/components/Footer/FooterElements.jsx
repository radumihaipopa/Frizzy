import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #fff;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  
  @media screen and (max-width: 820px) {
      padding: 30px 24px;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 80%;
  @media screen and (max-width: 820px) {
     width: 100%;
  }
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #000;
  @media screen and (max-width: 820px) {
    margin: 0 0 30px 0;
  }
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
`
export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  @media screen and (max-width: 820px) {
    justify-content: center;
  }
`;
export const Img = styled.img`
  margin: 0 0 10px 0;
  padding-right: 0;
  @media screen and (max-width: 820px) {
    width: 130px;
    height: 130px
    margin: 0 0 30px 0;
  }

`;