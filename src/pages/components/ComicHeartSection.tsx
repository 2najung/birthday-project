import { useState, useMemo, memo, useCallback } from "react";
import styled from "styled-components";

// 개별 이미지 컴포넌트를 메모이제이션
const ComicImage = memo(
  ({
    src,
    index,
    style,
    onClick,
  }: {
    src: string;
    index: number;
    style: React.CSSProperties;
    onClick: () => void;
  }) => (
    <ImageContainer style={style} onClick={onClick}>
      <Image
        src={src}
        alt={`comic-${index + 1}`}
        loading={index < 6 ? "eager" : "lazy"}
        width="120"
        height="120"
        decoding="async"
      />
    </ImageContainer>
  )
);

ComicImage.displayName = "ComicImage";

const ComicHeartSection = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
  } | null>(null);

  // 이미지 배열을 상수로 분리
  const comicImages = useMemo(
    () => [
      { src: "./images/comic/1.jpeg" },
      { src: "./images/comic/2.jpeg" },
      { src: "./images/comic/3.jpeg" },
      { src: "./images/comic/4.jpeg" },
      { src: "./images/comic/5.jpeg" },
      { src: "./images/comic/6.jpeg" },
      { src: "./images/comic/7.jpeg" },
      { src: "./images/comic/8.jpeg" },
      { src: "./images/comic/9.jpeg" },
      { src: "./images/comic/10.jpeg" },
      { src: "./images/comic/11.jpeg" },
      { src: "./images/comic/12.jpeg" },
      { src: "./images/comic/13.jpeg" },
      { src: "./images/comic/14.jpeg" },
      { src: "./images/comic/15.jpeg" },
      { src: "./images/comic/16.jpeg" },
      { src: "./images/comic/17.jpeg" },
      { src: "./images/comic/18.jpeg" },
      { src: "./images/comic/19.jpeg" },
    ],
    []
  );

  // 하트 모양 좌표 계산을 메모이제이션
  const heartPositions = useMemo(() => {
    const positions = comicImages.map((_, index) => {
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
        transform: `translate(-50%, -50%) rotate(${
          (index * 360) / comicImages.length
        }deg)`,
      };
    });

    // 화면에 보이는 이미지 인덱스 계산
    const visibleIndices = positions.reduce((acc, pos, idx) => {
      const top = parseFloat(pos.top);
      const left = parseFloat(pos.left);
      if (top >= 0 && top <= 100 && left >= 0 && left <= 100) {
        acc.push(idx);
      }
      return acc;
    }, [] as number[]);

    return { positions, visibleIndices };
  }, [comicImages.length]);

  const handleImageClick = useCallback((image: { src: string }) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleModalContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <Wrapper>
      <Title>이준영의 2024-2025</Title>
      <HeartShape>
        {comicImages.map((image, index) => (
          <ComicImage
            key={index}
            src={image.src}
            index={index}
            style={heartPositions.positions[index]}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </HeartShape>
      {selectedImage && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={handleModalContentClick}>
            <ModalImage
              src={selectedImage.src}
              alt="선택된 이미지"
              loading="eager"
              decoding="async"
            />
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default memo(ComicHeartSection);

// --- Styled Components ---

const Wrapper = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(135deg, #bf62a2 0%, #d478b8 100%);
  position: relative;
  will-change: transform;
  contain: content;

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
  will-change: transform;
  contain: layout size;

  @media (max-width: 768px) {
    height: 600px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  cursor: pointer;
  will-change: transform;
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  &:hover {
    transform: scale(1.15) !important;
    z-index: 100;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: white;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  transition: box-shadow 0.2s ease;

  ${ImageContainer}:hover & {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
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
  will-change: opacity;

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
  will-change: transform;
  contain: content;

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 95%;
    max-height: 80vh;
  }

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
  will-change: transform;
  contain: layout paint style;

  @media (max-width: 768px) {
    max-height: 60vh;
  }
`;
