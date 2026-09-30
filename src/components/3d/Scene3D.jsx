'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Scene3D({ currentSection = 'home', theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Slight atmospheric fog matching background
    const isDark = theme !== 'light';
    const fogColor = isDark ? 0x030712 : 0xf8fafc;
    scene.fog = new THREE.FogExp2(fogColor, 0.018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 24);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch {
      return;
    }

    // --- 1. Procedural Glowing Particle Texture ---
    const createParticleTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 64;
      pCanvas.height = 64;
      const ctx = pCanvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(6, 182, 212, 0.85)');
      grad.addColorStop(0.6, 'rgba(99, 102, 241, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(pCanvas);
    };

    const particleTexture = createParticleTexture();

    // --- 2. Interactive Starfield / Nebula Particles ---
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const paletteDark = [
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0x38bdf8), // Sky
      new THREE.Color(0xffffff), // White
      new THREE.Color(0xec4899)  // Pink accent
    ];

    const paletteLight = [
      new THREE.Color(0x0284c7),
      new THREE.Color(0x4f46e5),
      new THREE.Color(0x7c3aed),
      new THREE.Color(0x0d9488),
      new THREE.Color(0x2563eb)
    ];

    const activePalette = isDark ? paletteDark : paletteLight;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 10 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.7;
      const z = radius * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      velocities[i3] = (Math.random() - 0.5) * 0.015;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.015;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.015;

      const col = activePalette[Math.floor(Math.random() * activePalette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.85,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.85 : 0.6,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // --- 3. Cybernetic Wave Grid Horizon ---
    const gridGeometry = new THREE.PlaneGeometry(80, 80, 45, 45);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x1e1b4b : 0xbfdbfe,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.22 : 0.25
    });
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    gridMesh.rotation.x = -Math.PI / 2 + 0.3;
    gridMesh.position.set(0, -14, -10);
    scene.add(gridMesh);

    // --- 4. Floating 3D Polyhedral Crystals (Parallax Geometry) ---
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    const shapes = [];
    const shapeGeometries = [
      new THREE.IcosahedronGeometry(1.6, 0),
      new THREE.OctahedronGeometry(1.4, 0),
      new THREE.TorusGeometry(1.8, 0.25, 16, 32),
      new THREE.TetrahedronGeometry(1.5, 0),
      new THREE.DodecahedronGeometry(1.2, 0)
    ];

    const shapePositions = [
      { x: -14, y: 8, z: -8, rotSpeed: 0.008, color: 0x06b6d4 },
      { x: 15, y: -6, z: -12, rotSpeed: -0.006, color: 0x8b5cf6 },
      { x: -12, y: -10, z: -5, rotSpeed: 0.005, color: 0x3b82f6 },
      { x: 13, y: 11, z: -10, rotSpeed: 0.007, color: 0xec4899 },
      { x: 0, y: -18, z: -6, rotSpeed: 0.004, color: 0x10b981 }
    ];

    shapePositions.forEach((pos, idx) => {
      const geom = shapeGeometries[idx % shapeGeometries.length];
      
      // Outer wireframe
      const wireMat = new THREE.MeshBasicMaterial({
        color: pos.color,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.35 : 0.45
      });
      const wireMesh = new THREE.Mesh(geom, wireMat);

      // Inner glowing core
      const innerGeom = geom.clone();
      innerGeom.scale(0.7, 0.7, 0.7);
      const innerMat = new THREE.MeshStandardMaterial({
        color: pos.color,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: isDark ? 0.4 : 0.3
      });
      const innerMesh = new THREE.Mesh(innerGeom, innerMat);

      const shapeCompound = new THREE.Group();
      shapeCompound.add(wireMesh);
      shapeCompound.add(innerMesh);
      shapeCompound.position.set(pos.x, pos.y, pos.z);

      floatingGroup.add(shapeCompound);
      shapes.push({
        group: shapeCompound,
        rotSpeed: pos.rotSpeed,
        initY: pos.y,
        floatSpeed: 0.8 + Math.random() * 0.8,
        floatOffset: Math.random() * Math.PI * 2
      });
    });

    // --- 5. Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.6 : 0.9);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x06b6d4, 4, 40);
    lightCyan.position.set(10, 10, 15);
    scene.add(lightCyan);

    const lightViolet = new THREE.PointLight(0x8b5cf6, 4, 40);
    lightViolet.position.set(-10, -10, 15);
    scene.add(lightViolet);

    // --- 6. Interactivity & Smooth Lerping ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollProgress = docHeight > 0 ? window.scrollY / docHeight : 0;
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // --- 7. Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth damping for mouse & scroll
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.05;

      // Rotate particle cloud
      particleSystem.rotation.y = elapsedTime * 0.03 + mouseX * 0.2;
      particleSystem.rotation.x = mouseY * 0.15;

      // Animate particles with organic wave drift
      const posAttr = geometry.attributes.position;
      const posArr = posAttr.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // Soft harmonic displacement
        posArr[i3] = ox + Math.sin(elapsedTime * 0.5 + oy * 0.1) * 0.8;
        posArr[i3 + 1] = oy + Math.cos(elapsedTime * 0.4 + ox * 0.1) * 0.8;
        posArr[i3 + 2] = oz + Math.sin(elapsedTime * 0.6 + oz * 0.1) * 0.8;
      }
      posAttr.needsUpdate = true;

      // Animate Cyber Wave Grid Plane vertices
      const gridPos = gridGeometry.attributes.position;
      const count = gridPos.count;
      for (let i = 0; i < count; i++) {
        const u = gridPos.getX(i);
        const v = gridPos.getY(i);
        const z = Math.sin(u * 0.2 + elapsedTime * 1.5) * Math.cos(v * 0.2 + elapsedTime * 1.2) * 1.5;
        gridPos.setZ(i, z);
      }
      gridGeometry.computeVertexNormals();
      gridPos.needsUpdate = true;

      // Animate floating crystals
      shapes.forEach((item) => {
        item.group.rotation.x += item.rotSpeed;
        item.group.rotation.y += item.rotSpeed * 1.5;
        item.group.position.y = item.initY + Math.sin(elapsedTime * item.floatSpeed + item.floatOffset) * 1.2;
      });

      // Camera Director / Dynamic Scroll Journey
      // As user scrolls, camera explores different perspective angles & depths
      const camTargetZ = 24 - currentScrollProgress * 10;
      const camTargetY = -currentScrollProgress * 16 + mouseY * 2;
      const camTargetX = Math.sin(currentScrollProgress * Math.PI * 2) * 4 + mouseX * 3;

      camera.position.x += (camTargetX - camera.position.x) * 0.05;
      camera.position.y += (camTargetY - camera.position.y) * 0.05;
      camera.position.z += (camTargetZ - camera.position.z) * 0.05;

      camera.lookAt(
        mouseX * 1.5,
        -currentScrollProgress * 12 + mouseY * 1.5,
        -currentScrollProgress * 15
      );

      // Light orbit around mouse
      lightCyan.position.x = mouseX * 15 + Math.sin(elapsedTime) * 8;
      lightCyan.position.y = mouseY * 15 + Math.cos(elapsedTime) * 8;
      lightViolet.position.x = -mouseX * 15 + Math.cos(elapsedTime) * 8;
      lightViolet.position.y = -mouseY * 15 + Math.sin(elapsedTime) * 8;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      gridGeometry.dispose();
      gridMaterial.dispose();
      shapeGeometries.forEach(g => g.dispose());
      if (renderer) renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}
