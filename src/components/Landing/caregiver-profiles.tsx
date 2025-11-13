'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Briefcase, Award } from 'lucide-react';

export const CaregiverProfile = () => {
    const [currentProfile, setCurrentProfile] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  
    const profiles = [
      {
        name: "Mary Johnson",
        role: "Certified Caregiver",
        image: "https://i.pravatar.cc/150?img=47",
        backgroundCheck: true,
        stateCertified: true,
        bio: "Compassionate caregiver with 8 years of experience providing dignified, personalized care. Specialized in memory care and mobility assistance. My approach centers on building trust and maintaining independence.",
        experience: [
          { company: "Sunrise Senior Living", role: "Senior Caregiver", duration: "2020 - Present" },
          { company: "Comfort Keepers", role: "Caregiver", duration: "2018 - 2020" },
          { company: "Home Instead", role: "Care Specialist", duration: "2016 - 2018" }
        ]
      },
      {
        name: "David Garcia",
        role: "Memory Care Specialist",
        image: "https://i.pravatar.cc/150?img=12",
        backgroundCheck: true,
        stateCertified: true,
        bio: "After caring for my grandmother through her journey with Alzheimer's, I discovered my true calling. Though new to professional caregiving, my personal experience has given me deep empathy and patience. Currently completing my CNA certification and eager to make a difference in families' lives.",
        experience: []
      },
      {
        name: "Jennifer Williams",
        role: "Healthcare Professional",
        image: "https://i.pravatar.cc/150?img=45",
        backgroundCheck: true,
        stateCertified: true,
        bio: "Former RN transitioning to personalized home care. I believe every person deserves one-on-one attention and care that honors their dignity. Expertise in post-surgical care, diabetes management, and dementia support.",
        experience: [
          { company: "Golden Years Care", role: "Lead Caregiver", duration: "2021 - Present" },
          { company: "Visiting Angels", role: "Personal Care Assistant", duration: "2019 - 2021" },
          { company: "Right at Home", role: "Companion Caregiver", duration: "2017 - 2019" }
        ]
      }
    ];
  
    useEffect(() => {
      const loadTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(loadTimer);
    }, [currentProfile]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsLoading(true);
        setTimeout(() => {
          setCurrentProfile((prev) => (prev + 1) % profiles.length);
        }, 2000);
      }, 7000); // 2s loading + 5s display
  
      return () => clearInterval(interval);
    }, []);
  
    const profile = profiles[currentProfile];
  
    return (
      <div className="relative flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 space-y-6"
              >
                {/* Header Skeleton */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl animate-pulse flex-shrink-0" />
                  <div className="flex-1 space-y-3 w-full">
                    <div className="h-6 sm:h-7 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg w-full sm:w-48 animate-pulse" />
                    <div className="h-4 sm:h-5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg w-32 sm:w-36 animate-pulse" />
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3">
                      <div className="h-8 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full w-full sm:w-40 animate-pulse" />
                      <div className="h-8 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full w-full sm:w-36 animate-pulse" />
                    </div>
                  </div>
                </div>
  
                {/* Bio Skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded w-full animate-pulse" />
                  <div className="h-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded w-5/6 animate-pulse" />
                  <div className="h-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded w-4/6 animate-pulse" />
                </div>
  
                {/* Experience Skeleton */}
                <div className="space-y-4">
                  <div className="h-6 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg w-32 animate-pulse" />
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl animate-pulse flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-5 bg-gradient-to-r from-pink-100 to-purple-100 rounded w-full sm:w-48 animate-pulse" />
                        <div className="h-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded w-3/4 sm:w-32 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`profile-${currentProfile}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-lg"
                    />
                  </motion.div>
                  <div className="flex-1 w-full min-w-0">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl sm:text-2xl font-light text-gray-900 truncate"
                    >
                      {profile.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-gray-600 mt-1 text-sm sm:text-base"
                    >
                      {profile.role}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3"
                    >
                      {profile.backgroundCheck && (
                        <div className="flex items-center gap-1.5 bg-white border border-pink-200 text-gray-900 px-3 py-1.5 rounded-full text-xs sm:text-sm font-light shadow-md">
                          <Check size={14} className="sm:w-4 sm:h-4 flex-shrink-0 text-pink-500" />
                          <span className="whitespace-nowrap text-pink-500">Background Check</span>
                        </div>
                      )}
                      {profile.stateCertified && (
                        <div className="flex items-center gap-1.5 bg-white border border-pink-200 text-gray-900 px-3 py-1.5 rounded-full text-xs sm:text-sm font-light shadow-md">
                          <Check size={14} className="sm:w-4 sm:h-4 flex-shrink-0 text-pink-500" />
                          <span className="whitespace-nowrap text-pink-500">State Certified</span>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
  
                {/* Bio */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-xl sm:rounded-2xl"
                >
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{profile.bio}</p>
                </motion.div>
  
                {/* Experience */}
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 mb-4"
                  >
                    <Briefcase className="text-pink-500 flex-shrink-0" size={18} />
                    <h3 className="text-base sm:text-lg font-light text-gray-900">
                      {profile.experience.length > 0 ? "Career History" : "Career Path"}
                    </h3>
                  </motion.div>
                  
                  {profile.experience.length > 0 ? (
                    <div className="space-y-4">
                      {profile.experience.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex gap-3 sm:gap-4 group"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                            <Award className="text-pink-600" size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-light text-gray-900 text-sm sm:text-base truncate">{exp.role}</h4>
                            <p className="text-gray-600 text-xs sm:text-sm truncate">{exp.company}</p>
                            <p className="text-gray-500 text-xs mt-1">{exp.duration}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
                    >
                      <Award className="text-pink-500 mx-auto mb-3" size={28} />
                      <p className="text-gray-700 font-medium text-sm sm:text-base">New to Professional Caregiving</p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2">
                        Bringing personal experience and genuine passion to the field
                      </p>
                    </motion.div>
                  )}
                </div>
  
                {/* Progress Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center gap-2 pt-4"
                >
                  {profiles.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentProfile
                          ? 'w-8 bg-pink-500'
                          : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  export default CaregiverProfile;