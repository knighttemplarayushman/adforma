
import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Configure ripple parameters
    let ripples: {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      maxRadius: number;
      growSpeed: number;
    }[] = [];
    
    const colors = ['rgba(173, 216, 230, ', 'rgba(135, 206, 235, ', 'rgba(100, 149, 237, '];
    
    // Track mouse position
    const mouseMoveHandler = (e: MouseEvent) => {
      // Create new ripple
      const maxRadius = Math.random() * 80 + 40; // Random size between 40-120
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        opacity: 0.8,
        maxRadius,
        growSpeed: 1 + Math.random() * 2 // Random speed
      });
      
      // Limit the number of ripples for performance
      if (ripples.length > 20) {
        ripples = ripples.slice(-20);
      }
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);
    
    // Animation loop
    const animate = () => {
      // Clear canvas with transparent fill to create trail effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update ripples
      ripples.forEach((ripple, index) => {
        // Increase size
        ripple.radius += ripple.growSpeed;
        // Decrease opacity as size increases
        ripple.opacity = 0.6 * (1 - ripple.radius / ripple.maxRadius);
        
        // Draw ripple
        const colorIndex = index % colors.length;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[colorIndex] + ripple.opacity + ')';
        ctx.fill();
        
        // Remove ripples that have grown too large or become too transparent
        if (ripple.radius >= ripple.maxRadius || ripple.opacity <= 0.02) {
          ripples.splice(index, 1);
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ 
        pointerEvents: 'none',
      }}
    />
  );
};

export default CursorEffect;
