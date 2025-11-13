'use client';

import React from 'react';
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
import CaregiverProfile from '@/components/Landing/caregiver-profiles';

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
      <section id="matching" className="pb-160 lg:pb-8 pt-16 md:pt-24 lg:pt-32 px-4 md:px-8 max-w-screen mx-auto">
        <MatchingComponent />
      </section>
      {/* <section id="profiles" className="min-h-screen pt-4 pb-16 lg:pb-32 px-4 md:px-8"> 
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6 text-center">Caregiver Profiles</h2>
          <p className="text-gray-500 text-xs lg:text-sm  max-w-2xl mx-auto text-center">
            Build a caregiver profile to get matched with the right opportunities. Carry your experiences and certifications with you wherever you go, to show your potential employers.
          </p>
          <CaregiverProfile />
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="pt-96 py-12 md:py-20 lg:py-24 px-4 md:px-8 bg-gradient-to-b from-pink-150 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Card className="border-2 border-pink-100 bg-white max-w-4xl mx-auto">
              <CardContent className="p-6 md:p-12">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 md:mb-6">
                  Our Mission
                </h3>
                <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
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