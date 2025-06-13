import { useState } from "react";
import styled from "styled-components";

interface ImageData {
  src: string;
  description: string;
}

const PhotoGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    { src: "/images/1.jpg", description: "300일 기념 사당에서" },
    { src: "/images/2.jpg", description: "도쿄 시부야스카이" },
    { src: "/images/3.jpg", description: "제주도에서 와인" },
    { src: "/images/4.jpg", description: "술들고 거울샷" },
    {
      src: "/images/5.jpg",
      description: "이주녕이 이쁘게 찍어준 유채꽃과 나 ",
    },
    { src: "/images/6.jpg", description: "눈오는날 춘천" },
    { src: "/images/7.jpg", description: "크리스마스 파라다이스시티" },
    { src: "/images/8.jpg", description: "기여운 인생네컷" },
    { src: "/images/9.jpg", description: "이나 부천 진출" },
    { src: "/images/10.jpg", description: "여의도 불꽃놀이" },
    { src: "/images/11.jpg", description: "내가만든 폰케이스" },
    { src: "/images/12.jpg", description: "가평 이슬라이브~" },
    { src: "/images/13.jpg", description: "우리의 첫 여행" },
    { src: "/images/14.jpg", description: "이나 첫 페스티벌" },
    { src: "/images/15.jpg", description: "와인페어 ㅎㅎ" },
    { src: "/images/16.jpg", description: "우리의 100일" },
    { src: "/images/17.jpg", description: "우리의 200일" },
    { src: "/images/18.jpg", description: "고성 에이프레임" },
    { src: "/images/19.jpg", description: "이주녕 코피펑펑" },
  ];

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Wrapper>
      <Title>📸 이나&준영</Title>
      <Gallery>
        {images.map((image, idx) => (
          <ImageContainer key={idx} onClick={() => openModal(image)}>
            <Image src={image.src} alt={`birthday-${idx + 1}`} />
          </ImageContainer>
        ))}
        <VideoContainer>
          <Video controls>
            <source src="/images/video.mp4" type="video/mp4" />
            영상을 재생할 수 없습니다.
          </Video>
        </VideoContainer>
      </Gallery>

      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={selectedImage.src} alt="선택된 이미지" />
            <Description>{selectedImage.description}</Description>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default PhotoGallerySection;

// styled-components
const Wrapper = styled.section`
  margin: 40px 0 60px 0;
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #364f6b;
  margin-bottom: 20px;
`;

const Gallery = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffebf9;
    border-radius: 4px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 320px;
  scroll-snap-align: start;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const VideoContainer = styled(ImageContainer)`
  width: 450px;
`;

const Video = styled.video`
  width: 100%;
  height: 320px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 1.5rem;
  font-family: "Nanum Pen Script", cursive;
  color: #333;
  text-align: center;
`;
