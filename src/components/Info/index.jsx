import React, {useState} from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, TopLineImg, Subtitle, SubtitleLink, ImgWrap, Img } from './InfoElements'
import {Modal} from "../Modal/Modal";

const Info = ({lightBg, id, imgStart, topLine1, topLine2, topLine3, toplineImage1, toplineImage2, toplineImage3,
                description1, description2, description3,  darkText, alt, img, imgWidth, marginTop, marginBottom, link, linkHref, linkDescription, click}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <Modal showModal={showModal} setShowModal={setShowModal} image={'/images/lastriddle.gif'}/>

          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topLine1 && <TopLineImg src={toplineImage1} />}
                  {topLine1}
                  {topLine1 && <TopLineImg src={toplineImage1} />}
                </TopLine>
                <Subtitle darkText={darkText}>{description1}</Subtitle>

                <TopLine>
                  {topLine2 && <TopLineImg src={toplineImage2} />}
                  {topLine2}
                  {topLine2 && <TopLineImg src={toplineImage2} />}
                </TopLine>
                <Subtitle darkText={darkText}>{description2}</Subtitle>

                <TopLine>
                  {topLine3 && <TopLineImg src={toplineImage3} />}
                  {topLine3}
                  {topLine3 && <TopLineImg src={toplineImage3} />}
                </TopLine>
                <Subtitle darkText={darkText}>
                  {description3}
                  {link && <SubtitleLink href={linkHref} >{linkDescription}</SubtitleLink>}
                  {click && <Subtitle onClick={openModal} >{linkDescription}</Subtitle>}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img imgWidth={imgWidth} marginTop={marginTop} marginBottom={marginBottom} src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
