// BirthdayPage.tsx
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import PhotoGallerySection from "./components/PhotoGallerySection";
import LetterSection from "./components/LetterSection";
import LocationSection from "./components/LocationSection";
import WishCardSection from "./components/WishCardSection";
import ComicHeartSection from "./components/ComicHeartSection";

const BirthdayPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBirthdayPlaying, setIsBirthdayPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const birthdayAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("자동 재생이 차단되었습니다:", error);
          setIsPlaying(false);
        }
      }
    };

    playAudio();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleCakeSong = () => {
    if (birthdayAudioRef.current) {
      if (isBirthdayPlaying) {
        // 생일축하 노래 멈추기
        birthdayAudioRef.current.pause();
        setIsBirthdayPlaying(false);
      } else {
        // Lady Gaga 노래 멈추기
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }

        // 생일축하 노래 재생
        birthdayAudioRef.current.currentTime = 0; // 처음부터 재생
        birthdayAudioRef.current.play();
        setIsBirthdayPlaying(true);
      }
    }
  };

  return (
    <Container>
      <MusicButton onClick={toggleMusic}>
        <span>{isPlaying ? "🔇" : "🎵"}</span>
      </MusicButton>
      <audio ref={audioRef} loop>
        <source
          src="./LadyGaga - Always Remember Us This Way.mp3"
          type="audio/mpeg"
        />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
      <audio ref={birthdayAudioRef}>
        <source src="./happy-birthday.mp3" type="audio/mpeg" />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
      <HeroSection />
      <LocationSection />
      <PhotoGallerySection />
      <ComicHeartSection />
      <LetterSection />
      <WishCardSection />
      <FooterSection>
        <LeftFirework src="./images/Group 3.svg" alt="왼쪽 폭죽" />
        <CakeGif
          src="./images/Happy Birthday Icing Cake 2.svg"
          alt="생일 케이크"
          onClick={toggleCakeSong}
        />
        <RightFirework src="./images/Group 4.svg" alt="오른쪽 폭죽" />
      </FooterSection>
    </Container>
  );
};

export default BirthdayPage;

const Container = styled.div`
  padding: 0;
  background-color: white;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const MusicButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #bf62a2 0%, #d478b8 100%);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(191, 98, 162, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; /* 패딩 제거로 아이콘 중앙 정렬 */
  line-height: 1; /* 라인 높이 조정 */
  text-align: center; /* 텍스트 중앙 정렬 */

  /* 이모지 위치 미세 조정 */
  & > span {
    display: inline-block;
    transform: translateX(1px); /* 살짝 오른쪽으로 조정 */
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    top: 15px;
    right: 15px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(191, 98, 162, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const FooterSection = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-color: white;
  overflow: visible;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const LeftFirework = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200px;
  height: auto;
  z-index: 1;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const CakeGif = styled.img`
  width: 350px;
  height: auto;
  max-height: 320px;
  z-index: 2;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 250px;
    max-height: 200px;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const RightFirework = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  height: auto;
  z-index: 1;

  @media (max-width: 768px) {
    width: 120px;
  }
`;
