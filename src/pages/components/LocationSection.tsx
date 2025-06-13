import styled from "styled-components";

const LocationSection = () => {
  return (
    <Wrapper>
      <Title>🗺️ 펜션 위치 & 오는 길</Title>
      <ContentContainer>
        <InfoBox>
          <PensionName>펜션헤원</PensionName>
          <Address>📍 강원특별자치도 춘천시 남산면 홍천강변길 354-2</Address>
          <ContactInfo>📞 010-8584-8958</ContactInfo>
          <Description>
            아름다운 홍천강이 보이는 펜션에서 특별한 이주녕의 생일파티!
          </Description>
          <DirectionInfo>
            <DirectionTitle>🚗 오는 길</DirectionTitle>
            <DirectionText>
              • 주차 공간: 1객실 1대 (무료)
              <br />
              • 발렛파킹: 무료
              <br />• 네비게이션: "펜션헤원" 검색
            </DirectionText>
          </DirectionInfo>
        </InfoBox>
        <RoomImageContainer>
          <RoomImage
            src="/images/room.png"
            alt="펜션헤원 객실"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML =
                  '<div style="color: #666; font-family: Cafe24Ssurround; text-align: center; font-size: 1.2rem; line-height: 1.5;">🏠<br/>펜션헤원 객실<br/>홍천강이 보이는 아름다운 뷰</div>';
              }
            }}
          />
        </RoomImageContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default LocationSection;

const Wrapper = styled.section`
  margin: 0;
  padding: 20px 20px 20px 20px;
  background: transparent;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #364f6b;
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const InfoBox = styled.div`
  background: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 350px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PensionName = styled.h3`
  font-size: 1.3rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #2c3e50;
  margin: 0 0 6px 0;
`;

const Address = styled.p`
  font-size: 0.9rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #e74c3c;
  margin: 0 0 5px 0;
`;

const ContactInfo = styled.p`
  font-size: 0.85rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #3498db;
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  font-size: 0.8rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #555;
  line-height: 1.3;
  margin: 0 0 10px 0;
`;

const DirectionInfo = styled.div`
  background: #f8f9fa;
  padding: 8px;
  border-radius: 8px;
  flex: 1;
`;

const DirectionTitle = styled.h4`
  font-size: 0.9rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #2c3e50;
  margin: 0 0 3px 0;
`;

const DirectionText = styled.p`
  font-size: 0.75rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #666;
  line-height: 1.2;
  margin: 0;
`;

const RoomImageContainer = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 350px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dee2e6;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;
