
import React from 'react';

const images = [
  'https://picsum.photos/seed/school1/600/400',
  'https://picsum.photos/seed/school2/600/400',
  'https://picsum.photos/seed/school3/600/400',
  'https://picsum.photos/seed/school4/600/400',
  'https://picsum.photos/seed/school5/600/400',
  'https://picsum.photos/seed/school6/600/400',
  'https://picsum.photos/seed/school7/600/400',
  'https://picsum.photos/seed/school8/600/400',
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">{children}</h2>
);


const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>행복한 학교 생활</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src={src}
                alt={`School activity ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
