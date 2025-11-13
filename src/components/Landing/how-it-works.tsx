'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Briefcase, Award } from 'lucide-react';
import AnimationWork from './animation-work';

const HowItWorks = () => {
  

  return (
    <section id="how-it-works" className="py-18 md:py-24 lg:py-32 px-4 md:px-8 bg-gradient-to-b from-pink-200/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center justify-center">
          {/* Left side - Text content */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-3 md:mb-4 lg:mb-6">
                1. Share Your Profile
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Tell us about your experience, certifications, availability, and 
                what kind of work you&apos;re looking for via phone or chat. It&apos;s like talking to a supportive career advisor.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-3 md:mb-4 lg:mb-6">
                2. Get Matched
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our AI analyzes opportunities from care agencies, families, and senior living facilities 
                to find positions that match your skills, preferences, and schedule.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-3 md:mb-4 lg:mb-6">
                3. Connect & Apply
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Review job details, compare opportunities side-by-side, and connect
                directly with employers when you find the right fit.
              </p>
            </div>
          </div>

          {/* Right side - Animated Chat Interface */}
          <div className="relative top-8 lg:top-16 justify-center items-center w-[280px] lg:w-full mx-auto pb-16">
            {/* <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl border border-pink-100">
              <div 
                ref={chatContainerRef}
                className="space-y-4 md:space-y-6 overflow-hidden"
                style={{ minHeight: '400px' }}
              >
                {messages.map((message) => {
                  const isVisible = visibleMessages.includes(message.id);
                  if (!isVisible) return null;

                  if (message.type === 'ai') {
                    return (
                      <div 
                        key={message.id}
                        className="flex gap-2 md:gap-3 animate-in fade-in slide-in-from-left-5 duration-500"
                      >
                        <div className="shrink-0">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-pink-200 rounded-full justify-center items-center flex font-light text-gray-600">
                            <HeartHandshake className="w-4 h-4 text-pink-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-pink-50/80 rounded-2xl rounded-tl-sm p-3 md:p-4 lg:p-5">
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                              {message.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div 
                        key={message.id}
                        className="flex gap-2 md:gap-3 justify-end animate-in fade-in slide-in-from-right-5 duration-500"
                      >
                        <div className="flex-1 flex justify-end">
                          <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl rounded-tr-sm p-3 md:p-4 lg:p-5 max-w-md shadow-md">
                            <p className="text-white text-sm md:text-base leading-relaxed">
                              {message.text}
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <Users className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

                {isTyping && (
                  <div className="animate-in fade-in duration-300">
                    <TypingIndicator />
                  </div>
                )}
              </div>
            </div> */}
            {/* <PhoneCallAnimation /> */}
            <AnimationWork />
          </div>
        </div> 
      </div>
    </section>
  );
};

export default HowItWorks;