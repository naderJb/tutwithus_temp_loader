import React, { useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
  useEffect(() => {
    // Load Lottie animation
    const anim = lottie.loadAnimation({
      container: document.getElementById('lottieContainer'), // Container ID
      renderer: 'svg', // Renderer type: svg or canvas
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/221a9c18-0cdc-4474-a909-b7c8897c1270/UNYwhU7RLx.json' // Lottie animation JSON URL
    });

    // Clean up animation on component unmount
    return () => {
      anim.destroy();
    };
  }, []); // Run effect only once on component mount

  return (
    <div id="lottieContainer" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Lottie animation will be rendered here */}
    </div>
  );
};

export default LottieAnimation;