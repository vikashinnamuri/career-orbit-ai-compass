
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';

const ProgressJournal = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB', 
    'AWS', 'Docker', 'System Design', 'Data Structures', 'Algorithms',
    'Machine Learning', 'API Development', 'Testing', 'DevOps'
  ];

  const recentEntries = [
    {
      id: 1,
      date: '2024-01-20',
      content: 'Completed the React advanced patterns course. Built a custom hook for API data fetching with error handling and loading states. Also practiced implementing the compound component pattern.',
      tags: ['React', 'JavaScript', 'API Development'],
      aiSuggestions: ['Developed advanced React patterns including custom hooks and compound components', 'Implemented robust API data fetching with error handling and loading states']
    },
    {
      id: 2,
      date: '2024-01-19',
      content: 'Worked on optimizing database queries for the e-commerce project. Reduced query time by 40% using proper indexing and query optimization techniques.',
      tags: ['SQL', 'MongoDB', 'Performance'],
      aiSuggestions: ['Optimized database performance by 40% through strategic indexing and query optimization', 'Enhanced e-commerce application database efficiency using advanced SQL techniques']
    },
    {
      id: 3,
      date: '2024-01-18',
      content: 'Deep dive into system design concepts. Studied load balancing, caching strategies, and microservices architecture. Designed a scalable chat application system.',
      tags: ['System Design', 'Microservices', 'Architecture'],
      aiSuggestions: ['Designed scalable chat application architecture using microservices and load balancing', 'Implemented comprehensive caching strategies for high-performance distributed systems']
    }
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSaveEntry = () => {
    // Here you would save the entry
    console.log('Saving entry:', { content: journalEntry, tags: selectedTags });
    setJournalEntry('');
    setSelectedTags([]);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Daily Progress Journal 📚
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Document your learning journey and let AI transform it into resume-worthy achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* New Entry Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✍️</span>
                  Today's Progress Entry
                </CardTitle>
                <CardDescription>
                  Write about what you learned, built, or achieved today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">What did you work on today?</label>
                  <Textarea
                    placeholder="Describe your learning activities, projects worked on, concepts studied, or problems solved...

Example:
Today I implemented a user authentication system using JWT tokens and bcrypt for password hashing. I learned about security best practices like password salting and token expiration. Also debugged a complex Redux state management issue in the shopping cart feature and optimized the component re-rendering performance."
                    className="min-h-[200px] resize-none"
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Skills & Technologies (Tags)</label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {availableTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                        className={`cursor-pointer transition-all duration-200 ${
                          selectedTags.includes(tag) 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Input 
                    placeholder="Add custom tag..." 
                    className="mt-2"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const value = (e.target as HTMLInputElement).value.trim();
                        if (value && !selectedTags.includes(value)) {
                          setSelectedTags([...selectedTags, value]);
                          (e.target as HTMLInputElement).value = '';
                        }
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Optional: Upload Screenshot/Code</label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="text-2xl mb-2">📸</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Drag & drop screenshots, code snippets, or project images
                    </div>
                    <Button variant="outline" className="mt-2">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={handleSaveEntry}
                    disabled={!journalEntry.trim()}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 flex-1"
                  >
                    <span className="mr-2">💾</span>
                    Save Entry
                  </Button>
                  <Button variant="outline">
                    <span className="mr-2">🤖</span>
                    Generate AI Bullets
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Entries */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📖</span>
                  Recent Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentEntries.map((entry) => (
                    <div key={entry.id} className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-900 dark:text-white">{entry.date}</div>
                        <Button variant="ghost" size="sm">
                          ✏️ Edit
                        </Button>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                        {entry.content}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {entry.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                        <div className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
                          🤖 AI-Generated Resume Bullets:
                        </div>
                        <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                          {entry.aiSuggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-blue-500">•</span>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Streak & Stats */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-orange-600 mb-1">7 Days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Current Streak</div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Total Entries</div>
                    <div className="text-gray-600 dark:text-gray-400">42</div>
                  </div>
                  <div>
                    <div className="font-semibold">This Month</div>
                    <div className="text-gray-600 dark:text-gray-400">15</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Weekly Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked className="w-4 h-4 text-blue-600 rounded" />
                    <span className="line-through text-gray-500">Complete React course</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked className="w-4 h-4 text-blue-600 rounded" />
                    <span className="line-through text-gray-500">Build portfolio project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <span>Practice system design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <span>Learn Docker basics</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Set New Goals
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="font-semibold text-blue-800 dark:text-blue-300 mb-1">💡 Suggestion</div>
                    <div className="text-blue-700 dark:text-blue-400">
                      You've been focusing on React. Consider adding backend skills like Node.js to become full-stack.
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="font-semibold text-green-800 dark:text-green-300 mb-1">🎯 Achievement</div>
                    <div className="text-green-700 dark:text-green-400">
                      Great progress! You've logged 15 entries this month. Keep up the consistency!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProgressJournal;
