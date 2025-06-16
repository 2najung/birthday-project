import { useState, useMemo } from "react";
import styled from "styled-components";

const ComicHeartSection = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    description: string;
  } | null>(null);

  const comicImages = [
    { src: "./images/comic/1.jpeg", description: "코 피가 펑펑~" },
    { src: "./images/comic/2.jpeg", description: "졸린 준영이" },
    { src: "./images/comic/3.jpeg", description: "맛있는거 먹는 준영이" },
    { src: "./images/comic/4.jpeg", description: "웃긴 표정의 준영이" },
    { src: "./images/comic/5.jpeg", description: "뽀글이 준영이" },
    { src: "./images/comic/6.jpeg", description: "하품하는 준영이" },
    { src: "./images/comic/7.jpeg", description: "이상한 포즈의 준영이" },
    { src: "./images/comic/8.jpeg", description: "잠든 준영이" },
    { src: "./images/comic/9.jpeg", description: "장난치는 준영이" },
    { src: "./images/comic/10.jpeg", description: "귀여운 준영이" },
    { src: "./images/comic/11.jpeg", description: "신난 준영이" },
    { src: "./images/comic/12.jpeg", description: "배고픈 준영이" },
    { src: "./images/comic/13.jpeg", description: "행복한 준영이" },
    { src: "./images/comic/14.jpeg", description: "열공하는 준영이" },
    { src: "./images/comic/15.jpeg", description: "춤추는 준영이" },
    { src: "./images/comic/16.jpeg", description: "멋있는 준영이" },
    { src: "./images/comic/17.jpeg", description: "운동하는 준영이" },
    { src: "./images/comic/18.jpeg", description: "게임하는 준영이" },
    { src: "./images/comic/19.jpeg", description: "사랑스러운 준영이" },
  ];

  // 하트 모양 좌표 계산을 메모이제이션
  const heartPositions = useMemo(() => {
    return comicImages.map((_, index) => {
      const t = (Math.PI * 2 * index) / comicImages.length;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

      return {
        left: `${50 + x * 2}%`,
        top: `${40 - y * 2}%`,
        rotate: `${(index * 360) / comicImages.length}deg`,
      };
    });
  }, []);

  return (
    <Wrapper>
      <Title>이준영의 2024-2025</Title>
      <HeartShape>
        {comicImages.map((image, index) => (
          <ImageContainer
            key={index}
            style={{
              top: heartPositions[index].top,
              left: heartPositions[index].left,
              transform: `translate(-50%, -50%) rotate(${heartPositions[index].rotate})`,
            }}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} alt={image.description} />
          </ImageContainer>
        ))}
      </HeartShape>
      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage
              src={selectedImage.src}
              alt={selectedImage.description}
            />
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default ComicHeartSection;

// --- Styled Components ---

const Wrapper = styled.section`
  padding: 60px 20px;
  text-align: center;
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
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const HeartShape = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  margin: 0 auto;
  max-width: 1000px;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;

  &:hover {
    transform: scale(1.2) rotate(0deg) !important;
    z-index: 100;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: white;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(5px);
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
  padding: 20px;
  border-radius: 20px;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scaleIn 0.3s ease;

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
`;
