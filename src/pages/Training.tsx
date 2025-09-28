import { useState } from "react";
import { Play, Clock, Users, Star, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Training = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const videoCategories = [
    {
      title: "🔥 Fire Safety & Evacuation",
      videos: [
        {
          id: "1",
          title: "School Fire Drill Procedure",
          duration: "5:23",
          views: "3.2M",
          rating: 4.9,
          thumbnail: "https://img.youtube.com/vi/dYBNAr_9m8E/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/dYBNAr_9m8E",
          description: "Complete fire evacuation procedure for schools including alarm recognition and evacuation routes."
        },
        {
          id: "2",
          title: "Fire Extinguisher Training",
          duration: "7:45",
          views: "1.8M",
          rating: 4.8,
          thumbnail: "https://img.youtube.com/vi/7CApUCCJhj8/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/7CApUCCJhj8",
          description: "Professional firefighter demonstrates proper use of fire extinguishers in school environments."
        }
      ]
    },
    {
      title: "🌍 Earthquake Safety",
      videos: [
        {
          id: "3",
          title: "Drop, Cover, and Hold On",
          duration: "4:12",
          views: "2.1M",
          rating: 4.9,
          thumbnail: "https://img.youtube.com/vi/B0Z7gN2rJkE/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/B0Z7gN2rJkE",
          description: "Official earthquake safety procedure demonstration for students and teachers."
        },
        {
          id: "4",
          title: "Tokyo School Earthquake Drill",
          duration: "6:38",
          views: "4.1M",
          rating: 4.7,
          thumbnail: "https://img.youtube.com/vi/BLEPtibtKu0/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/BLEPtibtKu0",
          description: "Real classroom footage of earthquake drill procedures in Japanese schools."
        }
      ]
    },
    {
      title: "🏥 First Aid & Medical Emergencies",
      videos: [
        {
          id: "5",
          title: "CPR Training for Schools",
          duration: "12:15",
          views: "856K",
          rating: 4.8,
          thumbnail: "https://img.youtube.com/vi/6HrHKgz8949/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/6HrHKgz8949",
          description: "Comprehensive CPR training specifically designed for school staff and older students."
        },
        {
          id: "6",
          title: "School Emergency First Aid",
          duration: "8:30",
          views: "650K",
          rating: 4.6,
          thumbnail: "https://img.youtube.com/vi/C_b_132gOjc/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/C_b_132gOjc",
          description: "Essential first aid skills every teacher should know for common school emergencies."
        }
      ]
    },
    {
      title: "⚠️ Emergency Procedures",
      videos: [
        {
          id: "7",
          title: "School Lockdown Procedures",
          duration: "9:45",
          views: "1.2M",
          rating: 4.7,
          thumbnail: "https://img.youtube.com/vi/4NHJ2YIAB_4/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/4NHJ2YIAB_4",
          description: "Professional training on lockdown procedures and classroom security measures."
        },
        {
          id: "8",
          title: "Emergency Communication Systems",
          duration: "11:20",
          views: "890K",
          rating: 4.5,
          thumbnail: "https://img.youtube.com/vi/rOqGAP6_bME/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/rOqGAP6_bME",
          description: "How schools use emergency communication systems during crisis situations."
        }
      ]
    }
  ];

  const openVideo = (video: any) => {
    setSelectedVideo(video);
    toast({
      title: "Loading Video",
      description: `Playing: ${video.title}`,
    });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleProgressTracking = () => {
    toast({
      title: "Progress Saved",
      description: "Your training progress has been updated.",
    });
    navigate("/profile");
  };

  const handleCertification = () => {
    toast({
      title: "Certification Available",
      description: "Complete all videos to earn your safety certificate.",
    });
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            📚 Training Videos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive emergency preparedness training with real drill footage and expert guidance
          </p>
        </div>

        {/* Video Categories */}
        {videoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.videos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          onClick={() => openVideo(video)}
                          size="lg"
                          className="rounded-full w-16 h-16"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black bg-opacity-70">
                        {video.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-3">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {video.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {video.rating}
                        </div>
                      </div>
                      <Button
                        onClick={() => openVideo(video)}
                        variant="outline"
                        size="sm"
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Track Your Progress</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleProgressTracking}
              size="lg"
              className="px-8"
            >
              View Training Progress
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={handleCertification}
              variant="outline"
              size="lg"
              className="px-8"
            >
              Get Certified
            </Button>
          </div>
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={closeVideo}>
          <DialogContent className="max-w-4xl w-full h-[80vh]">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle>{selectedVideo?.title}</DialogTitle>
                <Button
                  onClick={closeVideo}
                  variant="ghost"
                  size="sm"
                  className="p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 min-h-0">
              {selectedVideo && (
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Training;