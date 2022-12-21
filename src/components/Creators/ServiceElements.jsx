import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFF;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
 
 `
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    color: #FFF;

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const ServicesCard = styled.div`
  background: #7283bc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding:  30px;
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
  height: 170px;
  width: 170px;
  margin: 15px 0;
`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #9f5748;
  margin-bottom: 80px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`


