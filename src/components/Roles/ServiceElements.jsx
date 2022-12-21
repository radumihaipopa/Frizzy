import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFF;

  @media screen and (max-width: 768px) {
    height: 2600px;
  }
 
 `
export const ServicesWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 13px;
    color: #FFF;

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const ServicesCard = styled.div`
  background: ${({background}) => (background ? background : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 80px;
  max-height: 380px;
  height: 380px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  z-index: 1;
  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  width: 170px;
  transform: translateY(-25px);
`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #9f5748;
  margin-bottom: 80px;
  transform: translateY(-10px);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;
    transform: translateY(-10px);

`

export const ServicesP = styled.p`
  transform: translateY(-10px);
  font-size: 1rem;
  text-align: center;
`


