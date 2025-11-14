'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, Users, Building2, Heart, CheckCircle, ArrowRight, User } from 'lucide-react';

const CaregiverOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Share Your Profile",
      description: "Tell us about your experience, certifications, availability, and what kind of work you're looking for via phone or chat. It's like talking to a supportive career advisor.",
      icon: MessageCircle,
      color: "primary", // Use theme color name
      animation: "profile"
    },
    {
      number: 2,
      title: "Get Matched",
      description: "Our AI analyzes opportunities from care agencies, families, and senior living facilities to find positions that match your skills, preferences, and schedule.",
      icon: Sparkles,
      color: "primary", // Use theme color name
      animation: "matching"
    },
    {
      number: 3,
      title: "Apply once to 100+ employers",
      description: "Apply and we'll find the best opportunities for you based on your profile.",
      icon: CheckCircle,
      color: "primary", // Use theme color name
      animation: "connect"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const step = steps[currentStep];

  // Profile sharing animation components
  const ProfileAnimation = () => {
    // Responsive orbit radius
    const [orbitRadius, setOrbitRadius] = React.useState(50);
    
    React.useEffect(() => {
      const updateRadius = () => {
        setOrbitRadius(window.innerWidth < 640 ? 50 : 80);
      };
      updateRadius();
      window.addEventListener('resize', updateRadius);
      return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
      <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
        {/* Central avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* USE SEMANTIC COLORS */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center shadow-xl">
            <User className="w-8 h-8 sm:w-12 sm:h-12 text-primary-foreground" />
          </div>
        </motion.div>

        {/* Orbiting info bubbles */}
        {[
          { icon: "📋", delay: 0.2, angle: 0 },
          { icon: "⭐", delay: 0.4, angle: 120 },
          { icon: "📅", delay: 0.6, angle: 240 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              x: Math.cos((item.angle * Math.PI) / 180) * orbitRadius,
              y: Math.sin((item.angle * Math.PI) / 180) * orbitRadius
            }}
            transition={{ 
              delay: item.delay,
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
            // USE SEMANTIC COLORS
            className="absolute w-10 h-10 sm:w-16 sm:h-16 bg-card rounded-xl shadow-lg flex items-center justify-center text-lg sm:text-2xl"
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Pulse rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 2,
              delay: i * 0.7,
              repeat: Infinity,
              ease: "easeOut"
            }}
            // USE SEMANTIC COLORS (e.g., primary with opacity)
            className="absolute w-16 h-16 sm:w-24 sm:h-24 border-2 border-primary/30 rounded-full"
          />
        ))}
      </div>
    );
  };

  // AI matching animation
  const MatchingAnimation = () => {
    // Responsive animation values
    const [animValues, setAnimValues] = React.useState({ 
      startX: 120, 
      endX: 55, 
      startY: 60, 
      endY: 40 
    });
    
    React.useEffect(() => {
      const updateValues = () => {
        const isMobile = window.innerWidth < 640;
        setAnimValues({
          startX: isMobile ? 120 : 200,
          endX: isMobile ? 55 : 80,
          startY: isMobile ? 60 : 100,
          endY: isMobile ? 40 : 60
        });
      };
      updateValues();
      window.addEventListener('resize', updateValues);
      return () => window.removeEventListener('resize', updateValues);
    }, []);

    return (
      <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
        {/* AI Brain/Sparkle in center */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative z-10"
        >
          {/* USE SEMANTIC COLORS */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
            <User className="w-8 h-8 sm:w-12 sm:h-12 text-primary-foreground" />
          </div>
        </motion.div>

        {/* Opportunity cards flying around */}
        {[
          // Using accent and primary for variety
          { icon: Building2, color: "bg-accent", delay: 0 },
          { icon: Users, color: "bg-primary", delay: 0.3 },
          { icon: Heart, color: "bg-accent", delay: 0.6 }
        ].map((item, index) => {
          const Icon = item.icon;
          const side = index % 2 === 0 ? "left" : "right";
          return (
            <motion.div
              key={index}
              initial={{ 
                x: side === "left" ? -animValues.startX : animValues.startX, 
                y: -animValues.startY + index * animValues.startY,
                opacity: 0,
                scale: 0.5
              }}
              animate={{ 
                x: side === "left" ? -animValues.endX : animValues.endX,
                y: -animValues.endY + index * animValues.endY,
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5]
              }}
              transition={{
                duration: 3,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              // USE SEMANTIC COLORS
              className={`absolute w-10 h-10 sm:w-14 sm:h-14 ${item.color} rounded-lg shadow-lg flex items-center justify-center`}
            >
              <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
            </motion.div>
          );
        })}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {[0, 1, 2].map((i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={i === 1 ? "70%" : "30%"}
              y2={`${30 + i * 20}%`}
              stroke="oklch(var(--primary))" // Use CSS var directly
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
    );
  };

  // Connect & Apply animation
  const ConnectAnimation = () => {
    // Responsive confetti radius
    const [confettiRadius, setConfettiRadius] = React.useState(60);
    
    React.useEffect(() => {
      const updateRadius = () => {
        setConfettiRadius(window.innerWidth < 640 ? 60 : 100);
      };
      updateRadius();
      window.addEventListener('resize', updateRadius);
      return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
      <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
        {/* Left side - Job cards */}
        <div className="absolute left-2 sm:left-12 top-1/2 -translate-y-1/2 space-y-3">
          {[0].map((i) => (
            <motion.div
              key={i}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
              // USE SEMANTIC COLORS
              className="w-14 h-10 sm:w-20 sm:h-16 bg-card rounded-lg shadow-md border-2 border-primary/20 flex items-center justify-center"
            >
              <User className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Center - Arrow with checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative z-10"
        >
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowRight className="w-10 h-10 sm:w-16 sm:h-16 text-primary" />
          </motion.div>
        </motion.div>

        {/* Right side - Employer with checkmark */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute right-2 sm:right-12 top-1/2 -translate-y-1/2"
        >
          <div className="relative">
            {/* USE SEMANTIC COLORS */}
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
              <Building2 className="w-8 h-8 sm:w-12 sm:h-12 text-primary-foreground" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, duration: 0.3 }}
              // Use a destructive/success color. Green-500 is fine, or you can add a 'success' var.
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>

        {/* Confetti particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: Math.cos((i * 45 * Math.PI) / 180) * confettiRadius,
              y: Math.sin((i * 45 * Math.PI) / 180) * confettiRadius,
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: 1.5,
              ease: "easeOut"
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              // Use theme colors
              backgroundColor: i % 2 === 0 ? 'oklch(var(--primary))' : 'oklch(var(--accent))',
              left: '50%',
              top: '50%'
            }}
          />
        ))}
      </div>
    );
  };

  const AnimationComponent = {
    profile: ProfileAnimation,
    matching: MatchingAnimation,
    connect: ConnectAnimation
  }[step.animation];

  return (
    <div className="flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            // USE SEMANTIC COLORS
            className="bg-card rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10"
          >
            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
              {steps.map((s, index) => (
                <div
                  key={index}
                  // USE SEMANTIC COLORS
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'w-12 sm:w-16 bg-primary'
                      : index < currentStep
                      ? 'w-8 bg-primary/50'
                      : 'w-8 bg-muted'
                  }`}
                />
              ))}
            </div>

            {/* Animation area */}
            <div className="mb-6 sm:mb-8">
              {AnimationComponent && <AnimationComponent key={step.animation} />}
            </div>

            {/* Step number badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-4"
            >
              {/* USE SEMANTIC COLORS */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground text-xl sm:text-2xl font-normal">{step.number}</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              {/* USE SEMANTIC COLORS & FONT FIX */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground mb-3 sm:mb-4">
                {step.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
                {step.description}
              </p>
            </motion.div>

            {/* CTA Button (appears on last step) */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 sm:mt-8 flex justify-center"
              >
                {/* USE SEMANTIC COLORS & FONT FIX */}
                <a href="/questions" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-normal text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            )}

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  // USE SEMANTIC COLORS
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep ? 'bg-primary w-6' : 'bg-muted'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaregiverOnboarding;