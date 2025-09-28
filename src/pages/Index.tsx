import { useState, useEffect } from "react";
import { Shield, AlertTriangle, BookOpen, Play, Brain, Users, ChevronRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Emergency Alerts",
      description: "Instant notifications for all emergency situations",
      color: "text-emergency"
    },
    {
      icon: BookOpen,
      title: "Preparedness Guide",
      description: "Comprehensive safety protocols and procedures",
      color: "text-primary"
    },
    {
      icon: Play,
      title: "Training Videos",
      description: "Real drill footage and expert guidance",
      color: "text-success"
    },
    {
      icon: Brain,
      title: "AI Chatbot",
      description: "24/7 intelligent emergency assistance",
      color: "text-warning"
    },
    {
      icon: AlertTriangle,
      title: "SOS Button",
      description: "One-tap emergency alert system",
      color: "text-emergency"
    },
    {
      icon: Users,
      title: "Quiz Zone",
      description: "Interactive safety knowledge testing",
      color: "text-primary"
    }
  ];

  const stats = [
    { number: "500+", label: "Schools Protected", icon: "🏫" },
    { number: "99.9%", label: "Alert Reliability", icon: "⚡" },
    { number: "5sec", label: "Response Time", icon: "⏱️" },
    { number: "50K+", label: "Students Trained", icon: "🎓" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal, Delhi Public School",
      quote: "This platform has revolutionized our emergency preparedness. Students feel safer and more confident.",
      rating: 5
    },
    {
      name: "Raj Patel",
      role: "Safety Coordinator, Mumbai University",
      quote: "The training videos and real-time alerts have made our campus significantly safer.",
      rating: 5
    },
    {
      name: "Priya Singh",
      role: "Teacher, Chennai International School",
      quote: "Easy to use and incredibly comprehensive. Our students love the interactive features.",
      rating: 5
    }
  ];

  const handleExploreFeatures = () => {
    navigate("/features");
    toast({
      title: "Exploring Features! 🚀",
      description: "Discover all our safety and preparedness tools.",
    });
  };

  const handleTryDemo = () => {
    navigate("/register");
    toast({
      title: "Starting Demo! 🎯",
      description: "Create your account to experience the full platform.",
    });
  };

  const handleEmergencyAccess = () => {
    navigate("/sos");
    toast({
      title: "Emergency Access Activated! 🚨",
      description: "Accessing emergency tools immediately.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-6 text-lg px-4 py-2 bg-primary text-primary-foreground">
            🏆 Built for SIH 2025 by Elite Innovators
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Be Prepared, Stay Safe
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Smart Disaster Preparedness & Response System for Schools and Colleges
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleExploreFeatures}
              size="lg" 
              className="px-8 py-4 text-lg bg-primary hover:bg-primary-dark"
            >
              🔴 Explore Features
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleTryDemo}
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg"
            >
              🟡 Try Demo
            </Button>
          </div>

          {/* Emergency Access */}
          <div className="mb-16">
            <Button 
              onClick={handleEmergencyAccess}
              variant="destructive"
              size="lg"
              className="animate-pulse"
            >
              🚨 Emergency SOS Access
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Immediate access to emergency tools - no login required
            </p>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
            <div className="text-6xl mb-4">🏫🛡️</div>
            <p className="text-lg text-primary font-semibold">
              Smart Emergency Response System
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">🛡️ Platform Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive emergency preparedness tools designed specifically for educational institutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => navigate("/features")}>
              <CardHeader>
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 bg-card/50 rounded-lg mx-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">What Educators Say</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by educational institutions across the country
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Make Your School Safer?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of educational institutions that trust our platform for emergency preparedness and student safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => navigate("/register")}
              size="lg"
              className="px-8 py-4 text-lg"
            >
              Get Started Free
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg"
            >
              Request Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-success" />
              <span>Free training and support</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-success" />
              <span>24/7 emergency response</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-success" />
              <span>Easy integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-semibold text-primary">SafeSchool by Elite Innovators</span>
          </div>
          <div className="flex gap-6">
            <Button variant="ghost" size="sm" onClick={() => navigate("/about")}>About</Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/contact")}>Contact</Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/features")}>Features</Button>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-muted-foreground">
          © 2025 Elite Innovators. Built for Smart India Hackathon 2025.
        </div>
      </footer>
    </div>
  );
};

export default Index;