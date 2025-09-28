import { Shield, BookOpen, MessageCircle, Zap, Play, Trophy, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Emergency Alerts",
      description: "Instant notifications for all emergency situations with location-based alerts and real-time updates.",
      action: () => navigate("/contact"),
      buttonText: "Request Demo"
    },
    {
      icon: BookOpen,
      title: "Preparedness Guide",
      description: "Comprehensive safety protocols and emergency procedures for all types of disasters and situations.",
      action: () => navigate("/training"),
      buttonText: "View Guides"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot",
      description: "24/7 intelligent assistance for emergency queries, safety tips, and instant guidance during crisis.",
      action: () => navigate("/contact"),
      buttonText: "Try Chatbot"
    },
    {
      icon: Zap,
      title: "SOS Button",
      description: "One-tap emergency alert system that instantly notifies authorities and emergency contacts with your location.",
      action: () => navigate("/sos"),
      buttonText: "Access SOS"
    },
    {
      icon: Play,
      title: "Training Videos",
      description: "Interactive video library covering fire drills, earthquake safety, first aid, and emergency response.",
      action: () => navigate("/training"),
      buttonText: "Watch Videos"
    },
    {
      icon: Trophy,
      title: "Quiz Zone",
      description: "Test your emergency preparedness knowledge with interactive quizzes and earn safety certificates.",
      action: () => navigate("/quiz"),
      buttonText: "Take Quiz"
    },
  ];

  const handleRequestDemo = () => {
    toast({
      title: "Demo Requested!",
      description: "Our team will contact you within 24 hours to schedule a personalized demo.",
    });
    navigate("/contact");
  };

  const handleViewIntegration = () => {
    toast({
      title: "Integration Guide",
      description: "Downloading comprehensive integration documentation...",
    });
    // Simulate file download
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Integration guide has been downloaded to your device.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            🛡️ Platform Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive disaster preparedness and emergency response system designed specifically for educational institutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <Button 
                  onClick={feature.action}
                  className="w-full"
                  variant="default"
                >
                  {feature.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-card rounded-lg border p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Platform Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Schools Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">99.9%</div>
              <div className="text-muted-foreground">Alert Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">5sec</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of educational institutions that trust our platform for emergency preparedness and student safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleRequestDemo}
              size="lg"
              className="px-8"
            >
              Request Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={handleViewIntegration}
              variant="outline"
              size="lg"
              className="px-8"
            >
              View Integration Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;