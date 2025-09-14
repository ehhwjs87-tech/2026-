import React, { useState } from 'react';
import type { FAQItem } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">{children}</h2>
);

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`py-3 px-6 font-semibold text-lg rounded-t-lg transition-colors duration-300 focus:outline-none ${
      active
        ? 'bg-white text-blue-600 border-b-2 border-blue-600'
        : 'bg-transparent text-slate-800 hover:text-blue-600'
    }`}
  >
    {children}
  </button>
);

const AdmissionsGuideTab: React.FC = () => (
    <div className="space-y-8">
        <div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4">모집 정원 및 지원 자격</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 font-semibold border-b text-slate-700">구분</th>
                            <th className="p-3 font-semibold border-b text-slate-700">내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-slate-50">
                            <td className="p-3 border-b font-medium text-slate-800">모집 정원</td>
                            <td className="p-3 border-b text-slate-800">2학급 30명 (학급당 15명, 남녀 구분 없음)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                            <td className="p-3 border-b font-medium text-slate-800">모집 단위</td>
                            <td className="p-3 border-b text-slate-800">전국모집 (대구광역시 80%, 타 지역 20%)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                            <td className="p-3 border-b font-medium text-slate-800">지원 자격</td>
                            <td className="p-3 border-b text-slate-800">2025학년도 초등학교 졸업예정자 또는 동등 학력 인정자</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4">전형 유형 및 정원</h3>
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 font-semibold border-b text-slate-700" colSpan={2}>전형 유형</th>
                            <th className="p-3 font-semibold border-b text-slate-700">정원</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-slate-50">
                            <td rowSpan={3} className="p-3 border-b font-medium align-middle text-center text-slate-800">특별전형</td>
                            <td className="p-3 border-b text-slate-800">사회통합 (기초생활, 한부모, 다문화, 북한이탈주민 자녀)</td>
                            <td className="p-3 border-b text-slate-800">18명 이내</td>
                        </tr>
                         <tr className="hover:bg-slate-50">
                            <td className="p-3 border-b text-slate-800">지역 (달성군 논공읍, 유가읍, 현풍읍, 구지면 거주자)</td>
                            <td className="p-3 border-b text-slate-800">정원 내 포함</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                            <td className="p-3 border-b text-slate-800">기타 (국가유공자 등 교육지원 대상자)</td>
                            <td className="p-3 border-b text-slate-800">1명 (정원 외)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                             <td colSpan={2} className="p-3 border-b font-medium text-center text-slate-800">일반전형</td>
                            <td className="p-3 border-b text-slate-800">12명 이상</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const AdmissionsScheduleTab: React.FC = () => (
    <div className="overflow-x-auto">
        <h3 className="text-2xl font-bold text-slate-700 mb-4">전형 일정 (2025년 기준)</h3>
        <table className="w-full text-left border-collapse">
            <thead className="bg-slate-100">
                <tr>
                    <th className="p-3 font-semibold border-b text-slate-700">구분</th>
                    <th className="p-3 font-semibold border-b text-slate-700">전형 일정</th>
                    <th className="p-3 font-semibold border-b text-slate-700">비고</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-blue-50">
                    <td colSpan={3} className="p-3 border-b font-bold text-blue-800">정시 모집</td>
                </tr>
                <tr className="hover:bg-slate-50">
                    <td className="p-3 border-b text-slate-800">원서 교부 및 접수</td>
                    <td className="p-3 border-b text-slate-800">2025. 9. 22.(월) ~ 10. 14.(화)</td>
                    <td className="p-3 border-b text-slate-800">홈페이지에서 내려받기</td>
                </tr>
                <tr className="hover:bg-slate-50">
                    <td className="p-3 border-b text-slate-800">서류 심사</td>
                    <td className="p-3 border-b text-slate-800">2025. 10. 15.(수) ~ 10. 17.(금)</td>
                    <td className="p-3 border-b text-slate-800">-</td>
                </tr>
                <tr className="hover:bg-slate-50">
                    <td className="p-3 border-b text-slate-800">면접</td>
                    <td className="p-3 border-b text-slate-800">2025. 10. 18.(토)</td>
                    <td className="p-3 border-b text-slate-800">개별 안내</td>
                </tr>
                <tr className="hover:bg-slate-50">
                    <td className="p-3 border-b text-slate-800">합격자 발표</td>
                    <td className="p-3 border-b text-slate-800">2025. 10. 21.(화)</td>
                    <td className="p-3 border-b text-slate-800">개별 및 공문으로 안내</td>
                </tr>
                <tr className="bg-amber-50">
                    <td colSpan={3} className="p-3 border-b font-bold text-amber-800">추가 모집 (정시 미충원 시)</td>
                </tr>
                 <tr className="hover:bg-slate-50">
                    <td className="p-3 border-b text-slate-800">원서 교부 및 접수</td>
                    <td className="p-3 border-b text-slate-800">2025. 10. 22.(수) ~ 10. 23.(목)</td>
                    <td className="p-3 border-b text-slate-800">홈페이지에서 내려받기</td>
                </tr>
                 <tr className="hover:bg-slate-50">
                    <td className="p-3 border-b text-slate-800">면접</td>
                    <td className="p-3 border-b text-slate-800">2025. 10. 25.(토)</td>
                    <td className="p-3 border-b text-slate-800">개별 안내</td>
                </tr>
                <tr className="hover:bg-slate-50">
                    <td className="p-3 border-b text-slate-800">합격자 발표</td>
                    <td className="p-3 border-b text-slate-800">2025. 10. 28.(화)</td>
                    <td className="p-3 border-b text-slate-800">개별 및 공문으로 안내</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const EvaluationTab: React.FC = () => (
    <div className="space-y-8">
        <div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4">전형 요소 및 배점</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 font-semibold border text-slate-700" rowSpan={2} colSpan={2}>구분</th>
                            <th className="p-3 font-semibold border text-slate-700" colSpan={3}>1차 전형 (100점)</th>
                            <th className="p-3 font-semibold border text-slate-700" colSpan={2}>2차 전형 (100점)</th>
                        </tr>
                        <tr>
                            <th className="p-3 font-semibold border text-slate-700">자기소개서</th>
                            <th className="p-3 font-semibold border text-slate-700" colSpan={2}>생활 성적</th>
                            <th className="p-3 font-semibold border text-slate-700">1차 환산점</th>
                            <th className="p-3 font-semibold border text-slate-700">학생 심층면접</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} className="p-3 border text-slate-800">비율</td>
                            <td className="p-3 border text-slate-800">40%</td>
                            <td className="p-3 border text-slate-800">30% (출결)</td>
                            <td className="p-3 border text-slate-800">30% (행동특성 등)</td>
                            <td className="p-3 border text-slate-800">40%</td>
                            <td className="p-3 border text-slate-800">60%</td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="p-3 border text-slate-800">배점</td>
                            <td className="p-3 border text-slate-800">40점</td>
                            <td className="p-3 border text-slate-800">30점</td>
                            <td className="p-3 border text-slate-800">30점</td>
                            <td className="p-3 border text-slate-800">40점</td>
                            <td className="p-3 border text-slate-800">60점</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4">전형 방법</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>1차 전형은 지원자 전원을 대상으로 합니다.</li>
                <li>최종선발은 1차 전형 점수와 2차 전형 점수를 합산하여 성적순으로 선발합니다.</li>
                <li>특별전형 정원 미달 시 일반전형으로 충원할 수 있습니다.</li>
                <li>동점자 처리 기준: ①학생 심층 면접 점수, ②1차 환산 점수 순으로 선발합니다.</li>
                <li>2차 전형의 최종 점수가 65점 미만인 지원자는 모집 정원과 상관없이 불합격 처리될 수 있습니다.</li>
            </ul>
        </div>
    </div>
);


const FAQTab: React.FC = () => {
    const faqs: FAQItem[] = [
        {
            question: '기숙사비와 급식비는 어떻게 되나요?',
            answer: '기숙사비와 조식/석식비는 개인 부담입니다. 2025년 기준, 기숙사비는 월 약 92,000원, 조식/석식 포함 급식비는 약 200,000원입니다. 중식은 무상 제공됩니다. 교육비 지원대상자(기초생활수급자 등)는 기숙사비와 조식비가 지원됩니다.'
        },
        {
            question: '입학하는 학생 모두 기숙사 생활을 해야 하나요?',
            answer: '아닙니다. 기숙사 입사는 선택 사항이며, 의무가 아닙니다. 희망 학생 수가 정원을 초과할 경우 학교 자체 기준에 따라 배정합니다.'
        },
        {
            question: '기숙사를 주말에도 이용이 가능한가요?',
            answer: '아니요. 기숙사는 금요일 하교 이후부터 주말 동안에는 이용할 수 없습니다. 일요일 저녁 19시~21시 사이에 입실하거나, 월요일 아침에 직접 등교해야 합니다.'
        },
        {
            question: '통학생의 등교 방법은 어떻게 되나요?',
            answer: '대중교통이나 자가용을 이용한 등교가 원칙입니다. 학생 편의를 위해 2025년 기준으로 학교 인근(현풍·유가·구지 방면)에 등교 통학버스를 운행하고 있습니다. 오전 8시 30분까지 등교하면 됩니다.'
        },
        {
            question: '고등학교 진학은 어떻게 하나요?',
            answer: '대구교육청 고등학교 입학전형에 따라 다른 중학교와 동일하게 내신 백분율이 산출됩니다. 이를 바탕으로 일반고, 특목고, 마이스터고, 특성화고 등 학생의 진로 희망에 따라 진학할 수 있습니다.'
        }
    ];

    return (
        <div className="space-y-6">
            {faqs.map((faq, index) => (
                <details key={index} className="group bg-slate-50 p-4 rounded-lg shadow-sm">
                    <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-slate-700 group-hover:text-blue-600">
                        {faq.question}
                        <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
                </details>
            ))}
        </div>
    )
};


const Admissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('guide');

  const renderContent = () => {
    switch (activeTab) {
      case 'guide':
        return <AdmissionsGuideTab />;
      case 'schedule':
        return <AdmissionsScheduleTab />;
      case 'evaluation':
        return <EvaluationTab />;
      case 'faq':
        return <FAQTab />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <SectionTitle>2026학년도 신입생 입학전형</SectionTitle>
        <div className="flex justify-center border-b border-slate-200 mb-8 flex-wrap">
          <TabButton active={activeTab === 'guide'} onClick={() => setActiveTab('guide')}>모집 요강</TabButton>
          <TabButton active={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')}>전형 일정</TabButton>
          <TabButton active={activeTab === 'evaluation'} onClick={() => setActiveTab('evaluation')}>전형 방법</TabButton>
          <TabButton active={activeTab === 'faq'} onClick={() => setActiveTab('faq')}>자주 묻는 질문</TabButton>
        </div>
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Admissions;