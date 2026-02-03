import React from 'react';

const AnimatedHeroBackground: React.FC = () => {
  // Brand Colors from the reference image
  const tealBackground = '#55C2C4'; // The main background color
  const bladeBlue = '#2A5A9C'; // The deep blue for spiral arms
  const bladeOrange = '#EA813D'; // The orange for spiral arms
  const wireframeColor = '#A07040'; // Brownish/Gold for thin lines

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: tealBackground }}>

      {/* SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Helper function to generate blade paths */}
        <defs>
          {/* The Blade Shape */}
          <path id="blade" d="M0,-150 C50,-250 150,-400 350,-500 C250,-400 150,-250 80,-150 Q40,-100 0,-150 Z" />

          {/* Wireframe Spiral Pattern */}
          <g id="wireframe-flower">
            {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((angle, i) => (
              <ellipse
                key={i}
                cx="0" cy="-100" rx="40" ry="100"
                fill="none"
                stroke={wireframeColor}
                strokeWidth="1"
                opacity="0.5"
                transform={`rotate(${angle} 0 0)`}
              />
            ))}
          </g>
        </defs>

        {/* TOP RIGHT Wireframe Detail */}
        <g className="animate-spin-slow-reverse origin-center" style={{ transformOrigin: '1600px 200px', transformBox: 'fill-box' }}>
          <g transform="translate(1600, 200) scale(1.5)">
            <use href="#wireframe-flower" />
          </g>
        </g>

        {/* BOTTOM LEFT Wireframe Detail */}
        <g className="animate-spin-slow-reverse origin-center" style={{ transformOrigin: '300px 900px', transformBox: 'fill-box' }}>
          <g transform="translate(300, 900) scale(1.8) rotate(45)">
            <use href="#wireframe-flower" />
          </g>
        </g>

        {/* CENTRAL BLADE SPIRAL */}
        {/* We place it in the center (960, 540) */}
        <g transform="translate(960, 540)">
          {/* Rotate the whole pinwheel slowly */}
          <g className="animate-spin-slow">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = i * 30; // 360 / 12 = 30 degrees
              const color = i % 2 === 0 ? bladeBlue : bladeOrange;
              // Dynamic scaling for "breathing" effect on specific blades? 
              // For now, let's keep them uniform as per reference image.

              return (
                <g key={i} transform={`rotate(${angle})`}>
                  {/* 
                        Use a cubic bezier path to create the curved blade.
                        Start near center, curve outwards.
                     */}
                  {/* Re-drawing a custom path for the blade to match the specific "curved scythe" look */}
                  <path
                    d="M20,-100 C60,-280 200,-450 480,-550 C300,-480 150,-380 60,-200 C40,-160 30,-130 20,-100 Z"
                    fill={color}
                    className="hover:opacity-90 transition-opacity"
                  />
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      {/* Light Gradient Overlay to add subtle depth without darkening */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2A5A9C]/10 pointer-events-none"></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 80s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeroBackground;
