import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LockScreen = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === "070404190721") {
      navigate("/birthday");
    } else {
      alert("비밀번호가 틀렸어!");
    }
  };

  return (
    <Container>
      <Card>
        <ProfileImage src="./images/profile.jpeg" alt="준영이" />
        <Title>🎉 준영이의 생일파티 초대장 🎉</Title>
        <SubTitle>비밀번호를 입력하고 초대장을 열어보세요!</SubTitle>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
        />
        <Button onClick={handleSubmit}>초대장 열기</Button>
      </Card>
    </Container>
  );
};

export default LockScreen;

// styled-components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh; /* 모바일 브라우저 UI를 고려한 동적 뷰포트 높이 */
  width: 100%;
  background: linear-gradient(135deg, #ffafbd, #ffc3a0);
  padding: 10px 0;
  box-sizing: border-box;
  overflow-y: auto; /* 세로 스크롤 허용 */

  /* 모바일에서 키보드가 나타날 때 스크롤 가능하도록 */
  @media (max-height: 600px) {
    align-items: flex-start;
    padding-top: 20px;
  }

  /* iOS Safari에서 키보드 문제 해결 */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  margin: 0 auto; /* 위아래 마진 제거 */
  backdrop-filter: blur(8px);
  flex-shrink: 0; /* 카드가 줄어들지 않도록 */

  /* 작은 화면에서 패딩 조정 */
  @media (max-height: 600px) {
    padding: 15px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  border: 6px solid white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-height: 600px) {
    width: 180px;
    height: 180px;
    margin-bottom: 16px;
  }
`;

const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
  font-family: "Cafe24Supermagic-Bold-v1.0", cursive;
  text-align: center;
  color: #ff6b6b;
`;

const SubTitle = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  font-family: "Cafe24Supermagic-Bold-v1.0", cursive;
  text-align: center;
  color: #666;
`;

const Input = styled.input`
  padding: 12px;
  width: 240px;
  font-size: 24px;
  font-family: "Cafe24Supermagic-Bold-v1.0", cursive;
  border: 2px solid #ffd8d8;
  border-radius: 12px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  /* 모바일에서 키보드 최적화 */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
    /* 포커스 시 부드러운 스크롤 */
    scroll-margin-top: 20px;
  }

  &::placeholder {
    color: #999;
  }

  /* 작은 화면에서 크기 조정 */
  @media (max-width: 480px) {
    width: 200px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  font-size: 24px;
  font-family: "Cafe24Supermagic-Bold-v1.0", cursive;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #ff8787;
    transform: scale(1.05);
  }
`;
