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
  @media screen and (max-width: 800px) {
    height: 720px;
    display: flex;
  }
  @media screen and (max-width: 480px) {
    height: 750px;
    flex-direction: column;
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
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: end;
    transform: translateY(110px);
  }
  @media screen and (max-width: 480px) {
      display: flex;
      align-items: center;
      transform: translateY(-80px);
  }
`

export const HeroP = styled.p`
  position: absolute;
  width: 22em;
  max-width: 30em;
   justify-content: center;
  background-color: white;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
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
   border-right: 1em solid white;
   border-bottom: 0.5em solid transparent;
   filter: drop-shadow(-0.095rem -0.095rem 0.0225rem rgba(0, 0, 0, .2));
   
}
@media screen and (max-width: 800px) {
:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 10em; // offset should move with padding of parent
    border: .75rem solid transparent;
    border-top: none;
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0925rem 0.0125rem rgba(0, 0, 0, .1));
    }
}
@media screen and (max-width: 480px) {
width: 15em;
:before {
    left: 7em; // offset should move with padding of parent
    }
}
`
export const Img = styled.img`
  grid-area: col1;
  height: 700px;
  width: 600px;
  transform: translateY(-130px);
  @media screen and (max-width: 800px) {
      height: 500px;
      width: auto;
      margin-inline-start: 180px;
      transform: translateY(-180px);
  }
  @media screen and (max-width: 480px) {
      height: 500px;
      width: auto;
      margin-inline-start: 10px;
      transform: translateY(-90px);
  }
 `;