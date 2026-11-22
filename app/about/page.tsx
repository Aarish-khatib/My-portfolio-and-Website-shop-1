'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Code, Bot, Globe, Target, Rocket, Lightbulb, Heart, Users } from 'lucide-react'
import { Particles3DVisualization } from '@/components/particles-3d-visualization'
import { Card3DParallax } from '@/components/3d-parallax-card'
import { LineWaves } from '@/components/line-waves'

// Animated reveal section
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Glass card with 3D tilt
function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card glass-card-hover p-8 transition-transform duration-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

// Value card
function ValueCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <GlassCard className="text-center cursor-hover">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cosmic-accent/20 to-cosmic-glow/20 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-cosmic-accent" />
      </div>
      <h3 className="text-xl font-display font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm font-medium leading-[1.8] text-slate-200">{description}</p>
    </GlassCard>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative z-20 min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* LineWaves background */}
        <div className="absolute inset-0 z-0">
          <LineWaves
            preset="purple"
            speed={0.2}
            enableMouseInteraction={true}
            brightness={0.13}
            className="h-full w-full"
          />
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-accent/5 via-transparent to-transparent" />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cosmic-accent font-semibold tracking-[0.28em] uppercase text-sm">About Me</span>
            <h1 className="mt-4 mb-6 text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl">
              <span className="text-white drop-shadow-lg">The Story Behind</span>
              <br />
              <span className="text-white drop-shadow-lg">The Code</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-8 text-slate-200 md:text-xl">
              I'm Aarish, a student exploring AI systems, full-stack applications,
              automation, and creative software through practical projects.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Visualization Section */}
      <section className="relative h-screen">
        <Particles3DVisualization />
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 3D Depth Visualization Side */}
            <RevealSection className="relative">
              <Card3DParallax intensity={0.6} delay={0.1}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cosmic-accent/20 to-cosmic-glow/20 rounded-3xl transform -rotate-3" />
                    <div className="absolute inset-0 bg-cosmic-deep rounded-3xl overflow-hidden border border-white/10 bg-[#0d1528] shadow-2xl">
                    {/* Abstract geometric visualization */}
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <div className="relative w-full h-64">
                        {/* Animated geometric shapes */}
                        <motion.div
                          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                          transition={{ duration: 8, repeat: Infinity }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-32 h-32 border-2 border-cosmic-accent/40 rounded-full" />
                          <div className="absolute w-24 h-24 border-2 border-cosmic-glow/40 rounded-full" />
                          <div className="absolute w-16 h-16 border-2 border-cosmic-aurora-end/40 rounded-full" />
                        </motion.div>
                        
                        {/* Floating particles */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -30, 0],
                              x: [0, Math.cos(i * Math.PI / 3) * 40, 0],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 4 + i,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            className="absolute w-2 h-2 rounded-full bg-cosmic-accent"
                            style={{
                              left: `${50 + Math.cos(i * Math.PI / 3) * 40}%`,
                              top: `${50 + Math.sin(i * Math.PI / 3) * 40}%`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-cosmic-accent/30 rounded-full" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-cosmic-glow/30 rounded-full" />
                </div>
              </Card3DParallax>
            </RevealSection>

            {/* Text Side */}
            <RevealSection delay={0.2}>
              <div className="glass-card p-7 md:p-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 tracking-tight">
                Hello, I'm <span className="text-white drop-shadow-lg">Aarish</span>
              </h2>
              <div className="space-y-5 font-medium leading-8 text-slate-200">
                <p>
                  I build and experiment with web applications, AI tools, and
                  automation workflows. I use software projects to learn how
                  interfaces, models, and systems fit together.
                </p>
                <p>
                  My public projects include QuestPop, a productivity app;
                  Universe, an in-development visualization of space; and
                  Limitless AI, a multi-provider AI workspace.
                </p>
                <p>
                  Some ideas are experiments, and some features are still in
                  development. I aim to document those differences clearly,
                  test what I build, and improve it through iteration.
                </p>
              </div>

              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Skills & Domains */}
      <section className="section-padding bg-gradient-to-b from-cosmic-void via-cosmic-deep/30 to-cosmic-void">
        <div className="container mx-auto px-4">
          <RevealSection className="text-center mb-16">
            <span className="text-cosmic-accent font-medium tracking-widest uppercase text-sm">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-white">
              Areas I'm <span className="text-white drop-shadow-lg">Exploring</span>
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard>
              <Code className="w-10 h-10 text-cosmic-accent mb-4" />
              <h3 className="text-xl font-display font-semibold text-white mb-3">Web Development</h3>
              <p className="text-sm font-medium leading-[1.8] text-slate-200">
                Building practical apps and experimenting with React, Next.js, and web tooling
              </p>
            </GlassCard>

            <GlassCard>
              <Target className="w-10 h-10 text-cosmic-accent mb-4" />
              <h3 className="text-xl font-display font-semibold text-white mb-3">Local AI &amp; Automation</h3>
              <p className="text-sm font-medium leading-[1.8] text-slate-200">
                Exploring agent workflows, memory systems, and resource-aware local models
              </p>
            </GlassCard>

            <GlassCard>
              <Bot className="w-10 h-10 text-cosmic-accent mb-4" />
              <h3 className="text-xl font-display font-semibold text-white mb-3">AI Integration</h3>
              <p className="text-sm font-medium leading-[1.8] text-slate-200">
                Experimenting with model APIs, provider routing, and useful AI features
              </p>
            </GlassCard>

            <GlassCard>
              <Globe className="w-10 h-10 text-cosmic-accent mb-4" />
              <h3 className="text-xl font-display font-semibold text-white mb-3">Digital Strategy</h3>
              <p className="text-sm font-medium leading-[1.8] text-slate-200">
                Learning to improve UX, performance, and maintainable software design
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <RevealSection className="text-center mb-16">
            <span className="text-cosmic-accent font-medium tracking-widest uppercase text-sm">My Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-white">
              Core <span className="text-white drop-shadow-lg">Values</span>
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              description="Always exploring new technologies and approaches to solve problems creatively."
            />
            <ValueCard
              icon={Target}
              title="Excellence"
              description="Every project is an opportunity to deliver something exceptional."
            />
            <ValueCard
              icon={Heart}
              title="Passion"
              description="Genuine enthusiasm for creating digital experiences that matter."
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 md:p-20 text-center max-w-4xl mx-auto">
            <Rocket className="w-16 h-16 text-cosmic-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Looking <span className="text-white drop-shadow-lg">Ahead</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg font-medium leading-8 text-slate-200">
              I want to keep building reliable software, learn from real users, and
              make useful AI and web tools. Each project is an opportunity to
              test an idea, share what works, and improve what does not.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-full border border-white/15 bg-[#0d1528] px-6 py-3 text-slate-100">
                <Users className="w-4 h-4 inline mr-2" />
                Grow the team
              </div>
              <div className="rounded-full border border-white/15 bg-[#0d1528] px-6 py-3 text-slate-100">
                <Globe className="w-4 h-4 inline mr-2" />
                Global reach
              </div>
              <div className="rounded-full border border-white/15 bg-[#0d1528] px-6 py-3 text-slate-100">
                <Bot className="w-4 h-4 inline mr-2" />
                AI innovations
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
