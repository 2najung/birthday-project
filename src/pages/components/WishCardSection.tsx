import { useState } from "react";
import styled from "styled-components";

const WishCardSection = () => {
  const [wish, setWish] = useState("");

  const wishes = [
    "🧖‍♀️ 마사지 서비스 10분",
    "🚗 이나가 운전기사",
    "🫶 오늘 하루 뭐든 YES!",
    "💌 편지 써주기",
    "🍱 도시락 싸주기",
    "⭐ 소원들어주기",
    "🏃‍♀️ 부르면 달려가주기",
  ];

  const pickWish = () => {
    const random = wishes[Math.floor(Math.random() * wishes.length)];
    setWish(random);
  };

  return (
    <Wrapper>
      <Title>🎁 소원권 뽑기</Title>
      <GachaContainer>
        <GachaImage src="./images/gacha-machine.gif" alt="뽑기 기계" />
        <ButtonContainer>
          <Button onClick={pickWish}>뽑기!</Button>
        </ButtonContainer>
      </GachaContainer>
      {wish && (
        <Modal onClick={() => setWish("")}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <WishResult>
              <WishIcon>🎁</WishIcon>
              <WishText>{wish}</WishText>
            </WishResult>
            <CloseButton onClick={() => setWish("")}>×</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default WishCardSection;

// styled-components
const Wrapper = styled.section`
  text-align: center;
  margin: 160px 0 60px 0;
  padding: 60px 20px;
  background: linear-gradient(135deg, #bf62a2 0%, #d478b8 100%);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 0;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: "Cafe24Ssurround", cursive;
  color: white;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const GachaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`;

const GachaImage = styled.img`
  width: 280px;
  height: 350px;
  object-fit: contain;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  padding: 12px 25px;
  font-size: 1.1rem;
  font-family: "Cafe24Ssurround", cursive;
  background: linear-gradient(135deg, #bf62a2 0%, #d478b8 100%);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(191, 98, 162, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(191, 98, 162, 0.4);
  }

  &:active {
    transform: translateY(0);

    &:before {
      width: 300px;
      height: 300px;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  position: relative;
  max-width: 90%;
  width: 400px;
  animation: scaleIn 0.3s ease;

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const WishResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const WishIcon = styled.div`
  font-size: 4rem;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const WishText = styled.p`
  font-size: 1.8rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #bf62a2;
  text-align: center;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 5px;
  line-height: 1;

  &:hover {
    color: #000;
  }
`;
