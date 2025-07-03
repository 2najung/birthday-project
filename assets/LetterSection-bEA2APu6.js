import{r as n,j as t,d as e}from"./index-iwVK562R.js";const m=()=>{const[r,s]=n.useState(!1);return t.jsxs(o,{children:[t.jsx(i,{children:"편지가 도착했어요 💌"}),t.jsxs(a,{children:[t.jsx(l,{src:`./images/letter${r?"2.jpeg":"1.png"}`,alt:"편지",onClick:()=>s(!0)}),!r&&t.jsx(c,{children:"클릭해서 편지를 열어보세요!"})]})]})},o=e.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;
  padding: 0 20px;
`,i=e.h2`
  font-family: "Cafe24Ssurround", cursive;
  color: #364f6b;
  font-size: 2.8rem;
  margin-bottom: 20px;
`,a=e.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 300px;

  &:hover {
    transform: scale(1.02);
  }
`,l=e.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`,c=e.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Cafe24Ssurround", cursive;
  font-size: 1.8rem;
  color: #364f6b;
  opacity: 0.9;
  writing-mode: horizontal-tb;
  white-space: nowrap;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;export{m as default};
