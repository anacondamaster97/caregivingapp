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
      color: "pink",
      animation: "profile"
    },
    {
      number: 2,
      title: "Get Matched",
      description: "Our AI analyzes opportunities from care agencies, families, and senior living facilities to find positions that match your skills, preferences, and schedule.",
      icon: Sparkles,
      color: "purple",
      animation: "matching"
    },
    {
      number: 3,
      title: "Connect & Apply",
      description: "Review job details, compare opportunities side-by-side, and connect directly with employers when you find the right fit.",
      icon: CheckCircle,
      color: "pink",
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
  const ProfileAnimation = () => (
    <div className="relative w-full h-48 sm:h-64 flex items-center justify-center">
      {/* Central avatar */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-500 rounded-full flex items-center justify-center shadow-xl">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
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
            x: Math.cos((item.angle * Math.PI) / 180) * 80,
            y: Math.sin((item.angle * Math.PI) / 180) * 80
          }}
          transition={{ 
            delay: item.delay,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
          className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl sm:text-2xl"
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{
            duration: 2,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute w-20 h-20 sm:w-24 sm:h-24 border-2 border-pink-300 rounded-full"
        />
      ))}
    </div>
  );

  // AI matching animation
  const MatchingAnimation = () => (
    <div className="relative w-full h-48 sm:h-64 flex items-center justify-center">
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
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </div>
      </motion.div>

      {/* Opportunity cards flying around */}
      {[
        { icon: Building2, color: "bg-pink-500", delay: 0, side: "left" },
        { icon: Users, color: "bg-purple-500", delay: 0.3, side: "right" },
        { icon: Heart, color: "bg-pink-500", delay: 0.6, side: "left" }
      ].map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ 
              x: item.side === "left" ? -200 : 200, 
              y: -100 + index * 100,
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: item.side === "left" ? -80 : 80,
              y: -60 + index * 60,
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5]
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute w-12 h-12 sm:w-14 sm:h-14 ${item.color} rounded-lg shadow-lg flex items-center justify-center`}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
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
            stroke="#e879f9"
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

  // Connect & Apply animation
  const ConnectAnimation = () => (
    <div className="relative w-full h-48 sm:h-64 flex items-center justify-center">
      {/* Left side - Job cards */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 space-y-3">
        {[0].map((i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
            className="w-16 h-12 sm:w-20 sm:h-16 bg-white rounded-lg shadow-md border-2 border-pink-200 flex items-center justify-center"
          >
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
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
          animate={{ x: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowRight className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500" />
        </motion.div>
      </motion.div>

      {/* Right side - Employer with checkmark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
            <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, duration: 0.3 }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <CheckCircle className="w-5 h-5 text-white" fill="currentColor" />
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
            x: Math.cos((i * 45 * Math.PI) / 180) * 100,
            y: Math.sin((i * 45 * Math.PI) / 180) * 100,
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
            backgroundColor: i % 2 === 0 ? '#ec4899' : '#a855f7',
            left: '50%',
            top: '50%'
          }}
        />
      ))}
    </div>
  );

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
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10"
          >
            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
              {steps.map((s, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'w-12 sm:w-16 bg-pink-500'
                      : index < currentStep
                      ? 'w-8 bg-pink-300'
                      : 'w-8 bg-gray-200'
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl sm:text-2xl font-light">{step.number}</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
                {step.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
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
                <a href="/questions" className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep ? 'bg-pink-500 w-6' : 'bg-gray-300'
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