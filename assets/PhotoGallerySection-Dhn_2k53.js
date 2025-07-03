import{r as n,j as o,d as r}from"./index-iwVK562R.js";const V=()=>{const[c,d]=n.useState(null),[l,a]=n.useState(!1),[p,g]=n.useState(0),[f,h]=n.useState(0),e=n.useRef(null),x=1.5,v=[{src:"./images/1.jpg",description:"300일 기념 사당에서"},{src:"./images/2.jpg",description:"도쿄 시부야스카이"},{src:"./images/3.jpg",description:"제주도에서 와인"},{src:"./images/4.jpg",description:"술들고 거울샷"},{src:"./images/5.jpg",description:"이주녕이 이쁘게 찍어준 유채꽃과 나 "},{src:"./images/6.jpg",description:"눈오는날 춘천"},{src:"./images/7.jpg",description:"크리스마스 파라다이스시티"},{src:"./images/8.jpg",description:"기여운 인생네컷"},{src:"./images/9.jpg",description:"이나 부천 진출"},{src:"./images/10.jpg",description:"여의도 불꽃놀이"},{src:"./images/11.jpg",description:"내가만든 폰케이스"},{src:"./images/12.jpg",description:"가평 이슬라이브~"},{src:"./images/13.jpg",description:"우리의 첫 여행"},{src:"./images/14.jpg",description:"이나 첫 페스티벌"},{src:"./images/15.jpg",description:"와인페어 ㅎㅎ"},{src:"./images/16.jpg",description:"우리의 100일"},{src:"./images/17.jpg",description:"우리의 200일"},{src:"./images/18.jpg",description:"고성 에이프레임"},{src:"./images/19.jpg",description:"이주녕 코피펑펑"}],w=t=>{a(!0),e.current&&(g(t.pageX-e.current.offsetLeft),h(e.current.scrollLeft),e.current.style.scrollBehavior="auto")},m=()=>{a(!1),e.current&&(e.current.style.scrollBehavior="smooth",u())},j=t=>{if(l&&(t.preventDefault(),e.current)){const i=(t.pageX-e.current.offsetLeft-p)*x;e.current.scrollLeft=f-i}},y=t=>{e.current&&(a(!0),g(t.touches[0].pageX-e.current.offsetLeft),h(e.current.scrollLeft),e.current.style.scrollBehavior="auto")},M=t=>{if(l&&e.current){const i=(t.touches[0].pageX-e.current.offsetLeft-p)*x;e.current.scrollLeft=f-i}},k=()=>{a(!1),e.current&&(e.current.style.scrollBehavior="smooth",u())},u=()=>{if(!e.current)return;const t=e.current,s=340,i=t.scrollLeft,L=Math.round(i/s);t.scrollTo({left:L*s,behavior:"smooth"})},S=t=>{l||d(t)},I=()=>{d(null)};return o.jsxs(T,{children:[o.jsx(C,{children:"📸 이나&준영"}),o.jsxs(X,{ref:e,onMouseDown:w,onMouseUp:m,onMouseLeave:m,onMouseMove:j,onTouchStart:y,onTouchMove:M,onTouchEnd:k,children:[v.map((t,s)=>o.jsx(b,{onClick:()=>S(t),children:o.jsx(z,{src:t.src,alt:`birthday-${s+1}`,draggable:"false",loading:s<3?"eager":"lazy",decoding:"async"})},s)),o.jsx(D,{children:o.jsxs(B,{controls:!0,preload:"none",children:[o.jsx("source",{src:"./images/video.mp4",type:"video/mp4"}),"영상을 재생할 수 없습니다."]})})]}),c&&o.jsx(E,{onClick:I,children:o.jsxs(P,{onClick:t=>t.stopPropagation(),children:[o.jsx(R,{src:c.src,alt:"선택된 이미지",loading:"eager",decoding:"async"}),o.jsx(G,{children:c.description})]})})]})},T=r.section`
  margin: 40px 0 60px 0;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
`,C=r.h2`
  text-align: center;
  font-size: 2.5rem;
  font-family: "Cafe24Ssurround", cursive;
  color: #364f6b;
  margin-bottom: 20px;
`,X=r.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
  width: 100%;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  cursor: grab;
  user-select: none;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  &:active {
    cursor: grabbing;
  }
`,b=r.div`
  flex: 0 0 auto;
  width: 320px;
  height: 320px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`,z=r.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  will-change: transform;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`,D=r(b)`
  width: 450px;

  @media (max-width: 768px) {
    width: 350px;
  }
`,B=r.video`
  width: 100%;
  height: 320px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`,E=r.div`
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
`,P=r.div`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background: white;
  border-radius: 4px;
  padding: 15px 15px 60px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  border: 1px solid #f0f0f0;
  animation: floatIn 0.5s ease;

  @keyframes floatIn {
    from {
      opacity: 0;
      transform: rotate(-2deg) translateY(20px);
    }
    to {
      opacity: 1;
      transform: rotate(-2deg) translateY(0);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 5px;
    background: rgba(191, 98, 162, 0.5);
    border-radius: 0 0 3px 3px;
  }
`,R=r.img`
  max-width: 100%;
  max-height: 60vh;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 5px;
  border: 1px solid #f0f0f0;
`,G=r.p`
  font-size: 1.3rem;
  font-family: "Nanum Pen Script", cursive;
  color: #333;
  text-align: center;
  margin: 0;
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 0 15px;
  transform: rotate(2deg);

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #bf62a2;
    opacity: 0.1;
    border-radius: 50%;
  }
`;export{V as default};
