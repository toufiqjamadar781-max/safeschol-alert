import { useState, useEffect } from "react";
import { User, Mail, Shield, Award, Clock, BookOpen, Trophy, Settings, Edit, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@school.edu",
    role: "student",
    joinDate: "2024-01-15",
    lastActive: "2024-09-28"
  });

  const [editForm, setEditForm] = useState({ ...user });

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(prev => ({
        ...prev,
        name: parsedUser.name,
        email: parsedUser.email,
        role: parsedUser.role
      }));
      setEditForm(prev => ({
        ...prev,
        name: parsedUser.name,
        email: parsedUser.email,
        role: parsedUser.role
      }));
    }
  }, []);

  const trainingProgress = [
    { title: "Fire Safety Training", completed: 4, total: 5, progress: 80 },
    { title: "Earthquake Preparedness", completed: 3, total: 4, progress: 75 },
    { title: "First Aid Basics", completed: 2, total: 6, progress: 33 },
    { title: "Emergency Procedures", completed: 5, total: 5, progress: 100 }
  ];

  const achievements = [
    { title: "Fire Safety Expert", icon: "🔥", earned: true, date: "2024-09-15" },
    { title: "Emergency Response", icon: "🚨", earned: true, date: "2024-09-10" },
    { title: "First Aid Certified", icon: "⚕️", earned: false, date: null },
    { title: "Safety Champion", icon: "🏆", earned: false, date: null },
    { title: "Quiz Master", icon: "🧠", earned: true, date: "2024-09-20" },
    { title: "Training Complete", icon: "📚", earned: false, date: null }
  ];

  const recentActivity = [
    { action: "Completed Fire Safety Quiz", date: "2024-09-28", score: "9/10" },
    { action: "Watched Earthquake Drill Video", date: "2024-09-27", score: null },
    { action: "Updated Emergency Contacts", date: "2024-09-25", score: null },
    { action: "Completed First Aid Module", date: "2024-09-20", score: "8/10" }
  ];

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setUser({ ...editForm });
    localStorage.setItem('user', JSON.stringify(editForm));
    setEditing(false);
    toast({
      title: "Profile Updated! ✅",
      description: "Your profile information has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setEditForm({ ...user });
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  const overallProgress = Math.round(
    trainingProgress.reduce((acc, item) => acc + item.progress, 0) / trainingProgress.length
  );

  const earnedAchievements = achievements.filter(a => a.earned).length;

  const getRoleIcon = (role: string) => {
    const roleIcons: Record<string, string> = {
      student: "🎓",
      teacher: "👨‍🏫",
      admin: "👩‍💼",
      security: "🛡️",
      nurse: "⚕️",
      parent: "👨‍👩‍👧‍👦"
    };
    return roleIcons[role] || "👤";
  };

  const getRoleLabel = (role: string) => {
    const roleLabels: Record<string, string> = {
      student: "Student",
      teacher: "Teacher",
      admin: "Administrator",
      security: "Security Staff",
      nurse: "School Nurse",
      parent: "Parent/Guardian"
    };
    return roleLabels[role] || role;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            👤 User Profile
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your account and track your emergency preparedness progress
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  {!editing ? (
                    <Button onClick={handleEdit} variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={handleSave} size="sm">
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button onClick={handleCancel} variant="outline" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">{getRoleIcon(user.role)}</div>
                  {editing ? (
                    <div className="space-y-3">
                      <Input
                        value={editForm.name}
                        onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Full Name"
                      />
                      <Input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Email Address"
                      />
                      <Select
                        value={editForm.role}
                        onValueChange={(value) => setEditForm(prev => ({ ...prev, role: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">🎓 Student</SelectItem>
                          <SelectItem value="teacher">👨‍🏫 Teacher</SelectItem>
                          <SelectItem value="admin">👩‍💼 Administrator</SelectItem>
                          <SelectItem value="security">🛡️ Security Staff</SelectItem>
                          <SelectItem value="nurse">⚕️ School Nurse</SelectItem>
                          <SelectItem value="parent">👨‍👩‍👧‍👦 Parent/Guardian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold">{user.name}</h3>
                      <p className="text-muted-foreground">{user.email}</p>
                      <Badge className="mt-2">
                        {getRoleIcon(user.role)} {getRoleLabel(user.role)}
                      </Badge>
                    </>
                  )}
                </div>
                
                {!editing && (
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Member Since:</span>
                      <span>{new Date(user.joinDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Last Active:</span>
                      <span>{new Date(user.lastActive).toLocaleDateString()}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={() => navigate("/sos")}
                  variant="destructive"
                  className="w-full"
                >
                  🚨 Emergency SOS
                </Button>
                <Button 
                  onClick={() => navigate("/training")}
                  variant="outline"
                  className="w-full"
                >
                  📚 Continue Training
                </Button>
                <Button 
                  onClick={() => navigate("/quiz")}
                  variant="outline"
                  className="w-full"
                >
                  🧠 Take Quiz
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full"
                >
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Progress and Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Training Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Training Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">{overallProgress}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-3" />
                </div>
                
                <div className="space-y-4">
                  {trainingProgress.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {item.completed}/{item.total} modules
                        </span>
                      </div>
                      <Progress value={item.progress} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Achievements ({earnedAchievements}/{achievements.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border text-center ${
                        achievement.earned 
                          ? 'bg-primary/10 border-primary/20' 
                          : 'bg-muted/50 border-muted opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                      {activity.score && (
                        <Badge variant="secondary">{activity.score}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;