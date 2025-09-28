import { useState, useEffect } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      question: "What should you do first when you hear the fire alarm in school?",
      options: [
        "Pack your belongings quickly",
        "Stop what you're doing and listen for instructions",
        "Continue with your work",
        "Look out the window to see if there's a fire"
      ],
      correct: 1,
      explanation: "The first step is to stop immediately and listen for teacher instructions. This ensures everyone follows the proper evacuation procedure."
    },
    {
      question: "During an earthquake drill, what is the correct 'Drop, Cover, and Hold On' procedure?",
      options: [
        "Drop to the floor, cover your head, hold onto a desk",
        "Drop your books, cover your eyes, hold your breath",
        "Drop to your knees, cover under a table, hold on until shaking stops",
        "Drop everything, cover your ears, hold onto a friend"
      ],
      correct: 2,
      explanation: "Drop to your hands and knees, take cover under a sturdy desk or table, and hold on to your shelter while protecting your head and neck."
    },
    {
      question: "What information should you provide when calling emergency services?",
      options: [
        "Only your name",
        "Location, type of emergency, number of people involved",
        "Just the address",
        "Your age and grade level"
      ],
      correct: 1,
      explanation: "Always provide: your location, what type of emergency it is, how many people are involved, and any immediate dangers."
    },
    {
      question: "In a lockdown situation, what should students do?",
      options: [
        "Hide under desks and stay quiet",
        "Lock doors, turn off lights, move away from windows, stay quiet",
        "Exit the building immediately",
        "Call their parents"
      ],
      correct: 1,
      explanation: "During lockdown: secure the room (lock doors), turn off lights, move away from windows and doors, remain quiet until given all-clear by authorities."
    },
    {
      question: "How often should schools conduct fire drills?",
      options: [
        "Once a year",
        "Once a semester",
        "Monthly or as required by local regulations",
        "Only when there's an actual fire"
      ],
      correct: 2,
      explanation: "Most regulations require monthly fire drills to ensure students and staff are familiar with evacuation procedures."
    },
    {
      question: "What should you do if someone is having a medical emergency at school?",
      options: [
        "Try to help them yourself",
        "Get a teacher or nurse immediately and call for help",
        "Give them water",
        "Move them to a more comfortable location"
      ],
      correct: 1,
      explanation: "Never attempt medical treatment yourself. Get trained medical personnel (nurse) and trained staff immediately."
    },
    {
      question: "During severe weather warnings, students should:",
      options: [
        "Go outside to see the weather",
        "Move to designated safe areas away from windows",
        "Continue normal activities",
        "Go to the gymnasium"
      ],
      correct: 1,
      explanation: "Move to predetermined safe areas (usually interior rooms/hallways) away from windows and potential flying debris."
    },
    {
      question: "What is the universal sign for choking?",
      options: [
        "Pointing to your throat",
        "Hands clutching the throat",
        "Raising both hands",
        "Lying down on the floor"
      ],
      correct: 1,
      explanation: "The universal choking sign is hands clutching the throat. If you see this, get help immediately and alert trained personnel."
    },
    {
      question: "In case of a chemical spill in the science lab, you should:",
      options: [
        "Clean it up yourself",
        "Alert the teacher immediately and evacuate the area",
        "Pour water on it",
        "Ignore it if it's small"
      ],
      correct: 1,
      explanation: "Never handle chemical spills yourself. Alert the teacher immediately and follow their evacuation instructions."
    },
    {
      question: "What is the most important thing to remember during any emergency?",
      options: [
        "Stay calm and follow instructions",
        "Run as fast as possible",
        "Help everyone else first",
        "Take photos for social media"
      ],
      correct: 0,
      explanation: "Staying calm and following instructions from trained personnel is crucial for everyone's safety during emergencies."
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && !showResults && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && quizStarted) {
      handleSubmitQuiz();
    }
    return () => clearTimeout(timer);
  }, [timeRemaining, quizStarted, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeRemaining(300);
    toast({
      title: "Quiz Started!",
      description: "You have 5 minutes to complete 10 questions. Good luck!",
    });
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correct ? 1 : 0);
    }, 0);
    
    toast({
      title: "Quiz Completed!",
      description: `You scored ${score}/${questions.length}. ${score >= 8 ? '🎉 Excellent work!' : score >= 6 ? '👍 Good job!' : '📚 Consider reviewing the training materials.'}`,
      variant: score >= 6 ? "default" : "destructive",
    });
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeRemaining(300);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl">🧠 Emergency Preparedness Quiz</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• 10 multiple choice questions</p>
              <p>• 5 minutes time limit</p>
              <p>• Passing score: 6/10</p>
              <p>• Certificate available for 8+/10</p>
            </div>
            <Button onClick={startQuiz} size="lg" className="w-full">
              Start Quiz
            </Button>
            <Button 
              onClick={() => navigate("/training")}
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              Review Training Materials
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-3xl">Quiz Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-primary">
                {score}/{questions.length}
              </div>
              <div className="space-y-2">
                <p className="text-xl">
                  {score >= 8 ? "🎉 Excellent! You're well-prepared for emergencies!" :
                   score >= 6 ? "👍 Good job! You have solid emergency knowledge." :
                   "📚 Consider reviewing training materials for better preparedness."}
                </p>
                <Badge variant={score >= 8 ? "default" : score >= 6 ? "secondary" : "destructive"}>
                  {score >= 8 ? "Certificate Eligible" : score >= 6 ? "Passed" : "Needs Review"}
                </Badge>
              </div>
              
              {/* Answer Review */}
              <div className="text-left space-y-4">
                <h3 className="text-lg font-semibold text-center">Answer Review</h3>
                {questions.map((q, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-start gap-2">
                      {selectedAnswers[index] === q.correct ? 
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> :
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      }
                      <div className="flex-1">
                        <p className="font-medium text-sm">{q.question}</p>
                        <p className="text-xs text-green-600 mt-1">
                          ✓ {q.options[q.correct]}
                        </p>
                        {selectedAnswers[index] !== q.correct && (
                          <p className="text-xs text-red-600">
                            ✗ Your answer: {q.options[selectedAnswers[index]]}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={restartQuiz} variant="outline" className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={() => navigate("/training")} className="flex-1">
                  View Training Videos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Timer */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <div className="flex items-center gap-2 text-emergency">
              <Clock className="h-4 w-4" />
              <span className="font-mono font-semibold">
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => selectAnswer(index)}
                variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                className="w-full text-left justify-start h-auto p-4"
              >
                <span className="mr-3 font-semibold">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto mt-8 flex justify-between">
          <Button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            variant="outline"
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmitQuiz}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="px-8"
              >
                Submit Quiz
              </Button>
            ) : (
              <Button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;