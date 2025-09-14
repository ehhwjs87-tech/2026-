
import React from 'react';
import { PhoneIcon, MapPinIcon } from './icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-lg text-center text-slate-600 mb-12 max-w-2xl mx-auto">{children}</p>
);

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <SectionTitle>입학 문의 및 오시는 길</SectionTitle>
        <SectionSubtitle>
          한울안중학교 입학에 대해 궁금한 점이 있으시면 언제든지 연락주세요.
        </SectionSubtitle>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                    <PhoneIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">전화 문의</h3>
                <p className="text-slate-600">교무실: 053) 233-9971</p>
                <p className="text-slate-600">행정실: 053) 233-9970</p>
                <p className="text-slate-500 text-sm mt-2">(평일 09:00 ~ 17:00)</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                    <MapPinIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">찾아오시는 길</h3>
                <p className="text-slate-600">대구광역시 달성군 현풍읍 지동길 31</p>
                <p className="text-slate-600">(우편번호: 43007)</p>
                <a 
                    href="https://hanulan.dge.ms.kr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-3 text-blue-600 hover:underline font-semibold"
                >
                    학교 홈페이지 바로가기
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
