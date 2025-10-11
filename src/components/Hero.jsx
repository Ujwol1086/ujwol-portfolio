import { motion, useTransform } from "framer-motion";
import Ujwol from "../assets/Profile.jpg";
import { useState, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Hero = ({ scrollYProgress, scrollToSection, isDarkMode }) => {
  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Three.js Components with proper animation patterns
  const FloatingShapes = ({ count = 30 }) => {
    const meshRef = useRef();
    const shapes = useMemo(() => {
      const temp = [];
      for (let i = 0; i < count; i++) {
        const time = Math.random() * 100;
        const factor = Math.random() * 20 + 10;
        const scale = Math.random() * 0.5 + 0.5;
        const geometry = Math.random() > 0.5 ? 'box' : 'sphere';
        const initialPosition = [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25
        ];
        temp.push({ time, factor, scale, geometry, id: i, initialPosition });
      }
      return temp;
    }, [count]);

    useFrame((state) => {
      const time = state.clock.elapsedTime;
      
      shapes.forEach((shape, i) => {
        if (meshRef.current) {
          const mesh = meshRef.current.children[i];
          if (mesh) {
            // Smooth position animation using sine waves
            const t = time - shape.time;
            mesh.position.y = shape.initialPosition[1] + Math.sin(t / shape.factor) * 3;
            mesh.position.x = shape.initialPosition[0] + Math.sin(t / (shape.factor * 1.5)) * 2;
            
            // Rotation animation
            mesh.rotation.x = Math.sin(t / 10) * 0.5;
            mesh.rotation.y = Math.sin(t / 15) * 0.5;
            mesh.rotation.z = Math.sin(t / 20) * 0.3;
            
            // Scale animation
            const scaleVariation = Math.sin(t / 8) * 0.1;
            mesh.scale.setScalar(shape.scale + scaleVariation);
          }
        }
      });
    });

    return (
      <group ref={meshRef}>
        {shapes.map((shape) => (
          <mesh
            key={shape.id}
            position={shape.initialPosition}
            geometry={shape.geometry === 'box' ? 
              new THREE.BoxGeometry(0.5, 0.5, 0.5) : 
              new THREE.SphereGeometry(0.3, 16, 16)
            }
          >
            <meshStandardMaterial 
              color={new THREE.Color().setHSL(
                Math.random() * 0.3 + 0.5, 
                0.8, 
                0.6
              )}
              transparent
              opacity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    );
  };

  const InteractiveParticles = ({ count = 500 }) => {
    const points = useRef();
    const particlesRef = useRef();
    
    // Create particle system with proper Three.js patterns
    const particles = useMemo(() => {
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Initial positions
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;
        
        // Velocities for smooth movement
        velocities[i3] = (Math.random() - 0.5) * 0.01;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
        
        // Colors based on theme
        const hue = isDarkMode ? 0.6 : 0.7; // Blue to purple
        const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
      }
      
      return { positions, velocities, colors };
    }, [count, isDarkMode]);

    useFrame((state) => {
      if (points.current && particlesRef.current) {
        const time = state.clock.elapsedTime;
        const positions = particlesRef.current.positions;
        const velocities = particlesRef.current.velocities;
        
        // Update particle positions with smooth animation
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          
          // Add velocity
          positions[i3] += velocities[i3];
          positions[i3 + 1] += velocities[i3 + 1];
          positions[i3 + 2] += velocities[i3 + 2];
          
          // Add wave motion
          positions[i3 + 1] += Math.sin(time * 0.5 + i * 0.1) * 0.002;
          positions[i3] += Math.cos(time * 0.3 + i * 0.1) * 0.002;
          
          // Boundary checking with smooth wrapping
          if (Math.abs(positions[i3]) > 10) {
            positions[i3] = -Math.sign(positions[i3]) * 10;
          }
          if (Math.abs(positions[i3 + 1]) > 10) {
            positions[i3 + 1] = -Math.sign(positions[i3 + 1]) * 10;
          }
          if (Math.abs(positions[i3 + 2]) > 10) {
            positions[i3 + 2] = -Math.sign(positions[i3 + 2]) * 10;
          }
        }
        
        // Update geometry attributes
        points.current.geometry.attributes.position.array = positions;
        points.current.geometry.attributes.position.needsUpdate = true;
      }
    });

    return (
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
        <group ref={particlesRef} userData={{ positions: particles.positions, velocities: particles.velocities }} />
      </points>
    );
  };

  // Animated geometric rings component
  const AnimatedRings = ({ isDarkMode }) => {
    const ringsRef = useRef();
    const ringCount = 3;

    useFrame((state) => {
      const time = state.clock.elapsedTime;
      
      if (ringsRef.current) {
        ringsRef.current.children.forEach((ring, index) => {
          const speed = 0.5 + index * 0.2;
          const scale = 1 + Math.sin(time * speed) * 0.1;
          const rotation = time * (0.3 + index * 0.1);
          
          ring.scale.setScalar(scale);
          ring.rotation.z = rotation;
          ring.rotation.x = Math.sin(time * 0.2) * 0.1;
        });
      }
    });

    return (
      <group ref={ringsRef}>
        {Array.from({ length: ringCount }, (_, i) => (
          <mesh key={i} position={[0, 0, -5 - i * 2]}>
            <ringGeometry args={[2 + i * 1.5, 2.2 + i * 1.5, 32]} />
            <meshBasicMaterial 
              color={isDarkMode ? 
                new THREE.Color().setHSL(0.6 + i * 0.1, 0.8, 0.6) :
                new THREE.Color().setHSL(0.7 + i * 0.1, 0.8, 0.6)
              }
              transparent
              opacity={0.3 - i * 0.05}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>
    );
  };

  const ThreeJSBackground = () => {
    const { camera, scene } = useThree();
    const lightsRef = useRef();

    useFrame((state) => {
      const time = state.clock.elapsedTime;
      
      // Smooth camera movement with easing
      const cameraX = Math.sin(time * 0.1) * 2;
      const cameraY = Math.cos(time * 0.15) * 1;
      
      camera.position.x += (cameraX - camera.position.x) * 0.02;
      camera.position.y += (cameraY - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      
      // Animate lights for dynamic lighting
      if (lightsRef.current) {
        const directionalLight = lightsRef.current.children[0];
        const pointLight = lightsRef.current.children[1];
        
        if (directionalLight) {
          directionalLight.position.x = Math.sin(time * 0.2) * 15;
          directionalLight.position.z = Math.cos(time * 0.2) * 15;
        }
        
        if (pointLight) {
          pointLight.intensity = 0.3 + Math.sin(time * 0.5) * 0.2;
        }
      }
    });

    return (
      <>
        {/* Enhanced lighting system */}
        <group ref={lightsRef}>
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2} 
            color={isDarkMode ? "#1e40af" : "#3b82f6"}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight 
            position={[-10, -10, -5]} 
            intensity={0.6} 
            color={isDarkMode ? "#8b5cf6" : "#a855f7"}
            distance={50}
            decay={2}
          />
          <hemisphereLight 
            intensity={0.2}
            color={isDarkMode ? "#1e293b" : "#f8fafc"}
            groundColor={isDarkMode ? "#0f172a" : "#e2e8f0"}
          />
        </group>

        {/* Background elements */}
        <FloatingShapes count={30} />
        <InteractiveParticles count={500} />
        
        {/* Animated geometric rings */}
        <AnimatedRings isDarkMode={isDarkMode} />
        
        {/* Enhanced sparkles effect */}
        <Sparkles 
          count={150} 
          scale={15} 
          size={3} 
          speed={0.4}
          color={isDarkMode ? "#3b82f6" : "#8b5cf6"}
          opacity={0.7}
          noise={0.8}
        />
      </>
    );
  };
  
  const roles = [
    "Frontend Developer",
    "Backend Developer", 
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "UI/UX Enthusiast"
  ];

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        // Continue typing or deleting
        setCurrentText(prev => 
          isDeleting 
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden ${
        isDarkMode ? 'bg-transparent' : 'bg-white'
      }`}
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ 
            position: [0, 0, 8], 
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
            logarithmicDepthBuffer: false
          }}
          style={{ 
            background: 'transparent'
          }}
          performance={{ min: 0.5 }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ThreeJSBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Background Elements */}
      <motion.div
        className={`absolute inset-0 ${isDarkMode ? 'opacity-20' : 'opacity-5'}`}
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            style={{ y: textY }}
          >
            {/* Greeting Animation */}
            <motion.div
              className="mb-8 lg:hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl shadow-2xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💻
              </motion.div>
            </motion.div>

            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-400'}`}
              {...fadeInUp}
            >
              Hi, I'm <span className="gradient-text">Ujwol Aryal</span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              className="mb-8 h-16 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                <span className="font-mono">I'm a </span>
                <span className="relative">
                  {currentText}
                  <motion.span
                    className={`inline-block w-0.5 h-8 md:h-10 ml-1 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </span>
              </div>
            </motion.div>

            <motion.p
              className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Innovative IT Professional & Full Stack Developer passionate about
              creating
              <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {" "}
                digital solutions
              </span>{" "}
              that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-3 border-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={slideInRight}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {/* Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Developer-themed border */}
                <div className={`absolute inset-0 rounded-lg p-[3px] ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800' 
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'
                }`}>
                  <div className={`w-full h-full rounded-lg overflow-hidden ${
                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                  }`}>
                    <img
                      src={Ujwol}
                      alt="Ujwol Aryal - Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-blue-900 flex items-center justify-center text-white text-6xl font-bold ">
                      UA
                    </div>
                  </div>
                </div>

                {/* Tech-themed corner elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 transform rotate-45"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 transform rotate-45"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Code-like decorative elements */}
                <motion.div
                  className="absolute -top-4 left-4 text-blue-400 font-mono text-sm opacity-70"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &lt;dev&gt;
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 right-4 text-blue-400 font-mono text-sm opacity-70"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  &lt;/dev&gt;
                </motion.div>
              </motion.div>

              {/* Developer greeting for desktop */}
              <motion.div
                className="hidden lg:block absolute -top-16 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-gray-800 to-blue-900 rounded-lg flex items-center justify-center text-2xl shadow-2xl border border-blue-500/30"
                  animate={{
                    borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.6)", "rgba(59, 130, 246, 0.3)"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💻
                </motion.div>
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className="absolute top-4 right-4 flex items-center space-x-2 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="font-mono">Available for work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-gray-400' : 'border-gray-600'
          }`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className={`w-1 h-3 rounded-full mt-2 ${
              isDarkMode ? 'bg-gray-400' : 'bg-gray-600'
            }`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
