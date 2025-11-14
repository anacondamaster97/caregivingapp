'use client';

import React from 'react';
import { CheckCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface CaregiverCard {
  name: string;
  image: string;
  match: number;
  matchColor: string;
  rate: string;
  tags: { text: string; color: string }[];
  description: string;
}

export default function MatchingComponent() {
  const NUM_ARROWS = 32;
  const [isProfileExpanded, setIsProfileExpanded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const generateArrows = (count: number) => {
    const arrows = [];
    const baseSpacing = 650 / count;
    
    for (let i = 0; i < count; i++) {
      arrows.push({
        id: i,
        topOffset: 80 + (i * baseSpacing),
        duration: 2.5 + (i % 3) * 0.4,
        curveType: i % 3,
        delay: i * 0.15,
      });
    }
    return arrows;
  };

  const arrows = generateArrows(NUM_ARROWS);

  const renderArrow = (arrow: any) => {
    const { id, topOffset, duration, curveType, delay } = arrow;
    
    // Hide arrows on mobile for cleaner experience
    if (isMobile) return null;
    
    let path = '';
    let arrowTip = '';
    let width = 120;
    let height = 20;
    
    if (curveType === 0) {
      path = 'M 10 40 Q 65 15, 110 30';
      arrowTip = 'M 110 30 L 100 26 M 110 30 L 103 36';
      height = 50;
    } else if (curveType === 1) {
      path = 'M 10 30 L 110 30';
      arrowTip = 'M 110 30 L 98 25 M 110 30 L 98 35';
      height = 40;
    } else {
      path = 'M 10 20 Q 65 50, 110 30';
      arrowTip = 'M 110 30 L 100 34 M 110 30 L 103 24';
      height = 60;
    }

    return (
      <svg
        key={id}
        className="absolute pointer-events-none"
        style={{
          left: '-130px',
          top: `${topOffset}px`,
          width: `${width}px`,
          height: `${height}px`,
          marginLeft: '54px',
        }}
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <linearGradient id={`shimmer-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" className="text-primary/0">
              <animate
                attributeName="stop-opacity"
                values="0;0.3;0"
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </stop>
            <stop offset="50%" stopColor="currentColor" className="text-primary">
              <animate
                attributeName="stop-opacity"
                values="0.4;1;0.4"
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </stop>
            <stop offset="100%" stopColor="currentColor" className="text-primary/0">
              <animate
                attributeName="stop-opacity"
                values="0;0.3;0"
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </stop>
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1.5 0"
              to="1.5 0"
              dur={`${duration}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
          </linearGradient>
        </defs>
        <path
          d={path}
          fill="none"
          stroke={`url(#shimmer-${id})`}
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d={arrowTip}
          fill="none"
          stroke={`url(#shimmer-${id})`}
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    );
  };

  const InfoCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary via-chart-3 to-primary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-secondary/40 to-accent/40 rounded-xl p-3 transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </div>
    </div>
  );

  const CaregiverCard = ({ 
    name, 
    image, 
    match, 
    rate, 
    tags, 
    description,
    matchColor
  }: CaregiverCard) => {
    return (
      <div className="group rounded-2xl p-4 lg:p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden mb-4 lg:mb-12 bg-card lg:ml-12">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-accent/0 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex flex-col lg:flex-row items-start gap-4 lg:gap-2">
          {/* Mobile: Image and Match Score in Header */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-chart-3 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              <img
                src={image}
                alt={name}
                className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover ring-2 ring-card transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Mobile Match Score */}
            <div className="lg:hidden text-right">
              <div className={`text-2xl font-light ${matchColor} mb-1 flex items-center gap-1.5`}>
                {match}%
              </div>
              <div className="text-muted-foreground text-xs">match</div>
            </div>
          </div>
          
          <div className="flex-1 w-full min-w-0">
            <div className="flex flex-col lg:flex-row items-start justify-between mb-3 gap-3 lg:gap-0">
              <div className="flex flex-col gap-2 w-full lg:w-auto">
                <h3 className="text-lg lg:text-xl font-light text-card-foreground transition-colors duration-300 group-hover:text-primary">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: any, i: number) => (
                    <span 
                      key={i}
                      className={`px-2.5 py-1 ${tag.color} rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Desktop Match Score */}
              <div className="hidden lg:block text-right">
                <div className={`text-xl font-light ${matchColor} mb-1 flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-110 justify-end`}>
                  {match}% match
                </div>
                <div className="text-card-foreground text-base font-light">{rate}</div>
                <div className="text-muted-foreground text-xs flex items-center gap-1 pt-1 justify-end">
                  Background Check
                  <CheckCircle className="w-3.5 h-3.5 text-chart-2" />
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-3 lg:mb-0">
              {description}
            </p>
            
            {/* Mobile Rate & Background Check */}
            <div className="lg:hidden flex items-center justify-between pt-3 border-t border-border">
              <div className="text-card-foreground text-lg font-medium">{rate}</div>
              <div className="text-muted-foreground text-xs flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-chart-2" />
                Background Check
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const caregivers = [
    {
      name: "Sunrise Memory Care Center",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=150&fit=crop",
      match: 95,
      matchColor: "text-green-500",
      rate: "$32-38/hr",
      tags: [
        { text: 'Memory Care Specialist', color: 'bg-chart-4 text-black ' },
        { text: 'Full Benefits', color: 'bg-chart-3 text-black ' },
        { text: 'Career Growth', color: 'bg-chart-2 text-black ' },
      ],
      description: "Perfect match for your memory care expertise! This facility offers specialized dementia training, competitive pay, and excellent benefits. Located near the Blue Line station."
    },
    {
      name: "ComfortCare Home Services",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=150&h=150&fit=crop",
      match: 88,
      matchColor: "text-green-500",
      rate: "$30-35/hr",
      tags: [
        { text: 'Flexible Schedule', color: 'bg-chart-5/20 text-chart-5' },
        { text: 'Bilingual Bonus', color: 'bg-primary/20 text-primary' },
        { text: 'Home Care', color: 'bg-accent/40 text-accent-foreground' },
      ],
      description: "A growing home care agency seeking bilingual CNAs. Offers flexible hours, mileage reimbursement, and pays premium rates for Spanish-speaking caregivers."
    },
    {
      name: "Golden Years Assisted Living",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop",
      match: 72,
      matchColor: "text-yellow-500",
      rate: "$28-32/hr",
      tags: [
        { text: 'Team Environment', color: 'bg-chart-1/20 text-chart-1' },
        { text: 'PTO & Benefits', color: 'bg-secondary/60 text-secondary-foreground' },
      ],
      description: "Well-established assisted living community with a strong team culture. Offers health benefits, paid time off, and opportunities to work with diverse residents."
    }
  ];

  return (
    <div className="bg-gradient-to-br max-h-screen max-w-6xl relative items-center justify-center mx-auto">
      <div className="relative px-4 lg:px-0">
        <h2 className="text-3xl lg:text-5xl font-light text-foreground bg-clip-text text-center mb-4 lg:mb-8">
          Job Opportunity Matching
        </h2>
        <p className="text-muted-foreground text-xs lg:text-sm text-center max-w-2xl mx-auto px-4">
          We match you with the right opportunities based on your experience, skills, and preferences. Our advanced AI analyzes your profile and connects you with employers looking for caregivers like you.
        </p>
      </div>
      
      <div className="max-w-[2000px] mx-auto px-4 lg:px-8 py-12 lg:py-32">
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-12">
          
          {/* Left Panel - Mobile Collapsible / Desktop Sticky */}
          <div className={`lg:space-y-4 ${isMobile ? 'mb-6' : 'lg:sticky lg:top-8 lg:self-start'}`}>
            {/* Mobile: Collapsible Header */}
            {isMobile && (
              <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-lg border border-border overflow-hidden">
                <button
                  onClick={() => setIsProfileExpanded(!isProfileExpanded)}
                  className="w-full p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-semibold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
                        Your Profile
                      </h3>
                      <p className="text-xs text-muted-foreground">Sarah Martinez • 5 years exp</p>
                    </div>
                  </div>
                  {isProfileExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                
                {/* Expanded Content */}
                {isProfileExpanded && (
                  <div className="px-4 pb-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gradient-to-br from-secondary/40 to-accent/40 rounded-lg p-2.5">
                        <p className="text-muted-foreground text-[10px] uppercase tracking-wide">Desired Pay</p>
                        <p className="text-card-foreground text-xs font-medium">$30–$40/hr</p>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/40 to-accent/40 rounded-lg p-2.5">
                        <p className="text-muted-foreground text-[10px] uppercase tracking-wide">Availability</p>
                        <p className="text-card-foreground text-xs font-medium">Full-time</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <h4 className="text-primary font-semibold text-[10px] mb-1.5">Skills</h4>
                        <div className="space-y-1">
                          <div className="bg-primary/10 rounded-md p-1.5 text-primary text-[10px]">Memory Care</div>
                          <div className="bg-primary/10 rounded-md p-1.5 text-primary text-[10px]">CNA Certified</div>
                          <div className="bg-primary/10 rounded-md p-1.5 text-primary text-[10px]">Bilingual</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-muted-foreground font-semibold text-[10px] mb-1.5">Preferences</h4>
                        <div className="space-y-1">
                          <div className="bg-muted rounded-md p-1.5 text-foreground text-[10px]">Near transit</div>
                          <div className="bg-muted rounded-md p-1.5 text-foreground text-[10px]">Benefits</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-chart-5/20 to-chart-1/20 rounded-lg p-2.5 border border-chart-5/30">
                      <p className="text-chart-5 text-[10px] font-semibold mb-1">Looking For</p>
                      <p className="text-foreground text-[10px]">Long-term position with growth opportunities</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Desktop: Full Profile */}
            <div className="hidden lg:block space-y-4">
              <div className="mt-6">
                <h2 className="text-2xl font-light bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
                  Your Profile
                </h2>
              </div>

              <InfoCard>
                <p className="text-card-foreground text-sm">
                  <span className="text-muted-foreground text-xs uppercase tracking-wide">Name</span>
                  <br />
                  <span className="font-light text-sm">Sarah Martinez</span>
                </p>
              </InfoCard>

              <InfoCard>
                <p className="text-card-foreground text-sm">
                  <span className="text-muted-foreground text-xs uppercase tracking-wide">Desired Pay</span>
                  <br />
                  <span className="font-light text-sm">$30–$40/hr</span>
                </p>
              </InfoCard>

              <InfoCard>
                <p className="text-card-foreground text-sm">
                  <span className="text-muted-foreground text-xs uppercase tracking-wide">Availability</span>
                  <br />
                  <span className="font-light text-sm">Full-time, flexible shifts</span>
                </p>
              </InfoCard>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <h3 className="text-primary font-semibold text-xs mb-2">Skills & Certs</h3>
                  <div className="space-y-2">
                    <div className="bg-primary/10 rounded-lg p-2 flex items-start gap-2">
                      <span className="text-primary text-sm leading-none">::</span>
                      <span className="text-primary font-medium text-xs">CNA Certified</span>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-2 flex items-start gap-2">
                      <span className="text-primary text-sm leading-none">::</span>
                      <span className="text-primary font-medium text-xs">
                        5 years memory care experience
                      </span>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-2 flex items-start gap-2">
                      <span className="text-primary text-sm leading-none">::</span>
                      <span className="text-primary font-medium text-xs">
                        Bilingual (English/Spanish)
                      </span>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-2 flex items-start gap-2">
                      <span className="text-primary text-sm leading-none">::</span>
                      <span className="text-primary font-medium text-xs">CPR/First Aid</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-muted-foreground font-semibold text-xs mb-2">Preferences</h3>
                  <div className="space-y-2">
                    <div className="bg-muted rounded-lg p-2 flex items-start gap-2">
                      <span className="text-muted-foreground text-sm leading-none">::</span>
                      <span className="text-foreground font-medium text-xs">Near public transit</span>
                    </div>
                    <div className="bg-muted rounded-lg p-2 flex items-start gap-2">
                      <span className="text-muted-foreground text-sm leading-none">::</span>
                      <span className="text-foreground font-medium text-xs">Benefits package</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 px-4 py-3 bg-gradient-to-br from-chart-5/20 to-chart-1/20 rounded-xl border border-chart-5/30">
                <h3 className="text-card-foreground font-semibold text-xs mb-2 flex items-center gap-2">
                  <span className="text-chart-5">⭐</span>
                  Looking For
                </h3>
                <p className="text-foreground text-xs leading-relaxed">
                  Long-term position with opportunities for career growth and advancement
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Caregiver Cards */}
          <div className="relative">
            {/* Animated arrows for desktop */}
            {!isMobile && arrows.map(arrow => renderArrow(arrow))}
            
            {/* Mobile: Section Header */}
            {isMobile && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">Your Opportunities</h3>
                <p className="text-xs text-muted-foreground mt-1">Ranked by match score</p>
              </div>
            )}
            
            {caregivers.map((caregiver, index) => (
              <CaregiverCard
                key={index}
                {...caregiver}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}