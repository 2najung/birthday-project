import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <Background>
        <RightConfetti src="/images/Wormis Confetti1.svg" alt="confetti" />
        <LeftConfetti src="/images/Wormis Confetti.svg" alt="confetti" />
        <WaveBg
          viewBox="0 0 1600 522"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M358.588 19.8328C197.705 -42.5 31.5108 60.563 -0.500052 85.5001L0.000322748 522L1600 522L1600 127C1560.41 86.6965 1447.73 11.4336 1285.87 14.8527C1083.55 19.1266 1076.97 132.986 985.225 73.3647C893.479 13.7435 768.156 -17.1753 619.585 57.0069C556.321 88.595 562.365 98.7846 358.588 19.8328Z"
            fill="white"
          />
        </WaveBg>
      </Background>
      <Title>Happy Birthday!</Title>
      <KoreanName>준영</KoreanName>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  position: relative;
  padding: 20px;
  padding-top: 100px;
  padding-bottom: 200px;
  overflow: hidden;
  background-color: #ffebf9;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  overflow: hidden;
`;

const WaveBg = styled.svg`
  position: absolute;
  bottom: 0;
  left: -20%;
  width: 140%;
  height: 40%;
  z-index: -1;
  transform: translateY(30%);
`;

const LeftConfetti = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: auto;
  z-index: -1;
`;

const RightConfetti = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: auto;
  z-index: -1;
`;

const Title = styled.h1`
  font-family: "Fredoka One", cursive;
  font-weight: 400;
  font-size: 90px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #bf62a2;
  margin: 0;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
`;

const KoreanName = styled.div`
  font-family: "Cafe24Ssurround";
  font-size: 90px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #bf62a2;
  position: relative;
  z-index: 1;
  margin-top: 0;
`;
