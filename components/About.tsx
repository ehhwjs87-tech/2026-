
import React from 'react';
import { HeartIcon, PaintBrushIcon, BookOpenIcon, LeafIcon, CompassIcon } from './icons';

const pillars = [
  {
    icon: <HeartIcon className="w-10 h-10 text-white" />,
    title: '마음인생교육',
    description: '마음공부로 내면의 힘을 기르고, 올바른 인성과 가치관을 확립하여 행복한 삶의 주인이 됩니다.',
    color: 'bg-red-500'
  },
  {
    icon: <PaintBrushIcon className="w-10 h-10 text-white" />,
    title: '문화·예술교육',
    description: '1인 1악기, 연극, 미술 등 다양한 예술 활동으로 심미적 감수성과 창조적 상상력을 키웁니다.',
    color: 'bg-purple-500'
  },
  {
    icon: <BookOpenIcon className="w-10 h-10 text-white" />,
    title: '독서·인문교육',
    description: '통합적 독서와 인문 교육을 통해 삶을 성찰하고 세상에 대한 이해를 넓히는 소양을 기릅니다.',
    color: 'bg-yellow-500'
  },
  {
    icon: <LeafIcon className="w-10 h-10 text-white" />,
    title: '생태·환경교육',
    description: '생태 감수성과 책임감을 일깨워 환경과 인간의 공존을 추구하는 지속가능한 삶을 배웁니다.',
    color: 'bg-green-500'
  },
  {
    icon: <CompassIcon className="w-10 h-10 text-white" />,
    title: '진로·탐색교육',
    description: '스스로 꿈을 설계하고 탐색하는 LTI 프로젝트와 기업가 정신 함양으로 주도적 역량을 기릅니다.',
    color: 'bg-sky-500'
  }
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">{children}</h2>
);


const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>특성화된 미래교육 프로그램</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${pillar.color}`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-700">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
