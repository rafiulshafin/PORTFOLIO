import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-darkBg flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 mb-8">
        {/* Center: profile photo only */}
        <img
          src="/profile.jpg"
          alt="Rafiul Hasan Shafin"
          className="absolute inset-0 w-32 h-32 object-cover rounded-full border-4 border-accent shadow-lg"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-glass rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="text-primary font-futuristic text-lg">
        Loading Portfolio... {Math.round(progress)}%
      </div>
      
      <div className="mt-4 text-white/60 text-sm">
        Initializing Portfolio
      </div>
    </div>
  );
};

export default Loader; 