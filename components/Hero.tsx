import React from 'react';

interface HeroProps {
  onCTAClick: () => void;
}

// To change the background image, simply replace the URL in the line below.
// For best results, use a high-resolution panoramic image.
const HERO_IMAGE_URL = 'https://hanulan.dge.ms.kr/upload/schl/hanulanm/widg/M_visual.png'

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <div
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-down" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          2026학년도 한울안중학교
        </h1>
        <p className="text-xl md:text-3xl font-semibold mb-8 animate-fade-in-up" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          꿈과 잠재력을 꽃 피우는 미래교육
        </p>
        <button
          onClick={onCTAClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
        >
          신입생 모집요강 확인하기
        </button>
      </div>
    </div>
  );
};

export default Hero;