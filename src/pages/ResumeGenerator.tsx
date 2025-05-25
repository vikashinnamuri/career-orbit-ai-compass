
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/Layout';

const ResumeGenerator = () => {
  const [selectedEntries, setSelectedEntries] = useState<number[]>([1, 2, 3]);

  const journalEntries = [
    {
      id: 1,
      date: '2024-01-20',
      content: 'Completed the React advanced patterns course. Built a custom hook for API data fetching with error handling and loading states.',
      tags: ['React', 'JavaScript', 'API Development'],
      selected: true
    },
    {
      id: 2,
      date: '2024-01-19',
      content: 'Worked on optimizing database queries for the e-commerce project. Reduced query time by 40% using proper indexing.',
      tags: ['SQL', 'MongoDB', 'Performance'],
      selected: true
    },
    {
      id: 3,
      date: '2024-01-18',
      content: 'Deep dive into system design concepts. Studied load balancing, caching strategies, and microservices architecture.',
      tags: ['System Design', 'Microservices'],
      selected: true
    },
    {
      id: 4,
      date: '2024-01-17',
      content: 'Implemented JWT authentication in Node.js application with bcrypt password hashing and role-based access control.',
      tags: ['Node.js', 'Security', 'Authentication'],
      selected: false
    },
    {
      id: 5,
      date: '2024-01-16',
      content: 'Built responsive UI components using Tailwind CSS and implemented dark mode toggle functionality.',
      tags: ['CSS', 'Tailwind', 'UI/UX'],
      selected: false
    }
  ];

  const generatedBullets = [
    {
      category: 'Frontend Development',
      bullets: [
        'Developed advanced React patterns including custom hooks for API data fetching with comprehensive error handling and loading states',
        'Built responsive UI components using modern CSS frameworks (Tailwind CSS) with dark mode implementation',
        'Implemented component optimization strategies resulting in improved application performance'
      ]
    },
    {
      category: 'Backend Development',
      bullets: [
        'Optimized database performance by 40% through strategic indexing and query optimization techniques in MongoDB',
        'Implemented secure JWT authentication system with bcrypt password hashing and role-based access control',
        'Designed RESTful APIs following industry best practices for scalability and maintainability'
      ]
    },
    {
      category: 'System Design & Architecture',
      bullets: [
        'Designed scalable system architectures incorporating load balancing and caching strategies',
        'Studied and applied microservices architecture patterns for distributed system development',
        'Implemented comprehensive system design solutions for high-traffic applications'
      ]
    }
  ];

  const toggleEntry = (entryId: number) => {
    setSelectedEntries(prev => 
      prev.includes(entryId) 
        ? prev.filter(id => id !== entryId)
        : [...prev, entryId]
    );
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Resume Generator ⚡
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Transform your journal entries into professional resume bullet points
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Journal Entries */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">📚</span>
                    Select Journal Entries
                  </span>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    {selectedEntries.length} selected
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Choose entries to include in your resume generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {journalEntries.map((entry) => (
                    <div key={entry.id} className={`p-4 rounded-lg border-2 transition-all duration-200 ${selectedEntries.includes(entry.id) ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedEntries.includes(entry.id)}
                          onCheckedChange={() => toggleEntry(entry.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-semibold text-sm text-gray-900 dark:text-white">
                              {entry.date}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                            {entry.content}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {entry.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1">
                    <span className="mr-2">🤖</span>
                    Generate Resume Bullets
                  </Button>
                  <Button variant="outline">
                    Select All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Generated Resume Bullets */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  AI-Generated Resume Bullets
                </CardTitle>
                <CardDescription>
                  Professional bullet points ready for your resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {generatedBullets.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-3">
                        {section.category}
                      </h3>
                      <div className="space-y-3">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <div key={bulletIndex} className="group relative p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200">
                            <div className="flex items-start gap-3">
                              <span className="text-blue-500 mt-1">•</span>
                              <div className="flex-1">
                                <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                                  {bullet}
                                </p>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  📋
                                </Button>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  ✏️
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {index < generatedBullets.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">
                      <span className="mr-2">📥</span>
                      Export to Resume
                    </Button>
                    <Button variant="outline">
                      <span className="mr-2">📋</span>
                      Copy All
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <span className="mr-2">📄</span>
                      Export as PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <span className="mr-2">📝</span>
                      Export as Word
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Enhancement Options */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  AI Enhancement Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox defaultChecked />
                    <span className="text-sm">Include quantifiable metrics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox defaultChecked />
                    <span className="text-sm">Use action-oriented language</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox defaultChecked />
                    <span className="text-sm">Optimize for ATS keywords</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox />
                    <span className="text-sm">Include soft skills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox />
                    <span className="text-sm">Technical depth focus</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  <span className="mr-2">🔄</span>
                  Regenerate with Options
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumeGenerator;
