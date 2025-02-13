import React, { useState, useEffect } from 'react';
import { UserRound as Rose } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [showPoem, setShowPoem] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonStyle({
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transition: 'all 0.2s ease'
    });
  };

  const handleYesClick = () => {
    setShowPoem(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
        <Rose className="w-16 h-16 text-red-500 animate-bounce animate-pulse" />
      </div>
    );
  }

  if (showPoem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-red-600 mb-4">I knew it.</h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-800 whitespace-pre-line font-serif leading-relaxed">
              Here is something:

In a world of roses, you're a daisy rare,
Bright and gentle, beyond compare.
Your laughter blooms like petals white,
A soft, warm glow in the pale moonlight.

Graceful and pure, you light my days,
In your presence, all worries fade.
A quiet beauty, so simple, so true,
Like daisies in spring, I'm drawn to you.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-8 animate-fadeIn">
          Will you be my Valentine?
        </h1>
        <div className="space-x-4">
          <button
            onClick={handleYesClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transform hover:scale-110 transition-all"
          >
            Yes
          </button>
          <button
            onClick={moveButton}
            style={noButtonStyle}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transform hover:scale-110 transition-all"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;