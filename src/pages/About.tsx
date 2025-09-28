import { Users, Award, Code, Target, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Aditi Sharma",
      role: "Team Lead & Full Stack Developer",
      expertise: "React, Node.js, Emergency Systems",
      image: "👩‍💻"
    },
    {
      name: "Rahul Patel",
      role: "Backend Developer & Security Specialist",
      expertise: "Database Design, API Security, Real-time Systems",
      image: "👨‍💻"
    },
    {
      name: "Priya Singh",
      role: "Frontend Developer & UX Designer",
      expertise: "React, UI/UX, Accessibility Design",
      image: "👩‍🎨"
    },
    {
      name: "Arjun Kumar",
      role: "Mobile App Developer & IoT Specialist",
      expertise: "React Native, IoT Sensors, Emergency Alerts",
      image: "👨‍🔧"
    },
    {
      name: "Sneha Reddy",
      role: "AI/ML Developer & Data Analyst",
      expertise: "Machine Learning, Chatbots, Predictive Analytics",
      image: "👩‍🔬"
    },
    {
      name: "Vikram Joshi",
      role: "DevOps Engineer & Infrastructure",
      expertise: "Cloud Architecture, CI/CD, System Monitoring",
      image: "👨‍⚙️"
    }
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "API" },
    { name: "MongoDB", category: "Database" },
    { name: "Socket.io", category: "Real-time" },
    { name: "PWA", category: "Mobile" },
    { name: "AI/ML", category: "Intelligence" },
    { name: "Cloud Services", category: "Infrastructure" }
  ];

  const achievements = [
    {
      icon: Award,
      title: "SIH 2025 Finalist",
      description: "Selected among top 100 teams nationwide"
    },
    {
      icon: Shield,
      title: "Safety Innovation Award",
      description: "Recognized for emergency response innovation"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Clean, scalable, and secure codebase"
    },
    {
      icon: Target,
      title: "User-Centric Design",
      description: "Designed specifically for educational institutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            🏆 About Elite Innovators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team of students and developers committed to making schools safer through innovative technology
          </p>
          <Badge className="mt-4 text-lg px-4 py-2">
            SIH 2025 Team
          </Badge>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To revolutionize disaster preparedness in educational institutions by leveraging cutting-edge technology, 
              real-time communication systems, and intelligent automation to ensure every student and staff member 
              can respond effectively to emergencies and stay safe.
            </p>
          </CardContent>
        </Card>

        {/* Team Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{member.image}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Technology Stack</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <achievement.icon className="h-8 w-8 text-primary mx-auto" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hackathon Info */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">🚀 Built for Smart India Hackathon 2025</h2>
            <p className="text-lg mb-6">
              This disaster preparedness platform was developed as part of SIH 2025, focusing on 
              creating innovative solutions for educational institution safety and emergency response.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">72</div>
                <div className="text-sm opacity-90">Hours of Development</div>
              </div>
              <div>
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm opacity-90">Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Lines of Code</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Want to Connect?</h2>
          <p className="text-muted-foreground mb-6">
            We're always open to collaboration, feedback, and new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/contact")}
              size="lg"
              className="px-8"
            >
              Get in Touch
            </Button>
            <Button 
              onClick={() => navigate("/features")}
              variant="outline"
              size="lg"
              className="px-8"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;