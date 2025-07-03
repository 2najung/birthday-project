import{r as i,j as t,d as a}from"./index-iwVK562R.js";const h=i.memo(({src:m,index:c,style:o,onClick:p})=>t.jsx(x,{style:o,onClick:p,children:t.jsx(v,{src:m,alt:`comic-${c+1}`,loading:c<6?"eager":"lazy",width:"120",height:"120",decoding:"async"})}));h.displayName="ComicImage";const b=()=>{const[m,c]=i.useState(null),o=i.useMemo(()=>[{src:"./images/comic/1.jpeg"},{src:"./images/comic/2.jpeg"},{src:"./images/comic/3.jpeg"},{src:"./images/comic/4.jpeg"},{src:"./images/comic/5.jpeg"},{src:"./images/comic/6.jpeg"},{src:"./images/comic/7.jpeg"},{src:"./images/comic/8.jpeg"},{src:"./images/comic/9.jpeg"},{src:"./images/comic/10.jpeg"},{src:"./images/comic/11.jpeg"},{src:"./images/comic/12.jpeg"},{src:"./images/comic/13.jpeg"},{src:"./images/comic/14.jpeg"},{src:"./images/comic/15.jpeg"},{src:"./images/comic/16.jpeg"},{src:"./images/comic/17.jpeg"},{src:"./images/comic/18.jpeg"},{src:"./images/comic/19.jpeg"}],[]),p=i.useMemo(()=>{const e=o.map((d,r)=>{const s=Math.PI*2*r/o.length,g=16*Math.pow(Math.sin(s),3),l=13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s);return{left:`${50+g*2}%`,top:`${40-l*2}%`,transform:`translate(-50%, -50%) rotate(${r*360/o.length}deg)`}}),n=e.reduce((d,r,s)=>{const g=parseFloat(r.top),l=parseFloat(r.left);return g>=0&&g<=100&&l>=0&&l<=100&&d.push(s),d},[]);return{positions:e,visibleIndices:n}},[o.length]),f=i.useCallback(e=>{c(e)},[]),u=i.useCallback(()=>{c(null)},[]),j=i.useCallback(e=>{e.stopPropagation()},[]);return t.jsxs(w,{children:[t.jsx(y,{children:"이준영의 2024-2025"}),t.jsx(k,{children:o.map((e,n)=>t.jsx(h,{src:e.src,index:n,style:p.positions[n],onClick:()=>f(e)},n))}),m&&t.jsx(C,{onClick:u,children:t.jsx(I,{onClick:j,children:t.jsx(M,{src:m.src,alt:"선택된 이미지",loading:"eager",decoding:"async"})})})]})},S=i.memo(b),w=a.section`
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
`,y=a.h2`
  font-size: 2.5rem;
  font-family: "Cafe24Ssurround", cursive;
  color: white;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`,k=a.div`
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
`,x=a.div`
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
`,v=a.img`
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

  ${x}:hover & {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
`,C=a.div`
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
`,I=a.div`
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
`,M=a.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
  will-change: transform;
  contain: layout paint style;

  @media (max-width: 768px) {
    max-height: 60vh;
  }
`;export{S as default};
