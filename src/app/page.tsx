'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavbarHome } from '@/components/navbar';
import {
  Home,
  Heart,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Building2,
  Stethoscope,
  Sparkles,
  MapPin,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

import { useRouter } from 'next/navigation';
import MatchingComponent from '@/components/Landing/matching-component';
import HowItWorks from '@/components/Landing/how-it-works';

export default function LandingPage() {
  // const [getStarted, setGetStarted] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <NavbarHome />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          >
            <source src="https://2dh2kb41vm.ufs.sh/f/PHuCMoRgZHamS6aCITjBiH4arXwnvG2kO8Jl67eymME9FQI1" type="video/mp4" />
          </video>
          {/* Overlay gradients for soft blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-pink-50/60 to-white/90"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-pink-50/40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-32 lg:pb-40 relative z-10">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-xs md:text-sm font-light mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered Career Matching
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Find Caregiving Jobs <br /> That Truly Fit You
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Connect with care agencies, families, and senior living facilities looking for talented caregivers like you. Let AI match you with the perfect opportunities.
            </p>

            <div className="flex flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/questions"
                className="flex flex-row bg-pink-500 hover:bg-pink-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-base md:text-lg font-light shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 shrink-0 mt-0.5 md:mt-1" />
              </a>
              {/* <Button
                variant="outline"
                className="px-8 py-6 rounded-full text-lg font-light border-2"
              >
                Watch Demo
              </Button> */}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-8 text-xs md:text-sm text-gray-500 px-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                Free for caregivers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                Vetted opportunities
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                Direct connections
              </div>
            </div>

            {/* Video Demo */}
            <div className="pt-8 md:pt-8 max-w-4xl mx-auto px-4">
              {/* <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-pink-100">
                <div className="relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Q4C3S8BFcvY"
                    title="HelpingHome Demo Video"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div> */}

              {/* Contact Information */}
              <div className="text-center">
                <p className="text-sm md:text-base text-gray-600 mb-3">
                  Questions about joining? Reach out to us:
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:nhwalk13@stanford.edu"
                    className="flex items-center justify-center gap-2 text-sm md:text-base text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    <span>nhwalk13@stanford.edu</span>
                  </a>
                  <a
                    href="tel:+14086410432"
                    className="flex items-center justify-center gap-2 text-sm md:text-base text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span>(408) 641-0432</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <section id="matching" className="pb-116 pt-12 md:py-24 lg:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <MatchingComponent />
      </section>
      {/* Care Agencies Section */}
      <section id="in-home-care" className="pb-16 pt-64 md:py-24 lg:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-200 text-pink-800 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Users className="w-4 h-4" />
              Care Agency Partnerships
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6">
              Work with leading care agencies
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Get matched with reputable home care agencies actively hiring caregivers. Find flexible 
              schedules, competitive pay, and meaningful work supporting seniors in their homes.
            </p>
          </div>

          {/* How we match you with the right opportunities */}
          <Card className="border-2 border-pink-200 bg-white mb-12 md:mb-16">
            <CardContent className="p-6 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8 text-center">
                How we match you with the right opportunities
              </h3>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <Shield className="w-8 h-8 text-pink-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Vetted Employers
                  </h4>
                  <p className="text-gray-600">
                    We only work with licensed, insured agencies that offer fair pay, benefits,
                    and support their caregivers with ongoing training and development.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <Stethoscope className="w-8 h-8 text-pink-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Skills-Based Matching
                  </h4>
                  <p className="text-gray-600">
                    Our AI matches you with positions based on your experience, certifications,
                    availability, preferred clientele, and location preferences.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <MapPin className="w-8 h-8 text-pink-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Local Opportunities
                  </h4>
                  <p className="text-gray-600">
                    Find work in your area with flexible schedules that fit your life. From part-time 
                    to full-time, find roles that match your availability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3 md:mb-4">
                  Personal Care Positions
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                  Work with clients who need assistance with activities of daily living. Use your skills 
                  in bathing, grooming, mobility support, and medication management to make a real 
                  difference in seniors' lives.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Bathing and grooming support roles</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Medication management positions</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Mobility assistance opportunities</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Specialized care roles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3 md:mb-4">
                  Companion Care Roles
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                  Perfect for caregivers who love building relationships and providing emotional support. 
                  Engage clients through conversation, activities, and daily assistance while making 
                  their days brighter.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Companionship-focused positions</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Meal prep and homemaking roles</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Light housekeeping opportunities</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Transportation assistance jobs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
      {/* Senior Living Facilities Section */}
      <section id="care-facilities" className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-200 text-pink-800 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Building2 className="w-4 h-4" />
              Senior Living Facilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6">
              Join senior living communities <br className="hidden sm:block" /> (Coming Soon)
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Find fulfilling careers at assisted living facilities, memory care centers, and 
              independent living communities. Stable employment with benefits and growth opportunities.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Assisted Living */}
            <Card className="border-2 border-pink-100 hover:border-pink-300 transition-all bg-white">
              <CardContent className="p-6 md:p-10 lg:p-12">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl md:rounded-3xl flex items-center justify-center">
                      <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 md:mb-4">
                      Assisted Living Careers
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                      Work at assisted living facilities where you'll help residents maintain their independence 
                      while providing essential support. These positions offer steady schedules, team collaboration, 
                      and the satisfaction of being part of a caring community. Enjoy comprehensive benefits, 
                      training programs, and opportunities to advance your career.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Stable schedules & shifts</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Health benefits & PTO</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Team-based environment</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Career advancement paths</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Memory Care */}
            <Card className="border-2 border-pink-100 hover:border-pink-300 transition-all bg-white">
              <CardContent className="p-6 md:p-10 lg:p-12">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl md:rounded-3xl flex items-center justify-center">
                      <Shield className="w-8 h-8 md:w-10 md:h-10 text-pink-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 md:mb-4">
                      Memory Care Specialists
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                      Specialize in caring for residents with Alzheimer&apos;s, dementia, and memory-related 
                      conditions. These rewarding positions offer specialized training, higher pay, and the 
                      deep satisfaction of providing compassionate care to those who need it most. Work in 
                      secure, well-staffed environments with structured programs and comprehensive support.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Specialized dementia training</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Premium pay rates</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Certification opportunities</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Supportive team structure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Independent Living */}
            <Card className="border-2 border-pink-100 hover:border-pink-300 transition-all bg-white">
              <CardContent className="p-6 md:p-10 lg:p-12">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl md:rounded-3xl flex items-center justify-center">
                      <Home className="w-8 h-8 md:w-10 md:h-10 text-pink-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 md:mb-4">
                      Independent Living Communities
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                      Work at independent living communities supporting active seniors who value their autonomy. 
                      These roles focus on hospitality, activity coordination, light assistance, and building 
                      relationships. Perfect for caregivers who enjoy a social, upbeat environment with less 
                      intensive care duties. Many positions include great amenities and a positive work culture.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Hospitality-focused roles</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Positive work environment</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Social & engaging work</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">Great amenities access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-8 bg-gradient-to-b from-pink-150 to-pink-100">
        <div className="max-w-6xl mx-auto">
          

          <div className="text-center">
            <Card className="border-2 border-pink-100 bg-white max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-light text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe caregivers deserve better opportunities and recognition for the incredible 
                  work they do. Our mission is to use cutting-edge AI technology to connect talented 
                  caregivers with the right employers—whether that's care agencies, families, or senior 
                  living facilities. Every caregiver deserves access to fair pay, fulfilling work, and 
                  opportunities that match their skills and preferences. We're here to empower your career.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-8 bg-gradient-to-br from-pink-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light text-gray-900 mb-6">
            Ready to advance your caregiving career?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Start a conversation with our AI assistant today. It's free, confidential,
            and there's absolutely no obligation. Find opportunities that value your skills.
          </p>
          <Button
            onClick={() => router.push('/questions')}
            className="bg-white text-pink-600 hover:bg-gray-50 px-18 py-7 rounded-full text-lg font-semibold shadow-2xl hover:shadow-xl transition-all"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-gray-600 mt-8 text-sm">
            Join thousands of caregivers who have found fulfilling opportunities
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-pink-50/50 border-t border-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">

            <span className="text-xl font-light text-gray-900">CareGiving</span>
          </div>
          <p className="text-gray-600 mb-6">
            Empowering caregivers to find fulfilling career opportunities with AI-powered matching
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-600 transition-colors">About</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Contact</a>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            © 2025 CareGiving Work. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}