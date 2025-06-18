import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface Position {
  x: number;
  y: number;
}

const FloatingCharacter = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 부드러운 움직임을 위해 현재 위치와 목표 위치 사이를 보간
      const targetX = e.clientX;
      const targetY = e.clientY;

      setPosition((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.1,
        y: prev.y + (targetY - prev.y) * 0.1,
      }));
    };

    const moveInterval = setInterval(() => {
      const handleMove = (e: MouseEvent) => handleMouseMove(e);
      window.addEventListener("mousemove", handleMove);
      return () => {
        window.removeEventListener("mousemove", handleMove);
      };
    }, 20); // 50fps로 업데이트

    return () => {
      clearInterval(moveInterval);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    // 캐릭터가 hover 상태일 때만 점프 애니메이션 실행
    if (isHovered && !isJumping) {
      e.stopPropagation(); // hover 상태일 때만 이벤트 전파 중단
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };

  return (
    <Character
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isJumping={isJumping}
      isHovered={isHovered}
    >
      <CharacterImage src="./images/character.png" alt="캐릭터" />
    </Character>
  );
};

export default FloatingCharacter;

const jump = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const Character = styled.div<{ isJumping: boolean; isHovered: boolean }>`
  position: fixed;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.isHovered ? "pointer" : "default")};
  z-index: 1000;
  transition: all 0.1s ease;
  animation: ${(props) => (props.isJumping ? jump : "none")} 0.5s ease;
  pointer-events: ${(props) => (props.isHovered ? "auto" : "none")};

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`;
