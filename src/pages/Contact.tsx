import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "team@eliteinnovators.edu",
      description: "Get in touch with our team"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210",
      description: "Emergency support hotline"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, Maharashtra",
      description: "SIH 2025 Development Center"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Average response time"
    }
  ];

  const faqItems = [
    {
      question: "How quickly can the system be deployed in our school?",
      answer: "Our platform can be deployed within 2-3 weeks, including staff training and system integration."
    },
    {
      question: "Is the system compatible with existing school infrastructure?",
      answer: "Yes, our platform is designed to integrate with most existing school management systems and infrastructure."
    },
    {
      question: "What kind of training is provided for staff?",
      answer: "We provide comprehensive training including video tutorials, live sessions, and ongoing support materials."
    },
    {
      question: "How secure is student and staff data?",
      answer: "We use enterprise-grade encryption and follow strict data privacy regulations to ensure complete security."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent Successfully! 📧",
      description: "Thank you for your inquiry. Our team will respond within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      inquiryType: "",
      message: ""
    });
  };

  const handleDemoRequest = () => {
    toast({
      title: "Demo Scheduled! 🎯",
      description: "We'll contact you within 24 hours to schedule a personalized demo.",
    });
    navigate("/features");
  };

  const handleChatbotTry = () => {
    toast({
      title: "AI Chatbot Activated! 🤖",
      description: "Our emergency response chatbot is now ready to assist you.",
    });
    // In a real implementation, this would open the chatbot interface
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            📞 Contact Elite Innovators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make your school safer? Get in touch with our team for demos, support, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@school.edu"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Organization/School
                      </label>
                      <Input
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        placeholder="School or organization name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Inquiry Type
                      </label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="integration">Technical Integration</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your requirements, questions, or how we can help make your school safer..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleDemoRequest}>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Schedule Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    See our platform in action with a personalized demo
                  </p>
                </CardContent>
              </Card>
              
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleChatbotTry}>
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Try AI Chatbot</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience our emergency response AI assistant
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-primary">{item.details}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="border-emergency">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emergency">
                  <Shield className="h-5 w-5" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For immediate emergency assistance or critical system issues:
                </p>
                <Button variant="destructive" className="w-full" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Hotline: 911
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <p className="font-medium text-sm mb-1">{item.question}</p>
                    <p className="text-xs text-muted-foreground">{item.answer}</p>
                    {index < faqItems.length - 1 && <hr className="mt-3" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Features */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate("/features")}
            variant="outline"
            size="lg"
            className="px-8"
          >
            Back to Features
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;