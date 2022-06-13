const theme = {
  guide: {
    width: '1050px',
  },

  color: {
    main: '#bba171',
    line: '#eaeaea',
  },

  backgroundColor: {
    lightGray: '#f8f9fa',
    gray: '#f1f3f5',
    shadowGray: '#c1c1c1',
  },

  fontColor: {
    black: '#343a40',
  },

  fontSize: {
    ComponentTitle: '38px',
    ComponentNormal: '24px',
    // large: '18px',
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
  },

  boxShadow: () => `
  box-shadow: 10px 10px 20px -1px #c1c1c1;
  /* 좌우 위아래 블러 (크기) 색상 */
  `,

  borderRadiusAll: (
    topRight = '15px',
    topLeft = '15px',
    bottomRight = '15px',
    bottomLeft = '15px'
  ) => `
  border-top-right-radius: ${topRight};
  border-top-left-radius: ${topLeft};
  border-bottom-right-radius: ${bottomRight};
  border-bottom-left-radius: ${bottomLeft};
`,

  titleImgBar: () => `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 340px;
  background-color: black;  
  `,

  titleImgBefore: (url = '') => `    
  content: '';
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-image: url(${url});
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* 흑백 */
  filter: grayscale(100%); /* 흑백 */
  opacity: 0.5;`,

  titleUnderLineBefore: () => `
  /* 부모 요소에 position: relative; 필요함 */
  content: '';
  position: absolute;
  display: block;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  background-color: #bba171;`,

  textLineAnimationBefore: () => `
  /* 부모 요소에 position: relative; 필요함 */
  background-color: #bba171;
  content: '';
  position: absolute;
  height: 2px; /* 밑줄 굵기 */
  width: 0; /* 초기에 보이지 않도록 */
  bottom: -10px; /* 기본: 0; a태그 아래에 위치시키기 */
  left: 50%; /* 가상 요소를 가운데로 이동시키기 */
  transform: translateX(-50%);
  transition: 0.5s; /* 애니메이션 동작 실행 시간 정의 */  
  `,

  textLineAnimationHover: (width = '100%') => `width: ${width};`,
};

export default theme;
