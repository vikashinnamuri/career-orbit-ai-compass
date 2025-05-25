
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Dashboard = () => {
  const tasks = [
    { id: 1, title: 'Complete Python skill assessment', priority: 'high', completed: false },
    { id: 2, title: 'Update resume for SDE role', priority: 'medium', completed: false },
    { id: 3, title: 'Practice system design questions', priority: 'low', completed: true },
    { id: 4, title: 'Apply to 3 new positions', priority: 'high', completed: false },
  ];

  const skills = [
    { name: 'Python', progress: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', progress: 70, color: 'bg-yellow-500' },
    { name: 'React', progress: 75, color: 'bg-cyan-500' },
    { name: 'System Design', progress: 45, color: 'bg-purple-500' },
  ];

  const interviews = [
    { company: 'Google', date: 'Tomorrow, 2:00 PM', type: 'Technical Round' },
    { company: 'Microsoft', date: 'Friday, 10:00 AM', type: 'Behavioral Round' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hi Vikash 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Let's make today productive! You have 2 interviews coming up this week.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/resume-tailoring">
                    <Button className="w-full h-20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-1">📝</div>
                        <div className="font-semibold">Tailor Resume</div>
                      </div>
                    </Button>
                  </Link>
                  <Link to="/mock-interview">
                    <Button className="w-full h-20 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🎯</div>
                        <div className="font-semibold">Practice Interview</div>
                      </div>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Resume Health */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">💚</span>
                    Resume Health
                  </span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Excellent
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-sm font-bold text-green-600">92/100</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>ATS Compatibility</span>
                      <span className="font-semibold text-green-600">✓ 95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Keyword Match</span>
                      <span className="font-semibold text-green-600">✓ 88%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format Score</span>
                      <span className="font-semibold text-green-600">✓ 94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Content Quality</span>
                      <span className="font-semibold text-yellow-600">⚠ 89%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Tasks */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Today's Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className={`flex items-center justify-between p-3 rounded-lg border ${task.completed ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'}`}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={task.completed}
                          className="w-4 h-4 text-blue-600 rounded"
                          onChange={() => {}}
                        />
                        <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                          {task.title}
                        </span>
                      </div>
                      <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}>
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Interviews */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  Upcoming Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interviews.map((interview, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
                      <div className="font-semibold text-gray-900 dark:text-white">{interview.company}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{interview.date}</div>
                      <Badge className="mt-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {interview.type}
                      </Badge>
                    </div>
                  ))}
                  <Link to="/mock-interview">
                    <Button variant="outline" className="w-full mt-4">
                      Practice Now 🎯
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Skill Progress */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Skill Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-bold">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                  <Link to="/progress-journal">
                    <Button variant="outline" className="w-full mt-4">
                      Log Progress 📚
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Achievement */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">New Achievement!</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Interview Ace - Passed 5 mock interviews</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
