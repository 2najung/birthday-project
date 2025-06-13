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
        <GachaImage src="/images/gacha-machine.gif" alt="뽑기 기계" />
        <ButtonContainer>
          <Button onClick={pickWish}>뽑기!</Button>
        </ButtonContainer>
      </GachaContainer>
      {wish && <Result>{wish}</Result>}
    </Wrapper>
  );
};

export default WishCardSection;

// styled-components
const Wrapper = styled.section`
  text-align: center;
  margin: 160px 0 60px 0;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #364f6b;
  margin-bottom: 30px;
`;

const GachaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
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
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
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
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
  }

  &:active {
    transform: translateY(0);

    &:before {
      width: 300px;
      height: 300px;
    }
  }
`;

const Result = styled.p`
  margin-top: 20px;
  font-size: 1.8rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #bf62a2;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto 0;
  animation: fadeInUp 0.5s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
