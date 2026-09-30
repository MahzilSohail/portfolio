'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cyberAudio } from '../../lib/cyberAudio';

export default function Skills3DGalaxy({ onSkillSelect, activeFilter = 'all' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const hoveredRef = useRef(null);

  const skillsList = [
    { name: 'JavaScript ES6+', cat: 'languages', color: 0xf59e0b, level: '85%' },
    { name: 'Dart', cat: 'languages', color: 0x38bdf8, level: '80%' },
    { name: 'C++', cat: 'languages', color: 0x6366f1, level: '86%' },
    { name: 'Python', cat: 'languages', color: 0x10b981, level: '65%' },
    { name: 'SQL', cat: 'languages', color: 0x06b6d4, level: '80%' },
    { name: 'Flutter', cat: 'frameworks', color: 0x06b6d4, level: '85%' },
    { name: 'React.js', cat: 'frameworks', color: 0x38bdf8, level: '80%' },
    { name: 'Next.js', cat: 'frameworks', color: 0xffffff, level: '82%' },
    { name: 'NestJS', cat: 'frameworks', color: 0xef4444, level: '70%' },
    { name: 'Node.js & Express', cat: 'frameworks', color: 0x22c55e, level: '75%' },
    { name: 'React Native', cat: 'frameworks', color: 0x8b5cf6, level: '65%' },
    { name: 'PostgreSQL', cat: 'databases', color: 0x3b82f6, level: '75%' },
    { name: 'MySQL', cat: 'databases', color: 0xf97316, level: '80%' },
    { name: 'MongoDB', cat: 'databases', color: 0x10b981, level: '70%' },
    { name: 'Cloud Firestore', cat: 'databases', color: 0xf59e0b, level: '85%' },
    { name: 'Git & GitHub', cat: 'tools', color: 0xec4899, level: '85%' },
    { name: 'REST APIs & Provider', cat: 'tools', color: 0x06b6d4, level: '80%' },
    { name: 'Postman', cat: 'tools', color: 0xf97316, level: '80%' },
    { name: 'Three.js / WebGL', cat: 'tools', color: 0x8b5cf6, level: '78%' },
    { name: 'Linux Env', cat: 'tools', color: 0xeab308, level: '70%' },
    { name: 'Figma UI/UX', cat: 'tools', color: 0xa855f7, level: '75%' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.8);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch {
      return;
    }

    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // Create central celestial wireframe sphere
    const wireGeom = new THREE.SphereGeometry(3.6, 20, 20);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const wireSphere = new THREE.Mesh(wireGeom, wireMat);
    sphereGroup.add(wireSphere);

    // Inner glowing particle core
    const coreParticleCount = 120;
    const coreGeom = new THREE.BufferGeometry();
    const corePos = new Float32Array(coreParticleCount * 3);
    for (let i = 0; i < coreParticleCount; i++) {
      const i3 = i * 3;
      const r = Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      corePos[i3] = r * Math.sin(phi) * Math.cos(theta);
      corePos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      corePos[i3 + 2] = r * Math.cos(phi);
    }
    coreGeom.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
    const coreParticleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const corePoints = new THREE.Points(coreGeom, coreParticleMat);
    sphereGroup.add(corePoints);

    // Create Text Sprites on Fibonacci Sphere
    const spriteObjects = [];
    const radius = 3.7;
    const count = skillsList.length;

    const makeTextSprite = (text, isHighlighted) => {
      const canvasSprite = document.createElement('canvas');
      canvasSprite.width = 340;
      canvasSprite.height = 90;
      const ctx = canvasSprite.getContext('2d');

      // Rounded background pill
      ctx.fillStyle = isHighlighted ? 'rgba(6, 182, 212, 0.35)' : 'rgba(15, 23, 42, 0.75)';
      ctx.strokeStyle = isHighlighted ? '#06b6d4' : 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = isHighlighted ? 3 : 1.5;

      const r = 24;
      ctx.beginPath();
      ctx.roundRect(10, 10, 320, 70, [r]);
      ctx.fill();
      ctx.stroke();

      // Text
      ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = isHighlighted ? '#38bdf8' : '#f8fafc';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 170, 45);

      const texture = new THREE.CanvasTexture(canvasSprite);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: isHighlighted ? 1.0 : 0.82,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2.4, 0.65, 1);
      return { sprite, texture };
    };

    skillsList.forEach((skill, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + 5 ** 0.5) * i;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const isMatch = activeFilter === 'all' || skill.cat === activeFilter;
      const { sprite, texture } = makeTextSprite(skill.name, isMatch);
      sprite.position.set(x, y, z);
      sprite.userData = {
        ...skill,
        originalPos: new THREE.Vector3(x, y, z),
        texture,
        baseScale: isMatch ? 2.4 : 1.8,
        targetScale: isMatch ? 2.4 : 1.8
      };

      if (!isMatch) {
        sprite.scale.set(1.8, 0.5, 1);
        sprite.material.opacity = 0.35;
      }

      sphereGroup.add(sprite);
      spriteObjects.push(sprite);
    });

    const ambLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambLight);

    // Mouse & Touch Interaction
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    let vel = { x: 0.002, y: 0.004 };
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    const getRelPos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    const onPointerDown = (clientX, clientY) => {
      isDragging = true;
      prevPointer = { x: clientX, y: clientY };
      cyberAudio?.playClick();
    };

    const onPointerMove = (clientX, clientY) => {
      const rel = getRelPos(clientX, clientY);
      mouse.x = rel.x;
      mouse.y = rel.y;

      if (isDragging) {
        const dx = clientX - prevPointer.x;
        const dy = clientY - prevPointer.y;
        vel.y = dx * 0.0045;
        vel.x = dy * 0.0045;
        sphereGroup.rotation.y += vel.y;
        sphereGroup.rotation.x += vel.x;
        prevPointer = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Mouse listeners
    const handleMouseDown = (e) => onPointerDown(e.clientX, e.clientY);
    const handleMouseMove = (e) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = () => onPointerUp();

    // Touch listeners
    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(spriteObjects);
      if (intersects.length > 0) {
        const item = intersects[0].object.userData;
        cyberAudio?.playSuccess();
        if (onSkillSelect) onSkillSelect(item);
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('click', handleClick);

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Inertia and slow continuous auto-rotation
      if (!isDragging) {
        vel.x *= 0.95;
        vel.y *= 0.95;
        sphereGroup.rotation.x += vel.x + 0.0006;
        sphereGroup.rotation.y += vel.y + 0.0022;
      }

      wireSphere.rotation.y = elapsed * 0.08;
      wireSphere.rotation.z = elapsed * 0.04;
      corePoints.rotation.y = -elapsed * 0.12;

      // Raycast hover check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(spriteObjects);

      let currentHover = null;
      if (intersects.length > 0) {
        const obj = intersects[0].object;
        currentHover = obj.userData;
      }

      if (currentHover?.name !== hoveredRef.current?.name) {
        if (currentHover && !hoveredRef.current) cyberAudio?.playHover();
        hoveredRef.current = currentHover;
        setHoveredSkill(currentHover);
      }

      // Smooth scale interpolation on hovered sprite
      spriteObjects.forEach((sprite) => {
        const isThisHovered = currentHover && currentHover.name === sprite.userData.name;
        const targetX = isThisHovered ? 2.9 : sprite.userData.baseScale;
        const targetY = isThisHovered ? 0.78 : sprite.userData.baseScale * 0.27;
        sprite.scale.x += (targetX - sprite.scale.x) * 0.2;
        sprite.scale.y += (targetY - sprite.scale.y) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);

      wireGeom.dispose();
      wireMat.dispose();
      coreGeom.dispose();
      coreParticleMat.dispose();
      spriteObjects.forEach((s) => {
        s.material.dispose();
        s.userData.texture?.dispose();
      });
      if (renderer) renderer.dispose();
    };
  }, [activeFilter, onSkillSelect]);

  return (
    <div
      ref={containerRef}
      className="skills-3d-galaxy-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '460px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        touchAction: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />

      {/* Floating Info Overlay */}
      <div className="skills-galaxy-hud">
        {hoveredSkill ? (
          <div className="hud-skill-card">
            <span className="hud-skill-name">{hoveredSkill.name}</span>
            <span className="hud-skill-level">Proficiency: {hoveredSkill.level}</span>
          </div>
        ) : (
          <div className="hud-hint">
            <span>Drag Galaxy in 3D • Touch &amp; Spin • Click Skill</span>
          </div>
        )}
      </div>
    </div>
  );
}
