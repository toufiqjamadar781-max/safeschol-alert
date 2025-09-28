import { useState } from "react";
import { Eye, EyeOff, LogIn, Mail, Lock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Please fill all fields",
        description: "Email and password are required to sign in.",
        variant: "destructive",
      });
      return;
    }

    // Simulate login success (in real app, this would verify credentials)
    toast({
      title: "Welcome Back! 🎉",
      description: "You have successfully signed in to your account.",
    });

    // Simulate successful login
    localStorage.setItem('user', JSON.stringify({
      name: "John Doe",
      email: formData.email,
      role: "student"
    }));

    navigate("/profile");
  };

  const handleForgotPassword = () => {
    if (!formData.email) {
      toast({
        title: "Enter your email",
        description: "Please enter your email address to reset your password.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Password Reset Email Sent 📧",
      description: "Check your email for password reset instructions.",
    });
  };

  const demoAccounts = [
    { role: "Student", email: "student@school.edu", icon: "🎓" },
    { role: "Teacher", email: "teacher@school.edu", icon: "👨‍🏫" },
    { role: "Admin", email: "admin@school.edu", icon: "👩‍💼" }
  ];

  const loginWithDemo = (email: string, role: string) => {
    setFormData(prev => ({
      ...prev,
      email: email,
      password: "demo123"
    }));

    toast({
      title: `Logged in as ${role} 🎯`,
      description: "Demo account credentials have been filled automatically.",
    });

    // Auto-submit after a short delay
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        name: `Demo ${role}`,
        email: email,
        role: role.toLowerCase()
      }));
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Main Login Card */}
        <Card>
          <CardHeader className="text-center">
            <LogIn className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl">🛡️ Welcome Back</CardTitle>
            <p className="text-muted-foreground">
              Sign in to your disaster preparedness account
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@school.edu"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange("rememberMe", checked)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-auto text-sm"
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </Button>
              </div>

              {/* Sign In Button */}
              <Button type="submit" className="w-full" size="lg">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={() => navigate("/register")}
                  >
                    Create one now
                  </Button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo Accounts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-center">🎯 Try Demo Accounts</CardTitle>
            <p className="text-sm text-muted-foreground text-center">
              Experience the platform with different user roles
            </p>
          </CardHeader>
          <CardContent className="space-y-2">
            {demoAccounts.map((account, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start"
                onClick={() => loginWithDemo(account.email, account.role)}
              >
                <span className="mr-3">{account.icon}</span>
                <div className="text-left">
                  <div className="font-medium">{account.role} Demo</div>
                  <div className="text-xs text-muted-foreground">{account.email}</div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Emergency Access */}
        <Card className="border-emergency">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Emergency Access - No login required
            </p>
            <Button
              onClick={() => navigate("/sos")}
              variant="destructive"
              className="w-full"
            >
              🚨 Emergency SOS Access
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;