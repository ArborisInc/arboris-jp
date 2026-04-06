"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  targetX: number;
  targetY: number;
}

function TreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const PARTICLE_COUNT = 120;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate tree branch target points
    function generateTreePoints(
      cx: number,
      cy: number,
      angle: number,
      length: number,
      depth: number,
      points: { x: number; y: number }[]
    ) {
      if (depth === 0 || length < 5) return;
      const endX = cx + Math.cos(angle) * length;
      const endY = cy + Math.sin(angle) * length;
      // Sample points along the branch
      const steps = Math.max(2, Math.floor(length / 12));
      for (let i = 0; i <= steps; i++) {
        points.push({
          x: cx + (Math.cos(angle) * length * i) / steps,
          y: cy + (Math.sin(angle) * length * i) / steps,
        });
      }
      generateTreePoints(endX, endY, angle - 0.4, length * 0.68, depth - 1, points);
      generateTreePoints(endX, endY, angle + 0.4, length * 0.68, depth - 1, points);
      if (depth > 3) {
        generateTreePoints(endX, endY, angle - 0.25, length * 0.55, depth - 2, points);
        generateTreePoints(endX, endY, angle + 0.25, length * 0.55, depth - 2, points);
      }
    }

    const treePoints: { x: number; y: number }[] = [];

    const initParticles = () => {
      treePoints.length = 0;
      const cx = canvas.width / 2;
      const cy = canvas.height * 0.88;
      const trunkLen = canvas.height * 0.28;
      generateTreePoints(cx, cy, -Math.PI / 2, trunkLen, 7, treePoints);

      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const target = treePoints[Math.floor(Math.random() * treePoints.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          size: Math.random() * 2 + 0.5,
          targetX: target.x + (Math.random() - 0.5) * 8,
          targetY: target.y + (Math.random() - 0.5) * 8,
        });
      }
    };
    initParticles();
    window.addEventListener("resize", initParticles);

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw glowing connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 255, 218, ${(1 - dist / 60) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * 0.004;
        p.vy += dy * 0.004;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.x += p.vx;
        p.y += p.vy;

        // Pulse alpha
        p.alpha = 0.3 + Math.sin(frame * 0.02 + p.x) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 218, ${p.alpha})`;
        ctx.fill();

        // Glow effect for larger particles
        if (p.size > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 255, 218, ${p.alpha * 0.15})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", initParticles);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ display: "block" }}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A192F]"
    >
      {/* Particle Tree Background */}
      <TreeCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/40 via-transparent to-[#0A192F]/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A192F] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#CCD6F6] leading-tight mb-12 text-center"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          土台を育て
          <br />
          深く根を張る
          <br />
          <span className="text-[#E6F1FF]">事業の大樹を育てる</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://forms.gle/xh3cYEHpHv55DcoeA"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[#64FFDA] text-[#0A192F] font-bold rounded text-base hover:bg-[#64FFDA]/90 transition-all shadow-lg shadow-[#64FFDA]/20 hover:shadow-[#64FFDA]/40 hover:-translate-y-0.5 transform"
          >
            DX無料診断を受ける
            <span className="ml-2 group-hover:ml-3 transition-all">→</span>
          </a>
          <Link
            href="/contact"
            className="px-8 py-4 border border-[#64FFDA] text-[#64FFDA] font-medium rounded text-base hover:bg-[#64FFDA]/10 transition-all hover:-translate-y-0.5 transform text-center"
          >
            お問い合わせ
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
