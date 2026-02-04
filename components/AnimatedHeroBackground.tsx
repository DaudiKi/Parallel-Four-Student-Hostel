import React from 'react';

const AnimatedHeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-900">
      {/* Video Element */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-125"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Spiral%202.mp4" type="video/mp4" />
        {/* Fallback can be the gradient if video fails */}
      </video>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101a22]/60 via-[#101a22]/40 to-[#101a22]/70"></div>
    </div>
  );
};

export default AnimatedHeroBackground;
