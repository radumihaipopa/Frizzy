import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  @media screen and (max-width: 768px) {
    height: 1500px;
  }
 
 `
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
    grid-gap: 35px;
    padding: 0 40px;
    color: #000;

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const ServicesCard = styled.a`
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
    transform: scale(1.02);

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon1 = styled.img`
  height: 300px;
  width: 320px;
`

export const ServicesIcon2 = styled.img`
  height: 280px;
  width: 290px;
`

export const ServicesIcon3 = styled.img`
  height: 280px;
  width: 262px;
  border-radius: 30px;
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #01bf71;
  margin-bottom: 80px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ServicesH2 = styled.img`
  height: 50px;
  width: 200px;
  font-size: 1.4rem;
      color: #000;
  margin-top: 15px;
  margin-bottom: 0px;
`


