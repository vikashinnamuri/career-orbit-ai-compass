
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const ResumeTailoring = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI Resume Tailoring 📝
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Upload your resume and job description to get AI-powered optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Resume Upload */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📄</span>
                  Upload Resume
                </CardTitle>
                <CardDescription>
                  Upload your current resume (PDF, DOC, DOCX)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <div className="text-4xl mb-4">📁</div>
                  <div className="text-lg font-semibold mb-2">Drop your resume here</div>
                  <div className="text-gray-500 mb-4">or click to browse files</div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Choose File
                  </Button>
                </div>
                
                {/* Current Resume Display */}
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <div className="font-semibold">Vikash_Resume_SDE.pdf</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">2.3 MB • Uploaded 2 min ago</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Active
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Job Description
                </CardTitle>
                <CardDescription>
                  Paste the complete job description for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here...

Example:
Software Engineer - Full Stack
Google Inc.

We are looking for a talented Software Engineer to join our team. You will be responsible for:
- Developing scalable web applications using React, Node.js
- Working with cloud platforms (AWS, GCP)
- Collaborating with cross-functional teams
- Writing clean, maintainable code

Requirements:
- 3+ years of experience with JavaScript, Python
- Experience with React, Node.js, MongoDB
- Knowledge of system design principles
- Bachelor's degree in Computer Science

Preferred:
- Experience with microservices architecture
- Knowledge of Docker, Kubernetes
- Previous startup experience"
                  className="min-h-[300px] resize-none"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                
                <div className="mt-4 flex gap-4">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1"
                  >
                    {isAnalyzing ? (
                      <>
                        <span className="animate-spin mr-2">⚡</span>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">🤖</span>
                        Analyze & Tailor
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    Save Job
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {/* Analysis Results */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Match Analysis
                  </span>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    73% Match
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">8/12</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Keywords Found</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">5</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Skills to Add</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Missing Keywords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['microservices', 'docker', 'kubernetes', 'aws', 'system design'].map((keyword) => (
                        <Badge key={keyword} variant="destructive">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Matched Keywords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['javascript', 'react', 'node.js', 'python', 'mongodb', 'full-stack', 'web development', 'agile'].map((keyword) => (
                        <Badge key={keyword} className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generated Output */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  AI Generated Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="resume" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="resume">Tailored Resume</TabsTrigger>
                    <TabsTrigger value="cover">Cover Letter</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="resume" className="mt-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-[400px] overflow-y-auto">
                      <div className="space-y-4 text-sm">
                        <div>
                          <h3 className="font-bold text-lg">VIKASH KUMAR</h3>
                          <p className="text-gray-600 dark:text-gray-300">Full-Stack Software Engineer</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-600">PROFESSIONAL SUMMARY</h4>
                          <p className="mt-1">
                            Results-driven Full-Stack Software Engineer with 3+ years of experience developing 
                            scalable web applications using <strong>React, Node.js, and Python</strong>. 
                            Proven expertise in <strong>cloud platforms (AWS, GCP)</strong> and 
                            <strong>microservices architecture</strong>. Passionate about writing clean, 
                            maintainable code and collaborating with cross-functional teams.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-600">TECHNICAL SKILLS</h4>
                          <ul className="mt-1 space-y-1">
                            <li><strong>Languages:</strong> JavaScript, Python, TypeScript, Java</li>
                            <li><strong>Frontend:</strong> React, Vue.js, HTML5, CSS3, Tailwind CSS</li>
                            <li><strong>Backend:</strong> Node.js, Express.js, Django, RESTful APIs</li>
                            <li><strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Redis</li>
                            <li><strong>Cloud & DevOps:</strong> AWS, GCP, Docker, Kubernetes, CI/CD</li>
                            <li><strong>Tools:</strong> Git, Jira, Agile methodologies, System Design</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <span className="mr-2">💾</span>
                        Save Changes
                      </Button>
                      <Button variant="outline">
                        <span className="mr-2">📥</span>
                        Download PDF
                      </Button>
                      <Button variant="outline">
                        <span className="mr-2">✏️</span>
                        Edit
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="cover" className="mt-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-[400px] overflow-y-auto">
                      <div className="space-y-4 text-sm">
                        <div>
                          <p><strong>Dear Hiring Manager,</strong></p>
                        </div>
                        
                        <div className="space-y-3">
                          <p>
                            I am writing to express my strong interest in the Software Engineer - Full Stack 
                            position at Google Inc. With over 3 years of experience developing scalable web 
                            applications using React and Node.js, I am excited about the opportunity to 
                            contribute to your innovative team.
                          </p>
                          
                          <p>
                            In my current role, I have successfully built and deployed microservices architecture 
                            solutions using Docker and Kubernetes on AWS and GCP platforms. My experience with 
                            JavaScript, Python, and MongoDB aligns perfectly with your requirements, and I have 
                            consistently delivered clean, maintainable code while collaborating effectively with 
                            cross-functional teams.
                          </p>
                          
                          <p>
                            I am particularly drawn to Google's commitment to technological innovation and would 
                            welcome the opportunity to bring my expertise in system design principles and startup 
                            experience to your team. I am confident that my technical skills and passion for 
                            building scalable solutions would make me a valuable addition to your organization.
                          </p>
                          
                          <p>
                            Thank you for considering my application. I look forward to discussing how my 
                            background and enthusiasm can contribute to Google's continued success.
                          </p>
                          
                          <p><strong>Sincerely,<br />Vikash Kumar</strong></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <span className="mr-2">💾</span>
                        Save Letter
                      </Button>
                      <Button variant="outline">
                        <span className="mr-2">📥</span>
                        Download
                      </Button>
                      <Button variant="outline">
                        <span className="mr-2">✏️</span>
                        Edit
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumeTailoring;
