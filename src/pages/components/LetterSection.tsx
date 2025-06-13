import { useState } from "react";
import styled from "styled-components";

const LetterSection = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Wrapper>
      <Title>편지가 도착했어요 💌</Title>
      <LetterContainer>
        <LetterImage
          src={`/images/letter${isOpened ? "2.jpeg" : "1.png"}`}
          alt="편지"
          onClick={() => setIsOpened(true)}
        />
        {!isOpened && <ClickMessage>클릭해서 편지를 열어보세요!</ClickMessage>}
      </LetterContainer>
    </Wrapper>
  );
};

export default LetterSection;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-family: "Cafe24Ssurround", cursive;
  color: #364f6b;
  font-size: 2.8rem;
  margin-bottom: 20px;
`;

const LetterContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 300px;

  &:hover {
    transform: scale(1.02);
  }
`;

const LetterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

const ClickMessage = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Cafe24Ssurround", cursive;
  font-size: 1.8rem;
  color: #364f6b;
  opacity: 0.9;
  writing-mode: horizontal-tb;
  white-space: nowrap;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;
