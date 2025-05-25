
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';

const MockInterview = () => {
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const questions = [
    "Tell me about yourself and your background in software development.",
    "Describe a challenging project you've worked on and how you overcame obstacles.",
    "How do you stay updated with the latest technology trends?",
    "Explain a time when you had to work with a difficult team member.",
    "What are your career goals for the next 5 years?"
  ];

  const startInterview = () => {
    setIsInterviewActive(true);
    setCurrentQuestion(0);
    setUserAnswer('');
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setUserAnswer('');
    } else {
      setIsInterviewActive(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI Mock Interview 🎯
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Practice with our AI interviewer and get real-time feedback
          </p>
        </div>

        {!isInterviewActive ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Setup Section */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    Interview Setup
                  </CardTitle>
                  <CardDescription>
                    Configure your mock interview session
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Interview Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="h-16 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                        <div className="text-center">
                          <div className="text-2xl mb-1">💼</div>
                          <div className="text-sm font-semibold">Behavioral</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-16">
                        <div className="text-center">
                          <div className="text-2xl mb-1">💻</div>
                          <div className="text-sm font-semibold">Technical</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm">Entry</Button>
                      <Button variant="outline" size="sm" className="bg-blue-50 dark:bg-blue-900/20">Mid</Button>
                      <Button variant="outline" size="sm">Senior</Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Role Focus</label>
                    <select className="w-full p-2 border rounded-lg bg-background">
                      <option>Software Engineer</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Full Stack Developer</option>
                      <option>Product Manager</option>
                    </select>
                  </div>
                  
                  <Button 
                    onClick={startInterview}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12"
                  >
                    <span className="mr-2">🚀</span>
                    Start Interview
                  </Button>
                </CardContent>
              </Card>

              {/* Previous Sessions */}
              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Previous Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { date: '2 days ago', type: 'Behavioral', score: 85, duration: '25 min' },
                      { date: '1 week ago', type: 'Technical', score: 78, duration: '35 min' },
                      { date: '2 weeks ago', type: 'Behavioral', score: 92, duration: '22 min' }
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <div>
                          <div className="font-semibold">{session.type} Interview</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{session.date} • {session.duration}</div>
                        </div>
                        <Badge className={session.score >= 85 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'}>
                          {session.score}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Interviewer Preview */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-6xl text-white">
                    🤖
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Meet Alex - Your AI Interviewer</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Alex is trained on thousands of real interviews and will provide personalized feedback
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">Real-time Analysis</div>
                      <div className="text-gray-600 dark:text-gray-400">Speech & Content</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">Instant Feedback</div>
                      <div className="text-gray-600 dark:text-gray-400">Actionable Tips</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    Interview Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span>Maintain eye contact with the camera</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span>Use the STAR method for behavioral questions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span>Speak clearly and at a moderate pace</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span>Prepare specific examples from your experience</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Interview Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">🤖</span>
                      Alex - AI Interviewer
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Question {currentQuestion + 1} of {questions.length}
                    </Badge>
                  </div>
                  <Progress value={(currentQuestion + 1) / questions.length * 100} className="h-2" />
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl text-white">
                        🤖
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold mb-2">Alex asks:</div>
                        <div className="text-lg">{questions[currentQuestion]}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-medium">Your Answer:</label>
                    <Textarea
                      placeholder="Type your answer here or click the microphone to speak..."
                      className="min-h-[120px]"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    
                    <div className="flex gap-4">
                      <Button 
                        onClick={nextQuestion}
                        className="bg-green-600 hover:bg-green-700"
                        disabled={!userAnswer.trim()}
                      >
                        {currentQuestion === questions.length - 1 ? 'Finish Interview' : 'Next Question'}
                      </Button>
                      <Button variant="outline">
                        🎤 Record Answer
                      </Button>
                      <Button variant="outline" onClick={() => setIsInterviewActive(false)}>
                        End Interview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Real-time Feedback */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Real-time Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Confidence</span>
                      <span className="text-sm font-bold text-green-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Clarity</span>
                      <span className="text-sm font-bold text-blue-600">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Tone</span>
                      <span className="text-sm font-bold text-purple-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium mb-2">Live Tips:</div>
                    <div className="text-sm text-blue-600">
                      💡 Great use of specific examples! Try to maintain more eye contact.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⏱️</span>
                    Session Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration</span>
                    <span className="font-semibold">12:34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Words per minute</span>
                    <span className="font-semibold">145</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Filler words</span>
                    <span className="font-semibold text-yellow-600">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Eye contact</span>
                    <span className="font-semibold text-green-600">Good</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MockInterview;
