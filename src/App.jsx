import React from "react";
import styled from "styled-components";
import grapeImage from "./assets/grape.png";
import logoImage from "./assets/Logo.png";
import gradientImage from "./assets/gradient.png";
import arrowImage from "./assets/arrow.png";
import waveImage from "./assets/wave.png";

// Exact color palette from Figma
const theme = {
  colors: {
    cream: "#fffaf3",
    brown: "#c08d5d",
    brownOpacity: "rgba(192, 141, 93, 0.2)",
    darkText: "#3f4042",
    black: "#202020",
    white: "#ffffff",
    navText: "#000000",
  },
  fonts: {
    playfair: "'Playfair Display', Georgia, serif",
    avenir:
      "'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
};

// Main container - matches Figma frame dimensions
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.white};
  position: relative;
`;

// Navigation Bar - exact Figma specs
const NavigationBar = styled.nav`
  width: 100%;
  height: 146px;
  background-color: ${theme.colors.white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  z-index: 100;
`;

// Hamburger menu with 4 circles (2x2 grid)
const HamburgerIcon = styled.div`
  width: 26px;
  height: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 6px;
  cursor: pointer;
  margin-left: 6rem;

  .dot {
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.black};
    border-radius: 50%;
  }
`;

// Center logo
const CenterLogo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 38.6px;
  height: 59px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  overflow: hidden;
`;

// Logo image
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const NavTextLeft = styled.div`
  position: absolute;
  left: 37%;
  transform: translateX(-280px); /* CenterLogo 왼쪽 가까이 */
  display: flex;
  gap: 100px;
  font-family: ${theme.fonts.avenir};
  font-weight: 500;
  font-size: 25px;
  color: ${theme.colors.navText};
  letter-spacing: 0;
  line-height: 27.32px;
`;

const NavTextRight = styled.div`
  position: absolute;
  left: 55%;
  transform: translateX(80px); /* CenterLogo 오른쪽 가까이 */
  display: flex;
  gap: 100px;
  font-family: ${theme.fonts.avenir};
  font-weight: 500;
  font-size: 25px;
  color: ${theme.colors.navText};
  letter-spacing: 0;
  line-height: 27.32px;
`;

const NavItem = styled.span`
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.brown};
  }
`;

// Hero Section - exact Figma dimensions and layout
const HeroSection = styled.section`
  width: 90%;
  height: 940px;
  background-color: ${theme.colors.cream};
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 60px;
  margin: 0 auto;
  z-index: 1;
`;

// Content area - left side
const ContentArea = styled.div`
  width: 535px;
  height: 472px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  margin-left: 60px;
`;

// Title group with exact Figma typography
const TitleGroup = styled.div`
  width: 350px;
  height: 202px;
  position: relative;
  margin-left: 5rem;
`;

const FoodTitle = styled.h1`
  font-family: ${theme.fonts.playfair};
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 66.65px;
  letter-spacing: 3px;
  color: ${theme.colors.darkText};
  margin: 0;
  margin-bottom: -5px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FoodTitleLogo = styled.img`
  width: 70px;
  height: 90px;
  object-fit: contain;
  margin-top: -2.5rem;
  margin-left: 1rem;
`;

const FarmingTitle = styled.h2`
  font-family: ${theme.fonts.playfair};
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 93.31px;
  letter-spacing: 4.2px;
  color: ${theme.colors.darkText};
  margin: 0;
`;

// Description text - exact Figma specs
const DescriptionText = styled.p`
  width: 535px;
  height: 108px;
  font-family: ${theme.fonts.avenir};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26.57px;
  letter-spacing: 1.08px;
  color: ${theme.colors.darkText};
  margin-left: 5rem;
  margin-top: -20px;
`;

// Button group - exact Figma layered design
const ButtonGroup = styled.div`
  width: 197px;
  height: 64px;
  position: relative;
  margin-left: 5rem;
  margin-top: 20px;
`;

const ButtonBackground = styled.div`
  position: absolute;
  width: 197px;
  height: 64px;
  background: ${theme.colors.brown};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 21px;
`;

const ButtonForeground = styled.button`
  position: absolute;
  width: 138px;
  height: 64px;
  background: ${theme.colors.cream};
  border: 1px solid ${theme.colors.brown};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.avenir};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29.52px;
  letter-spacing: 1.2px;
  color: ${theme.colors.darkText};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.brown};
    color: ${theme.colors.white};
  }
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin-left: 8px;
`;

// Image area - right side, extends to NavigationBar
const ImageArea = styled.div`
  width: 800px;
  height: 1086px; /* NavigationBar(146px) + HeroSection(940px) */
  position: absolute;
  right: 60px;
  top: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 20rem;
  z-index: 200; /* Highest priority */
`;

// Styled image component
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

// Decorative dots - exact Figma positioning
const DecorativeDots = styled.div`
  position: absolute;
  bottom: 50px;
  left: 80px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: ${theme.colors.brown};
  border-radius: 50%;

  &.faded {
    opacity: 0.31;
  }
`;

// Wave image - positioned between sections
const WaveImage = styled.img`
  width: 150px;
  height: 14px;
  position: relative;
  top: -50px;
  margin-left: 5rem;
  display: block;
  object-fit: cover;
  pointer-events: none;
  z-index: 2;
`;

// Gradient image - positioned outside HeroSection
const GradientImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  top: -40rem;
  margin: 0 auto;
  display: block;
  object-fit: cover;
  pointer-events: none;
`;

// Main App Component
function App() {
  return (
    <AppContainer>
      {/* Navigation Bar */}
      <NavigationBar>
        {/* Hamburger Menu */}
        <HamburgerIcon>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </HamburgerIcon>

        {/* Navigation Text Left */}
        <NavTextLeft>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Products</NavItem>
        </NavTextLeft>

        {/* Center Logo */}
        <CenterLogo>
          <LogoImage src={logoImage} alt="Food Farming Logo" />
        </CenterLogo>

        {/* Navigation Text Right */}
        <NavTextRight>
          <NavItem>Recipes</NavItem>
          <NavItem>FAQ</NavItem>
          <NavItem>Help</NavItem>
        </NavTextRight>
      </NavigationBar>

      {/* Hero Section */}
      <HeroSection>
        {/* Content Area */}
        <ContentArea>
          {/* Title Group */}
          <TitleGroup>
            <FoodTitle>
              <span>Food</span>
              <FoodTitleLogo src={logoImage} alt="Food Logo" />
            </FoodTitle>
            <FarmingTitle>FARMING</FarmingTitle>
          </TitleGroup>

          {/* Wave Image - between sections */}
          <WaveImage src={waveImage} alt="Wave Effect" />

          {/* Description */}
          <DescriptionText>
            Food Farming is proud of our past and excited about our future. We
            strive to continue being one of India and New Zealand's great food
            companies, offering quality fruits and vegetable.
          </DescriptionText>

          {/* Button */}
          <ButtonGroup>
            <ButtonBackground>
              <ArrowIcon src={arrowImage} alt="Arrow" />
            </ButtonBackground>
            <ButtonForeground>Read More</ButtonForeground>
          </ButtonGroup>
        </ContentArea>

        <DecorativeDots>
          <Dot className="faded" />
          <Dot />
        </DecorativeDots>
      </HeroSection>

      {/* Gradient Image Effect */}
      <GradientImage src={gradientImage} alt="Gradient Effect" />

      {/* Image Area - extends from NavigationBar to end of HeroSection */}
      <ImageArea>
        <StyledImage src={grapeImage} alt="Premium Quality Grapes" />
      </ImageArea>
    </AppContainer>
  );
}

export default App;
