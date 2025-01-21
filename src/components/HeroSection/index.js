import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import BlurText from "./BlurText";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import MagnetLines from "../../ui/MagnetLines";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import Noise from "../../ui/Noisy";
const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          {/* <HeroBgAnimation /> */}
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="60vmin"
            lineColor="tomato"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
            style={{ margin: "5rem 80px auto" }}
          />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            {/* <SubTitle>{Bio.description}</SubTitle> */}
            <BlurText
              text={Bio.description}
              delay={50}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              //   className="text-2xl mb-8 md:text-center"
            />
            <br></br>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img
              src={"https://github.com/amanpoddar-dev12.png"}
              alt="hero-image"
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
