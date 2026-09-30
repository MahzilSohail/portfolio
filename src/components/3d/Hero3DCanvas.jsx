'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cyberAudio } from '../../lib/cyberAudio';

export default function Hero3DCanvas({ onSelectNode }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hoveredNodeName, setHoveredNodeName] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const hoveredRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let width = container.clientWidth || 480;
    let height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

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

    // Main rotating compound group with parallax tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- 1. Central 3D Celestial Wireframe Globe ---
    const globeGeom = new THREE.SphereGeometry(1.9, 32, 24);
    const globeWireMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const globeWireMesh = new THREE.Mesh(globeGeom, globeWireMat);
    mainGroup.add(globeWireMesh);

    // Equator / Latitude Rings for Globe
    const equatorGeom = new THREE.RingGeometry(1.92, 1.96, 48);
    const equatorMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6
    });
    const equatorMesh = new THREE.Mesh(equatorGeom, equatorMat);
    equatorMesh.rotation.x = Math.PI / 2;
    mainGroup.add(equatorMesh);

    // Inner Glowing Core Sphere
    const innerCoreGeom = new THREE.IcosahedronGeometry(1.15, 2);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    mainGroup.add(innerCoreMesh);

    // Dynamic inner light
    const corePointLight = new THREE.PointLight(0x06b6d4, 3.5, 14);
    mainGroup.add(corePointLight);

    // --- 2. Tri-Axial Gyroscopic Orbital Rings ---
    const ringGroup = new THREE.Group();
    mainGroup.add(ringGroup);

    const ring1Geom = new THREE.TorusGeometry(2.7, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x0891b2,
      emissiveIntensity: 0.4
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ringGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(3.2, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.4
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ringGroup.add(ring2);

    const ring3Geom = new THREE.TorusGeometry(3.7, 0.035, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    ringGroup.add(ring3);

    // --- 3. Orbiting Interactive Tech Satellite Nodes ---
    const satelliteNodes = [
      { name: 'Full-Stack Architecture', color: 0x06b6d4, orbitR: 4.6, speed: 0.6, yOffset: 0.8, desc: 'Next.js, Node, NestJS' },
      { name: 'Mobile Systems (Flutter)', color: 0x38bdf8, orbitR: 4.8, speed: -0.5, yOffset: -0.9, desc: 'Cross-platform apps & Dart' },
      { name: 'React & 3D Interactive Web', color: 0x8b5cf6, orbitR: 5.1, speed: 0.45, yOffset: 1.2, desc: 'Three.js, WebGL & Modern UI' },
      { name: 'Databases & Cloud Architecture', color: 0x10b981, orbitR: 4.5, speed: -0.7, yOffset: -1.1, desc: 'PostgreSQL, MySQL, Firestore' },
      { name: 'Core Systems & C++ (86%)', color: 0xf59e0b, orbitR: 5.3, speed: 0.35, yOffset: 0.4, desc: 'DSA, Custom Memory, Systems' },
      { name: 'AI & Python (65%)', color: 0xec4899, orbitR: 4.9, speed: -0.4, yOffset: -0.3, desc: 'Pathfinding & Heuristic Models' }
    ];

    const nodeObjects = [];
    const nodeGroup = new THREE.Group();
    mainGroup.add(nodeGroup);

    satelliteNodes.forEach((nodeData, idx) => {
      const geom = new THREE.SphereGeometry(0.32, 24, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: nodeData.color,
        emissive: nodeData.color,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.8
      });
      const mesh = new THREE.Mesh(geom, mat);

      const auraGeom = new THREE.RingGeometry(0.42, 0.48, 24);
      const auraMat = new THREE.MeshBasicMaterial({
        color: nodeData.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const auraMesh = new THREE.Mesh(auraGeom, auraMat);
      mesh.add(auraMesh);

      mesh.userData = {
        ...nodeData,
        baseScale: 1,
        targetScale: 1,
        auraMesh,
        index: idx
      };

      nodeGroup.add(mesh);
      nodeObjects.push(mesh);
    });

    // --- 4. Micro Particle Swarm ---
    const microCount = 350;
    const microGeom = new THREE.BufferGeometry();
    const microPos = new Float32Array(microCount * 3);
    const microCol = new Float32Array(microCount * 3);

    for (let i = 0; i < microCount; i++) {
      const i3 = i * 3;
      const r = 2.0 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      microPos[i3] = r * Math.sin(phi) * Math.cos(theta);
      microPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      microPos[i3 + 2] = r * Math.cos(phi);

      const isCyan = Math.random() > 0.5;
      microCol[i3] = isCyan ? 0.02 : 0.4;
      microCol[i3 + 1] = isCyan ? 0.7 : 0.2;
      microCol[i3 + 2] = isCyan ? 0.85 : 0.95;
    }

    microGeom.setAttribute('position', new THREE.BufferAttribute(microPos, 3));
    microGeom.setAttribute('color', new THREE.BufferAttribute(microCol, 3));

    const microMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const microSystem = new THREE.Points(microGeom, microMat);
    mainGroup.add(microSystem);

    // --- 5. Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x06b6d4, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 2.5);
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    // --- 6. Interactivity: Mouse & Touch with Parallax & Inertia ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.002, y: 0.005 };

    const getRelPos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    const handlePointerStart = (clientX, clientY) => {
      isDragging = true;
      setIsInteracting(true);
      prevPointer = { x: clientX, y: clientY };
      cyberAudio?.playClick();
    };

    const handlePointerMove = (clientX, clientY) => {
      const rel = getRelPos(clientX, clientY);
      mouse.x = rel.x;
      mouse.y = rel.y;

      // Parallax target
      targetParallaxX = rel.x * 0.4;
      targetParallaxY = rel.y * 0.3;

      if (isDragging) {
        const deltaX = clientX - prevPointer.x;
        const deltaY = clientY - prevPointer.y;

        rotationVelocity.y = deltaX * 0.005;
        rotationVelocity.x = deltaY * 0.005;

        mainGroup.rotation.y += rotationVelocity.y;
        mainGroup.rotation.x += rotationVelocity.x;

        prevPointer = { x: clientX, y: clientY };
      }
    };

    const handlePointerEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Mouse listeners
    const onMouseDown = (e) => handlePointerStart(e.clientX, e.clientY);
    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onMouseUp = () => handlePointerEnd();

    // Touch listeners
    const onTouchStart = (e) => {
      if (e.touches.length > 0) {
        handlePointerStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchEnd = () => handlePointerEnd();

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeObjects, true);

      if (intersects.length > 0) {
        const hitNode = intersects[0].object.userData.name
          ? intersects[0].object
          : intersects[0].object.parent;

        if (hitNode && hitNode.userData.name) {
          cyberAudio?.playSuccess();
          if (onSelectNode) onSelectNode(hitNode.userData);
        }
      } else {
        // Shockwave pulse
        globeWireMesh.scale.set(1.2, 1.2, 1.2);
        cyberAudio?.playWarp();
      }
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseup', onMouseUp);

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
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

    // --- 7. Animation Loop with Parallax & Auto-Animation ---
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth parallax lerp
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;

      // Inertia & slow auto rotation when not dragging
      if (!isDragging) {
        rotationVelocity.x *= 0.95;
        rotationVelocity.y *= 0.95;
        mainGroup.rotation.x += rotationVelocity.x + 0.0008;
        mainGroup.rotation.y += rotationVelocity.y + 0.0028;
      }

      // Parallax camera tilt
      camera.position.x = currentParallaxX * 2.0;
      camera.position.y = currentParallaxY * 2.0;
      camera.lookAt(0, 0, 0);

      // Bounce back globe wireframe scale if pulsed
      globeWireMesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08);

      // Globe & Core rotations
      globeWireMesh.rotation.y = elapsedTime * 0.25;
      equatorMesh.rotation.z = elapsedTime * 0.2;
      innerCoreMesh.rotation.y = -elapsedTime * 0.35;
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
      innerCoreMesh.scale.set(pulse, pulse, pulse);

      // Gyro Rings individual rotations
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.y = elapsedTime * -0.28;
      ring3.rotation.x = elapsedTime * 0.42;

      // Orbit satellite nodes
      satelliteNodes.forEach((nodeData, idx) => {
        const mesh = nodeObjects[idx];
        const angle = elapsedTime * nodeData.speed + (idx * (Math.PI * 2 / satelliteNodes.length));
        mesh.position.x = Math.cos(angle) * nodeData.orbitR;
        mesh.position.z = Math.sin(angle) * nodeData.orbitR;
        mesh.position.y = nodeData.yOffset + Math.sin(elapsedTime * 1.5 + idx) * 0.4;

        mesh.userData.auraMesh.lookAt(camera.position);

        const curScale = mesh.scale.x;
        const targetScale = mesh.userData.targetScale;
        const nextScale = curScale + (targetScale - curScale) * 0.15;
        mesh.scale.set(nextScale, nextScale, nextScale);
      });

      // Micro particles rotation
      microSystem.rotation.y = -elapsedTime * 0.08;
      microSystem.rotation.z = elapsedTime * 0.04;

      // Raycasting for node hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeObjects, true);

      let foundHover = null;
      nodeObjects.forEach(mesh => {
        mesh.userData.targetScale = 1;
        mesh.material.emissiveIntensity = 0.5;
      });

      if (intersects.length > 0) {
        const hitNode = intersects[0].object.userData.name
          ? intersects[0].object
          : intersects[0].object.parent;

        if (hitNode && hitNode.userData.name) {
          hitNode.userData.targetScale = 1.6;
          hitNode.material.emissiveIntensity = 1.4;
          foundHover = hitNode.userData;
        }
      }

      if (foundHover?.name !== hoveredRef.current?.name) {
        if (foundHover && !hoveredRef.current) cyberAudio?.playHover();
        hoveredRef.current = foundHover;
        setHoveredNodeName(foundHover ? foundHover.name : null);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);

      globeGeom.dispose();
      globeWireMat.dispose();
      equatorGeom.dispose();
      equatorMat.dispose();
      innerCoreGeom.dispose();
      innerCoreMat.dispose();
      ring1Geom.dispose();
      ring2Geom.dispose();
      ring3Geom.dispose();
      ring1Mat.dispose();
      ring2Mat.dispose();
      ring3Mat.dispose();
      microGeom.dispose();
      microMat.dispose();
      nodeObjects.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      if (renderer) renderer.dispose();
    };
  }, [onSelectNode]);

  return (
    <div
      ref={containerRef}
      className="hero-3d-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isInteracting ? 'grabbing' : 'grab',
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

      {/* 3D Interactivity Helper Pills */}
      <div className="hero-3d-badge">
        <span className="badge-glow-dot"></span>
        <span className="badge-text">
          {hoveredNodeName ? (
            <strong className="text-cyan-400">{hoveredNodeName}</strong>
          ) : (
            '3D Celestial Globe • Drag to Rotate'
          )}
        </span>
      </div>

      <div className="hero-3d-hint">
        <span>Touch &amp; Drag in 360° • Click node to inspect</span>
      </div>
    </div>
  );
}
