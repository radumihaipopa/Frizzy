import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: white;
  display: grid;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  grid-template-areas: 'col1 col2';
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  height: 570px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1024px) {
    height: 800px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: unset;
  }
`
export const HeroContent = styled.div`
  z-index: 3;
  grid-area: col2;

  max-width: 1200px;
  padding: 8px 24px;
  display: grid;
  flex-direction: column;
  align-items: center;
  margin-inline-start: 90px;
  color: #FFFFFF;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: end;
    transform: translateY(150px);
    margin-inline-start: -25px;
  }
  @media screen and (max-width: 480px) {
      display: flex;
      align-items: center;
      transform: translateY(25px);
      margin-inline-start: 0;
  }
`

export const HeroP = styled.p`
  position: absolute;
  width: 22em;
  max-width: 30em;
  transform: translateY(-50px);
  justify-content: center;
  background-color: #adc4e6;
  padding: 1.125em 1.5em;
  font-size: 1.45em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .4);
  :before {
   content: '';
   position: absolute;
   width: 0;
   height: 0;
   bottom: 4em;
   left: -0.95em; // offset should move with padding of parent
   border-top: 0.5em solid transparent;
   border-right: 1em solid #adc4e6;
   border-bottom: 0.5em solid transparent;
   filter: drop-shadow(-0.095rem -0.095rem 0.0225rem rgba(0, 0, 0, .2));
   
}
@media screen and (max-width: 1024px) {
font-size: 1.25em;
  transform: translateY(-50px);


:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 10em; // offset should move with padding of parent
    border: .75rem solid transparent;
    border-top: none;
    border-bottom-color: #adc4e6;
    filter: drop-shadow(0 -0.0925rem 0.0125rem rgba(0, 0, 0, .1));
    }
}
@media screen and (max-width: 480px) {
width: 15em;
  transform: translateY(-20px);

:before {
    left: 7em; // offset should move with padding of parent
    }
}
`


export const HeroP2 = styled.p`
  position: absolute;
  transform: translateY(150px);
  width: 22em;
  max-width: 30em;
   justify-content: center;
  background-color: #adc4e6;
  padding: 1.125em 1.5em;
  font-size: 1.45em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .4);
  :before {
   content: '';
   position: absolute;
   width: 0;
   height: 0;
   bottom: 4em;
   left: -0.95em; // offset should move with padding of parent
   border-top: 0.5em solid transparent;
   border-right: 1em solid #adc4e6;
   border-bottom: 0.5em solid transparent;
   filter: drop-shadow(-0.095rem -0.095rem 0.0225rem rgba(0, 0, 0, .2));
   
}
@media screen and (max-width: 1024px) {
font-size: 1.25em;
  transform: translateY(70px);

:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 7em; // offset should move with padding of parent
    border: .75rem solid transparent;
    border-top: none;
    border-bottom-color: #adc4e6;
    filter: drop-shadow(0 -0.0925rem 0.0125rem rgba(0, 0, 0, .1));
    }
}
@media screen and (max-width: 480px) {
width: 17em;
  transform: translateY(150px);

:before {
    left: 5em; // offset should move with padding of parent
    }
}
`
export const Img = styled.img`
  grid-area: col1;
  width: 490px;
  margin-bottom: -27px;
  margin-inline-start: 60px;
  border-radius: 1rem;
    cursor: pointer;

  @media screen and (max-width: 1024px) {
      width: 450px;
      margin-inline-start: 0px;
      transform: translateY(-140px);
  }
  @media screen and (max-width: 480px) {
      width: 350px;
      margin-inline-start: 0px;
      transform: translateY(-10px);
  }
  @media screen and (max-width: 320px) {
      width: 300px;
      margin-inline-start: 0px;
      transform: translateY(20px);
  }
 `;