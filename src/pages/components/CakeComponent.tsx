import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface CakeProps {
  onBlowCandles: () => void;
}

const CakeComponent = ({ onBlowCandles }: CakeProps) => {
  const [isBlowing, setIsBlowing] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isBlowing) {
      timer = setTimeout(() => {
        setCandlesBlown(true);
        setIsBlowing(false);
        onBlowCandles();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isBlowing, onBlowCandles]);

  const handleCakeClick = () => {
    if (!candlesBlown) {
      setIsBlowing(true);
    }
  };

  return (
    <CakeWrapper onClick={handleCakeClick}>
      <svg
        width="350"
        height="320"
        viewBox="0 0 350 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 케이크 받침대 */}
        <ellipse cx="175" cy="290" rx="150" ry="20" fill="#FFE4B5" />

        {/* 케이크 층 */}
        <path
          d="M50 120 L300 120 C300 120 290 280 175 280 C60 280 50 120 50 120Z"
          fill="#FFB6C1"
          stroke="#FF69B4"
          strokeWidth="2"
        />
        <path
          d="M65 120 C65 120 175 140 285 120 L285 100 C285 100 175 120 65 100 L65 120Z"
          fill="#FFC0CB"
          stroke="#FF69B4"
          strokeWidth="2"
        />
        <path
          d="M80 100 C80 100 175 120 270 100 L270 80 C270 80 175 100 80 80 L80 100Z"
          fill="#FFB6C1"
          stroke="#FF69B4"
          strokeWidth="2"
        />

        {/* 크림 장식 */}
        {[...Array(12)].map((_, i) => (
          <g key={i}>
            <path
              d={`M${85 + i * 17} 120 Q${93 + i * 17} 140 ${101 + i * 17} 120`}
              stroke="#FFF0F5"
              strokeWidth="4"
              fill="none"
            />
            <circle cx={93 + i * 17} cy="140" r="3" fill="#FFE4E1" />
          </g>
        ))}

        {/* 딸기 장식 */}
        {[...Array(6)].map((_, i) => (
          <g key={i}>
            <path
              d={`M${100 + i * 35} 90 L${105 + i * 35} 80 L${110 + i * 35} 90`}
              stroke="#228B22"
              strokeWidth="2"
            />
            <path
              d={`M${95 + i * 35} 90 Q${105 + i * 35} 110 ${115 + i * 35} 90`}
              fill="#FF0000"
            />
            <circle cx={105 + i * 35} cy="95" r="2" fill="#FFE4E1" />
          </g>
        ))}

        {/* 초 */}
        {[...Array(5)].map((_, i) => (
          <g
            key={i}
            transform={`translate(${120 + i * 30}, ${!candlesBlown ? 40 : 60})`}
          >
            {/* 초 몸통 */}
            <rect
              x="-3"
              y="20"
              width="6"
              height="25"
              fill="#FFF"
              stroke="#FFE4B5"
              strokeWidth="1"
            />

            {/* 촛불 */}
            {!candlesBlown && (
              <>
                <Flame isBlowing={isBlowing}>
                  <path
                    d="M0 0 Q-5 10 0 20 Q5 10 0 0"
                    fill="url(#flameGradient)"
                  />
                  <circle cx="0" cy="10" r="3" fill="#FFD700" opacity="0.8" />
                </Flame>
              </>
            )}
          </g>
        ))}

        {/* 그라데이션 정의 */}
        <defs>
          <radialGradient id="flameGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF4500" />
          </radialGradient>
        </defs>
      </svg>

      {/* 클릭 유도 메시지 */}
      {!candlesBlown && !isBlowing && (
        <Message>클릭해서 촛불을 꺼주세요!</Message>
      )}
    </CakeWrapper>
  );
};

export default CakeComponent;

// 스타일 컴포넌트
const flicker = keyframes`
  0% { transform: scale(1) translateY(0); opacity: 1; }
  50% { transform: scale(1.1) translateY(-1px); opacity: 0.8; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

const blow = keyframes`
  0% { transform: translateX(0) scale(1); }
  50% { transform: translateX(10px) scale(0.8); }
  100% { transform: translateX(20px) scale(0); }
`;

const CakeWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 320px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 280px;
    height: 256px;

    svg {
      width: 280px;
      height: 256px;
    }
  }
`;

const Flame = styled.g<{ isBlowing: boolean }>`
  transform-origin: center bottom;
  animation: ${(props) => (props.isBlowing ? blow : flicker)}
    ${(props) => (props.isBlowing ? "1s" : "0.5s")} infinite;
`;

const Message = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Cafe24Ssurround", cursive;
  font-size: 1.2rem;
  color: #364f6b;
  white-space: nowrap;
  animation: ${flicker} 1s infinite;
`;
