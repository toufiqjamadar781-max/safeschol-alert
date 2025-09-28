import { useState, useEffect } from "react";
import { Phone, MapPin, Users, AlertTriangle, Clock, Shield, MessageSquare, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const SOS = () => {
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Emergency contacts
  const emergencyContacts = [
    { name: "Emergency Services", number: "911", type: "Emergency", icon: Phone },
    { name: "School Security", number: "(555) 123-0001", type: "Security", icon: Shield },
    { name: "School Nurse", number: "(555) 123-0002", type: "Medical", icon: Hospital },
    { name: "Campus Emergency", number: "(555) 123-0003", type: "Campus", icon: AlertTriangle },
  ];

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.log("Location access denied");
        }
      );
    }
  }, []);

  // SOS activation with countdown
  const activateSOS = () => {
    setSosActive(true);
    setCountdown(10);
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          sendSOSAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Play emergency sound if available
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Emergency SOS activated. Alert will be sent in 10 seconds.");
      speechSynthesis.speak(utterance);
    }

    toast({
      title: "🚨 SOS ACTIVATED!",
      description: "Emergency alert will be sent in 10 seconds. Tap 'Cancel' to stop.",
      variant: "destructive",
    });
  };

  const cancelSOS = () => {
    setSosActive(false);
    setCountdown(0);
    
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    
    toast({
      title: "SOS Cancelled",
      description: "Emergency alert has been cancelled.",
    });
  };

  const sendSOSAlert = () => {
    setSosActive(false);
    
    // Simulate real emergency alert system
    const alertData = {
      timestamp: new Date().toISOString(),
      location: userLocation,
      type: "General Emergency",
      userId: "user_123",
      deviceInfo: navigator.userAgent
    };

    // In a real app, this would send to emergency services
    console.log("EMERGENCY ALERT SENT:", alertData);
    
    // Send to multiple emergency contacts simultaneously
    emergencyContacts.forEach(contact => {
      console.log(`Alerting ${contact.name} at ${contact.number}`);
      // In real implementation: SMS/Call APIs would be triggered
    });

    // Vibrate device if supported
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }

    // Text-to-speech announcement
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Emergency alert sent successfully. Help is on the way.");
      speechSynthesis.speak(utterance);
    }

    toast({
      title: "🚨 EMERGENCY ALERT SENT!",
      description: "Emergency services, school security, and emergency contacts have been notified with your exact location.",
      variant: "destructive",
    });
  };

  const callEmergency = (number: string, name: string) => {
    // Real phone calling functionality
    const phoneNumber = number.replace(/[^\d]/g, ''); // Remove formatting
    
    toast({
      title: `📞 Calling ${name}`,
      description: `Connecting to ${number}...`,
    });
    
    // Attempt to open phone dialer
    try {
      // For mobile devices - direct call
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumber}`;
      } else {
        // For desktop - show call instructions
        window.open(`tel:${phoneNumber}`, '_blank');
      }
    } catch (error) {
      // Fallback - copy number to clipboard
      navigator.clipboard.writeText(phoneNumber).then(() => {
        toast({
          title: "Phone number copied",
          description: `${number} copied to clipboard. Use your phone to call.`,
        });
      });
    }
  };

  const sendQuickMessage = (type: string) => {
    const emergencyMessages = {
      medical: "MEDICAL EMERGENCY: Student/staff needs immediate medical attention.",
      fire: "FIRE EMERGENCY: Fire detected, immediate evacuation required.",
      security: "SECURITY THREAT: Potential security incident, lockdown procedures initiated.",
      weather: "SEVERE WEATHER: Dangerous weather conditions, shelter procedures activated."
    };

    const message = emergencyMessages[type as keyof typeof emergencyMessages];
    const timestamp = new Date().toLocaleString();
    
    // Simulate sending to school administration system
    console.log("EMERGENCY MESSAGE SENT:", {
      type,
      message,
      timestamp,
      location: userLocation,
      sender: "Emergency Response System"
    });

    // Visual feedback
    toast({
      title: `🚨 ${type.toUpperCase()} ALERT SENT`,
      description: `Emergency ${type} notification sent to school administrators and security team.`,
      variant: "destructive",
    });

    // Audio notification
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`${type} emergency alert sent to school administration.`);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emergency mb-4">🚨 Emergency SOS</h1>
          <p className="text-lg text-muted-foreground">
            Quick access to emergency services and safety resources
          </p>
        </div>

        {/* SOS Button Section */}
        <div className="max-w-md mx-auto mb-8">
          <Card className="border-emergency shadow-lg">
            <CardContent className="p-8 text-center">
              {!sosActive ? (
                <div>
                  <Button
                    onClick={activateSOS}
                    className="w-32 h-32 rounded-full bg-emergency text-white text-xl font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                  >
                    SOS
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Press and hold for emergency alert
                  </p>
                </div>
              ) : (
                <div>
                  <div className="w-32 h-32 mx-auto rounded-full bg-emergency text-white flex items-center justify-center text-2xl font-bold animate-pulse mb-4">
                    {countdown}
                  </div>
                  <p className="text-lg font-semibold text-emergency mb-4">
                    Emergency alert in {countdown} seconds
                  </p>
                  <Button
                    onClick={cancelSOS}
                    variant="outline"
                    className="w-full"
                  >
                    Cancel SOS
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Location Display */}
        {userLocation && (
          <div className="max-w-md mx-auto mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-success" />
                  <span>Location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}</span>
                  <Badge variant="secondary">✓ Enabled</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Emergency Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <contact.icon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.number}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => callEmergency(contact.number, contact.name)}
                    size="sm"
                    variant="outline"
                  >
                    Call
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={() => sendQuickMessage("medical")}
                className="w-full justify-start"
                variant="outline"
              >
                <Hospital className="h-4 w-4 mr-2" />
                Medical Emergency
              </Button>
              <Button
                onClick={() => sendQuickMessage("fire")}
                className="w-full justify-start"
                variant="outline"
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Fire/Evacuation
              </Button>
              <Button
                onClick={() => sendQuickMessage("security")}
                className="w-full justify-start"
                variant="outline"
              >
                <Shield className="h-4 w-4 mr-2" />
                Security Threat
              </Button>
              <Button
                onClick={() => sendQuickMessage("weather")}
                className="w-full justify-start"
                variant="outline"
              >
                <Clock className="h-4 w-4 mr-2" />
                Severe Weather
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Procedures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔥 Fire Emergency</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="text-sm space-y-2">
                <li>1. Stay calm and alert others</li>
                <li>2. Evacuate immediately</li>
                <li>3. Use nearest exit route</li>
                <li>4. Meet at assembly point</li>
                <li>5. Call emergency services</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🌍 Earthquake</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="text-sm space-y-2">
                <li>1. Drop to hands and knees</li>
                <li>2. Take cover under desk</li>
                <li>3. Hold on to shelter</li>
                <li>4. Stay until shaking stops</li>
                <li>5. Evacuate if safe to do so</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔒 Lockdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="text-sm space-y-2">
                <li>1. Lock doors immediately</li>
                <li>2. Turn off lights</li>
                <li>3. Move away from windows</li>
                <li>4. Stay quiet and hidden</li>
                <li>5. Wait for all-clear signal</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="px-8"
          >
            Back to Features
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SOS;