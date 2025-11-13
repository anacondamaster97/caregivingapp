import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneCallAnimation: React.FC = () => {
  const [callStage, setCallStage] = useState<'ringing' | 'connected' | 'conversation'>('ringing');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Full conversation for desktop
  const conversationDesktop = [
    { speaker: 'ai' as const, text: "Hello! I'm here to help you find the perfect caregiving opportunity. To start, could you tell me about your experience and what kind of work you're looking for?" },
    { speaker: 'user' as const, text: "I have 5 years of experience in memory care and I'm certified in dementia care. I'm looking for full-time positions with benefits, preferably at a facility near downtown." },
    { speaker: 'ai' as const, text: "That's excellent experience! I can match you with senior living facilities and agencies that need memory care specialists. Let me search for full-time positions with benefits in your area." },
    { speaker: 'user' as const, text: "That sounds great. What kind of opportunities are available?" },
    { speaker: 'ai' as const, text: "I'm finding several memory care positions at assisted living facilities with competitive pay, full benefits, and opportunities for career advancement. I'll have your personalized matches ready in just a moment." },
  ];

  // Shorter conversation for mobile
  const conversationMobile = [
    { speaker: 'ai' as const, text: "Hi! Tell me about your caregiving experience." },
    { speaker: 'user' as const, text: "I have 5 years in memory care and I'm looking for full-time work with benefits." },
    { speaker: 'ai' as const, text: "Perfect! I'll find positions that match your experience." },
  ];

  const conversation = isMobile ? conversationMobile : conversationDesktop;

  

  // Typewriter effect
  useEffect(() => {
    if (callStage === 'conversation' && isTyping) {
      const targetText = conversation[currentMessageIndex].text;
      if (currentText.length < targetText.length) {
        const timer = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, 30);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait before next message
        const timer = setTimeout(() => {
          setIsTyping(false);
          setCurrentText('');
          const nextIndex = (currentMessageIndex + 1) % conversation.length;
          setCurrentMessageIndex(nextIndex);
          
          // If we've completed all messages, restart the whole sequence
          if (nextIndex === 0) {
            setCallStage('ringing');
          }
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, isTyping, callStage, currentMessageIndex]);

  useEffect(() => {
    // Ringing stage - 2 seconds
    if (callStage === 'ringing') {
      const ringingTimer = setTimeout(() => {
        setCallStage('connected');
      }, 2000);
      return () => clearTimeout(ringingTimer);
    }
  }, [callStage]);

  useEffect(() => {
    if (callStage === 'connected') {
      // Show connected briefly, then start conversation
      const connectedTimer = setTimeout(() => {
        setCallStage('conversation');
        setCurrentMessageIndex(0);
        setCurrentText('');
        setIsTyping(true);
      }, 1500);

      return () => clearTimeout(connectedTimer);
    }
  }, [callStage]);

  useEffect(() => {
    if (callStage === 'conversation' && !isTyping && currentText === '') {
      // Start typing next message
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [callStage, isTyping, currentText]);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[700px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                animate={callStage === 'ringing' ? { scale: [1, 1.1, 1] } : {}}
                transition={{ repeat: callStage === 'ringing' ? Infinity : 0, duration: 1 }}
              >
                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </motion.div>
              <div>
                <h2 className="text-xl font-semibold">Career Assistant</h2>
                <p className="text-sm text-pink-100">
                  {callStage === 'ringing' && 'Calling...'}
                  {callStage === 'connected' && 'Connected'}
                  {callStage === 'conversation' && 'On Call'}
                </p>
              </div>
            </div>
            {callStage === 'ringing' && (
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Call Stage Display */}
        <div className="p-8 min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {callStage === 'ringing' && (
              <motion.div
                key="ringing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center"
              >
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <motion.div
                    className="absolute inset-0 border-4 border-pink-300 rounded-full"
                    animate={{ scale: [1, 1.5, 1.8], opacity: [0.7, 0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 border-4 border-pink-300 rounded-full"
                    animate={{ scale: [1, 1.5, 1.8], opacity: [0.7, 0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                  />
                </motion.div>
                <p className="mt-8 text-2xl font-semibold text-gray-700">Incoming Call</p>
                <p className="mt-2 text-gray-500">Career Assistant is calling...</p>
              </motion.div>
            )}

            {callStage === 'connected' && (
              <motion.div
                key="connected"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex-1 flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <p className="mt-8 text-2xl font-semibold text-gray-700">Call Connected</p>
              </motion.div>
            )}

            {callStage === 'conversation' && (
              <motion.div
                key="conversation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center space-y-8"
              >
                {/* Status indicator */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {conversation[currentMessageIndex].speaker === 'ai' ? 'AI Speaking' : 'You Speaking'}
                  </p>
                </div>

                {/* Waveform Animation */}
                <div className="flex items-center justify-center space-x-2 h-32">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1 rounded-full ${
                        conversation[currentMessageIndex].speaker === 'ai'
                          ? 'bg-pink-500'
                          : 'bg-purple-500'
                      }`}
                      animate={isTyping ? {
                        height: [
                          Math.random() * 40 + 20,
                          Math.random() * 80 + 40,
                          Math.random() * 60 + 30,
                          Math.random() * 100 + 50,
                          Math.random() * 40 + 20,
                        ],
                      } : {
                        height: 20,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isTyping ? Infinity : 0,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>

                {/* Typewriter Text */}
                <div className="w-full max-w-xl px-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`rounded-2xl p-6 ${
                      conversation[currentMessageIndex].speaker === 'ai'
                        ? 'bg-pink-50 border-2 border-pink-200'
                        : 'bg-purple-50 border-2 border-purple-200'
                    }`}
                  >
                    <p className="text-base text-gray-800 leading-relaxed min-h-[60px]">
                      {currentText}
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block ml-1"
                        >
                          |
                        </motion.span>
                      )}
                    </p>
                  </motion.div>
                </div>

                {/* Speaker indicator */}
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    conversation[currentMessageIndex].speaker === 'ai'
                      ? 'bg-pink-100'
                      : 'bg-purple-100'
                  }`}>
                    <svg className={`w-5 h-5 ${
                      conversation[currentMessageIndex].speaker === 'ai'
                        ? 'text-pink-500'
                        : 'text-purple-500'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {conversation[currentMessageIndex].speaker === 'ai' ? 'Career Assistant' : 'You'}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {callStage === 'conversation' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 p-4 border-t border-gray-200"
          >
            <div className="flex items-center justify-center space-x-4">
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </button>
              <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PhoneCallAnimation;