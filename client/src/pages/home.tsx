import { useState } from 'react';
import { Dumbbell, Play, Book, Star, Users, Trophy, Bolt, Ungroup, Flame, CalendarDays, Slice, Rocket, GraduationCap, Medal, Drumstick, Sprout, Pill, Clock, Utensils, Calculator, Brain, Bed, ChartLine, Timer, ArrowRight, Mail, Inbox } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Dumbbell className="text-primary text-2xl" />
              <span className="text-xl font-bold gradient-text">Elite Bodybuilding</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('training')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-training"
              >
                Training
              </button>
              <button 
                onClick={() => scrollToSection('nutrition')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-nutrition"
              >
                Nutrition
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-programs"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('tips')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-tips"
              >
                Tips
              </button>
            </div>
            <button className="btn-gradient px-4 py-2 rounded-lg text-primary-foreground font-medium" data-testid="button-get-started">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                  Build The <span className="gradient-text">Ultimate</span> Physique
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Master advanced training protocols including DC (Doggcrapp) training, progressive overload, and cutting-edge bodybuilding techniques that deliver real results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gradient px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg" data-testid="button-start-training">
                  <Play className="w-5 h-5 mr-2" />
                  Start Training Now
                </button>
                <button className="btn-accent px-8 py-4 rounded-lg text-accent-foreground font-semibold text-lg" data-testid="button-learn-dc">
                  <Book className="w-5 h-5 mr-2" />
                  Learn DC Training
                </button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>50k+ Athletes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                alt="Professional bodybuilder training" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold">
                <Trophy className="w-5 h-5 mr-2 inline" />
                Pro Results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section id="training" className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-black">
              <span className="gradient-text">Advanced</span> Training Protocols
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the most effective training methodologies used by elite bodybuilders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DC Training Card */}
            <div className="bg-card border border-border rounded-xl p-8 card-hover">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Bolt className="text-primary text-2xl" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">DC Training</h3>
                  <p className="text-muted-foreground">
                    High-intensity Doggcrapp training protocol focusing on progressive overload, rest-pause sets, and extreme muscle stimulation.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Rest-Pause Sets</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Extreme Stretching</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Progressive Overload</span>
                  </div>
                </div>
                <button className="w-full btn-gradient py-3 rounded-lg text-primary-foreground font-semibold" data-testid="button-learn-dc-protocol">
                  Learn DC Protocol
                </button>
              </div>
            </div>

            {/* Volume Training Card */}
            <div className="bg-card border border-border rounded-xl p-8 card-hover">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Ungroup className="text-accent text-2xl" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Volume Training</h3>
                  <p className="text-muted-foreground">
                    High-volume approach with multiple sets and exercises to maximize muscle hypertrophy and development.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>High Set Count</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Multiple Angles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Time Under Tension</span>
                  </div>
                </div>
                <button className="w-full btn-accent py-3 rounded-lg text-accent-foreground font-semibold" data-testid="button-explore-volume">
                  Explore Volume Training
                </button>
              </div>
            </div>

            {/* Intensity Techniques Card */}
            <div className="bg-card border border-border rounded-xl p-8 card-hover md:col-span-2 lg:col-span-1">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <Flame className="text-destructive text-2xl" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Intensity Techniques</h3>
                  <p className="text-muted-foreground">
                    Advanced methods including drop sets, supersets, and forced reps to push beyond normal limits.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Drop Sets</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Supersets</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Forced Reps</span>
                  </div>
                </div>
                <button className="w-full bg-destructive hover:bg-destructive/90 py-3 rounded-lg text-destructive-foreground font-semibold transition-colors" data-testid="button-master-intensity">
                  Master Intensity
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Programs Section */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-black">
              Complete <span className="gradient-text">Workout Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured programs designed for every level and goal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CalendarDays className="text-primary w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold">12-Week Mass</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Structured DC training program for maximum muscle growth
                  </p>
                  <button className="w-full bg-secondary hover:bg-secondary/80 py-2 rounded-lg text-secondary-foreground font-medium transition-colors" data-testid="button-view-mass-program">
                    View Program
                  </button>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Slice className="text-accent w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold">Slice Protocol</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    High-intensity cutting program to maintain muscle while losing fat
                  </p>
                  <button className="w-full bg-secondary hover:bg-secondary/80 py-2 rounded-lg text-secondary-foreground font-medium transition-colors" data-testid="button-view-cut-program">
                    View Program
                  </button>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <Rocket className="text-destructive w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold">Strength Focus</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Power-building program combining strength and hypertrophy
                  </p>
                  <button className="w-full bg-secondary hover:bg-secondary/80 py-2 rounded-lg text-secondary-foreground font-medium transition-colors" data-testid="button-view-strength-program">
                    View Program
                  </button>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-ring/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-ring w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold">Beginner Guide</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Foundation program for new bodybuilders
                  </p>
                  <button className="w-full bg-secondary hover:bg-secondary/80 py-2 rounded-lg text-secondary-foreground font-medium transition-colors" data-testid="button-view-beginner-program">
                    View Program
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                alt="Person performing deadlift in gym" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-sm">
                <Medal className="w-4 h-4 mr-2 inline" />
                Proven Results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Healthy meal prep containers with chicken and vegetables" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-black">
                  Fuel Your <span className="gradient-text">Gains</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Precision nutrition protocols that support your training intensity and maximize recovery
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Drumstick className="text-primary w-4 h-4" />
                    </div>
                    <h3 className="font-bold">Protein Timing</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Optimal protein intake strategies for muscle protein synthesis
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Sprout className="text-accent w-4 h-4" />
                    </div>
                    <h3 className="font-bold">Carb Cycling</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Strategic carbohydrate manipulation for body composition
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <Pill className="text-destructive w-4 h-4" />
                    </div>
                    <h3 className="font-bold">Supplementation</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Evidence-based supplement protocols for enhanced performance
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ring/10 rounded-lg flex items-center justify-center">
                      <Clock className="text-ring w-4 h-4" />
                    </div>
                    <h3 className="font-bold">Meal Timing</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Pre and post-workout nutrition for maximum adaptation
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gradient px-6 py-3 rounded-lg text-primary-foreground font-semibold" data-testid="button-get-meal-plan">
                  <Utensils className="w-5 h-5 mr-2" />
                  Get Meal Plan
                </button>
                <button className="btn-accent px-6 py-3 rounded-lg text-accent-foreground font-semibold" data-testid="button-calculate-macros">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Macros
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Techniques Section */}
      <section id="tips" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-black">
              <span className="gradient-text">Pro Tips</span> & Techniques
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced strategies used by competitive bodybuilders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Brain className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Mind-Muscle Connection</h3>
              <p className="text-muted-foreground text-sm">
                Enhance muscle activation through focused concentration and visualization techniques
              </p>
              <button className="text-primary font-medium text-sm hover:underline" data-testid="button-learn-mind-muscle">
                Learn More <ArrowRight className="w-3 h-3 ml-1 inline" />
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4 card-hover">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Bed className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Recovery Protocols</h3>
              <p className="text-muted-foreground text-sm">
                Optimize sleep, stress management, and active recovery for maximum growth
              </p>
              <button className="text-accent font-medium text-sm hover:underline" data-testid="button-learn-recovery">
                Learn More <ArrowRight className="w-3 h-3 ml-1 inline" />
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4 card-hover">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <ChartLine className="text-destructive w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Progressive Overload</h3>
              <p className="text-muted-foreground text-sm">
                Master the art of gradually increasing training stimulus for continuous gains
              </p>
              <button className="text-destructive font-medium text-sm hover:underline" data-testid="button-learn-overload">
                Learn More <ArrowRight className="w-3 h-3 ml-1 inline" />
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4 card-hover">
              <div className="w-12 h-12 bg-ring/10 rounded-xl flex items-center justify-center">
                <Timer className="text-ring w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Periodization</h3>
              <p className="text-muted-foreground text-sm">
                Structure training phases for peak performance and avoid plateaus
              </p>
              <button className="text-ring font-medium text-sm hover:underline" data-testid="button-learn-periodization">
                Learn More <ArrowRight className="w-3 h-3 ml-1 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black">
              Ready to <span className="gradient-text">Transform</span> Your Physique?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of dedicated athletes who've achieved their dream physique with our proven protocols
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-gradient px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg" data-testid="button-start-journey">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Journey
            </button>
            <button className="border border-border px-8 py-4 rounded-lg text-foreground font-semibold text-lg hover:bg-muted transition-colors" data-testid="button-free-guide">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Guide
            </button>
          </div>

          <div className="flex justify-center items-center space-x-12 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50k+</div>
              <div className="text-sm">Athletes Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Dumbbell className="text-primary text-xl" />
                <span className="text-lg font-bold gradient-text">Elite Bodybuilding</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The ultimate destination for serious bodybuilders seeking elite-level training protocols and results.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold">Training</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><button className="hover:text-primary transition-colors" data-testid="footer-dc-training">DC Training</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-volume-training">Volume Training</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-intensity-techniques">Intensity Techniques</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-progressive-overload">Progressive Overload</button></div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold">Nutrition</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><button className="hover:text-primary transition-colors" data-testid="footer-meal-planning">Meal Planning</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-supplementation">Supplementation</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-macro-calculations">Macro Calculations</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-contest-prep">Contest Prep</button></div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold">Connect</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><button className="hover:text-primary transition-colors" data-testid="footer-instagram">Instagram</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-youtube">YouTube</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-discord">Discord</button></div>
                <div><button className="hover:text-primary transition-colors" data-testid="footer-newsletter">Newsletter</button></div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>© 2024 Elite Bodybuilding Academy. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <button className="hover:text-primary transition-colors" data-testid="footer-privacy">Privacy Policy</button>
              <button className="hover:text-primary transition-colors" data-testid="footer-terms">Terms of Service</button>
              <button className="hover:text-primary transition-colors" data-testid="footer-contact">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
