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
          title: "School Fire Drill #13 - Real School Evacuation",
          duration: "5:23",
          views: "3.2M",
          rating: 4.9,
          thumbnail: "https://img.youtube.com/vi/O1uEpFw0pFk/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/O1uEpFw0pFk",
          description: "Real high school fire drill showing proper evacuation procedures, alarm systems, and student response protocols."
        },
        {
          id: "2",
          title: "Fire Drills at School - Firefighter Training",
          duration: "4:45",
          views: "112K",
          rating: 4.8,
          thumbnail: "https://img.youtube.com/vi/UbBT7ZLg2Bk/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/UbBT7ZLg2Bk",
          description: "Professional firefighter demonstrates proper fire drill procedures specifically for school environments."
        },
        {
          id: "3",
          title: "Fire Mock Drill Training - Complete Procedure",
          duration: "8:30",
          views: "45K",
          rating: 4.7,
          thumbnail: "https://img.youtube.com/vi/atwOKIaBX84/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/atwOKIaBX84",
          description: "Comprehensive fire evacuation drill training video showing complete emergency response procedures."
        }
      ]
    },
    {
      title: "🌍 Earthquake Safety Drills",
      videos: [
        {
          id: "4",
          title: "Drop, Cover, and Hold On - Official Training",
          duration: "4:12",
          views: "150K",
          rating: 4.9,
          thumbnail: "https://img.youtube.com/vi/aV89_yUJunM/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/aV89_yUJunM",
          description: "Official earthquake safety demonstration showing proper Drop, Cover, and Hold On procedures for classrooms."
        },
        {
          id: "5",
          title: "Earthquake Safety for Kids - School Training",
          duration: "3:45",
          views: "89K",
          rating: 4.8,
          thumbnail: "https://img.youtube.com/vi/YWTsoSU1BMg/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/YWTsoSU1BMg",
          description: "Educational video teaching children the three essential steps for earthquake safety in school settings."
        },
        {
          id: "6",
          title: "Drop, Cover, Hold On - Real Classroom Demo",
          duration: "6:15",
          views: "21K",
          rating: 4.6,
          thumbnail: "https://img.youtube.com/vi/wnACXbcdkDA/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/wnACXbcdkDA",
          description: "Real classroom demonstration of earthquake response procedures with students and teachers."
        }
      ]
    },
    {
      title: "🏥 First Aid & CPR Training",
      videos: [
        {
          id: "7",
          title: "CPR in Schools Training Kit Demo",
          duration: "12:15",
          views: "1.6K",
          rating: 4.8,
          thumbnail: "https://img.youtube.com/vi/-DK99mmo4NM/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/-DK99mmo4NM",
          description: "Professional demonstration of CPR training specifically designed for school environments and staff."
        },
        {
          id: "8",
          title: "Red Cross CPR Basics for Schools",
          duration: "8:30",
          views: "34K",
          rating: 4.7,
          thumbnail: "https://img.youtube.com/vi/_zJQUUj2Oo8/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/_zJQUUj2Oo8",
          description: "American Red Cross CPR training basics designed for school staff and older students."
        },
        {
          id: "9",
          title: "How to Perform CPR - Step by Step Guide",
          duration: "10:45",
          views: "2.1M",
          rating: 4.9,
          thumbnail: "https://img.youtube.com/vi/Plse2FOkV4Q/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/Plse2FOkV4Q",
          description: "Detailed step-by-step CPR demonstration for emergency situations in educational settings."
        }
      ]
    },
    {
      title: "🔒 Lockdown & Security Procedures",
      videos: [
        {
          id: "10",
          title: "Inside Look: School Lockdown Drills",
          duration: "9:45",
          views: "125K",
          rating: 4.7,
          thumbnail: "https://img.youtube.com/vi/DH_qQ4MtxTY/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/DH_qQ4MtxTY",
          description: "School resource officers demonstrate proper lockdown procedures and safety protocols."
        },
        {
          id: "11",
          title: "Real World Lockdown Drill Training",
          duration: "7:20",
          views: "3.7K",
          rating: 4.5,
          thumbnail: "https://img.youtube.com/vi/kPvNYkNSNt0/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/kPvNYkNSNt0",
          description: "Real lockdown drill showing classroom security measures and student response procedures."
        },
        {
          id: "12",
          title: "School Emergency Safety Procedures",
          duration: "11:20",
          views: "18K",
          rating: 4.6,
          thumbnail: "https://img.youtube.com/vi/Qu2KjEb79rs/maxresdefault.jpg",
          embedUrl: "https://www.youtube.com/embed/Qu2KjEb79rs",
          description: "Comprehensive guide to handling various school emergency situations including lockdowns and evacuations."
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