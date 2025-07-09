import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Hero3D = () => {
  const mountRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Particle geometry
    const geometry = new THREE.BufferGeometry();
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;

      // Create gradient colors
      colors[i] = Math.random() * 0.5 + 0.5; // R
      colors[i + 1] = Math.random() * 0.3 + 0.7; // G
      colors[i + 2] = 1; // B
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
      size: 3,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse interaction
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.y += 0.001 + mouse.x * 0.01;
      particles.rotation.x += 0.0005 + mouse.y * 0.005;
      
      // Animate particle positions
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [mouse]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Hero3D; 