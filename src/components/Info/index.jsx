import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, TopLineImg, Subtitle, SubtitleLink, VideoWrap, ImgWrap, Img } from './InfoElements'

const Info = ({lightBg, id, imgStart, topLine1, topLine2, topLine3, toplineImage1, toplineImage2, toplineImage3,
                description1, description2, description3,  darkText, alt, img, video, imgWidth, marginTop, marginBottom, link, linkHref, linkDescription, click}) => {
  const style = {
    width: "500px",
    borderRadius: "50px",
    margin: "20px 0px 100px 60px"
  };

  const mobileStyle = {
    width: "250px",
    borderRadius: "50px",
    padding: "20px",
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
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
                  {click && <Subtitle>{linkDescription}</Subtitle>}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              {img &&
                <ImgWrap>
                  <Img imgWidth={imgWidth} marginTop={marginTop} marginBottom={marginBottom} src={img} alt={alt}/>
                </ImgWrap>
              }
              {video &&
              <VideoWrap>
                <video style={window.innerWidth > 768 ? style : mobileStyle} loop autoPlay muted>
                  <source src="images/treasure.mp4" type="video/mp4" />
                </video>
              </VideoWrap>

              }
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
