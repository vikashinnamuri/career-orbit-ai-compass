
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const AdminPanel = () => {
  const userStats = {
    totalUsers: 12547,
    activeUsers: 8932,
    newUsersToday: 147,
    premiumUsers: 2341
  };

  const resumeStats = {
    totalResumes: 45623,
    resumesToday: 234,
    avgOptimizationScore: 87,
    topTemplate: 'Modern Professional'
  };

  const recentUsers = [
    { id: 1, name: 'Vikash Kumar', email: 'vikash@email.com', joinDate: '2024-01-20', status: 'Active', plan: 'Premium' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', joinDate: '2024-01-19', status: 'Active', plan: 'Free' },
    { id: 3, name: 'Mike Chen', email: 'mike@email.com', joinDate: '2024-01-18', status: 'Inactive', plan: 'Premium' },
    { id: 4, name: 'Emily Davis', email: 'emily@email.com', joinDate: '2024-01-17', status: 'Active', plan: 'Free' },
  ];

  const flaggedContent = [
    { id: 1, user: 'john@email.com', type: 'Resume', reason: 'Inappropriate content', date: '2024-01-20', status: 'Pending' },
    { id: 2, user: 'jane@email.com', type: 'Journal Entry', reason: 'Spam', date: '2024-01-19', status: 'Resolved' },
    { id: 3, user: 'bob@email.com', type: 'Profile', reason: 'Fake information', date: '2024-01-18', status: 'Under Review' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Panel 👑
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage users, monitor platform usage, and maintain content quality
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="shadow-lg border-0 bg-blue-50 dark:bg-blue-900/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{userStats.totalUsers.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Users</div>
                  <div className="text-xs text-green-600 mt-1">↗ +{userStats.newUsersToday} today</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-0 bg-green-50 dark:bg-green-900/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">{userStats.activeUsers.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  <div className="text-xs text-green-600 mt-1">71% engagement</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-0 bg-purple-50 dark:bg-purple-900/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{userStats.premiumUsers.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Premium Users</div>
                  <div className="text-xs text-purple-600 mt-1">19% conversion</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-0 bg-orange-50 dark:bg-orange-900/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">{resumeStats.totalResumes.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Resumes Created</div>
                  <div className="text-xs text-orange-600 mt-1">↗ +{resumeStats.resumesToday} today</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Usage Analytics */}
              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Platform Usage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Resume Builder</span>
                      <span className="text-sm font-bold">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Mock Interviews</span>
                      <span className="text-sm font-bold">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Job Tracker</span>
                      <span className="text-sm font-bold">52%</span>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Progress Journal</span>
                      <span className="text-sm font-bold">43%</span>
                    </div>
                    <Progress value={43} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">API Response Time</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      245ms
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Database Performance</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Optimal
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Service Status</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Online
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Server Uptime</span>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      99.9%
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Error Rate</span>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      0.02%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage user accounts and monitor activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <Badge className={user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.plan === 'Premium' ? 'default' : 'secondary'}>
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">👁️</Button>
                            <Button variant="ghost" size="sm">✏️</Button>
                            <Button variant="ghost" size="sm" className="text-red-600">🚫</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🚩</span>
                  Flagged Content
                </CardTitle>
                <CardDescription>
                  Review and moderate flagged user content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Content Type</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {flaggedContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.user}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.reason}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                          <Badge className={
                            item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                            item.status === 'Resolved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          }>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">👁️</Button>
                            <Button variant="ghost" size="sm" className="text-green-600">✅</Button>
                            <Button variant="ghost" size="sm" className="text-red-600">❌</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📢</span>
                  Send Notifications
                </CardTitle>
                <CardDescription>
                  Send announcements and updates to users
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="bg-blue-50 dark:bg-blue-900/20">All Users</Button>
                    <Button variant="outline">Premium Users</Button>
                    <Button variant="outline">Free Users</Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Notification Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="bg-green-50 dark:bg-green-900/20">
                      📢 Announcement
                    </Button>
                    <Button variant="outline">
                      🚀 Feature Update
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Enter your notification message here..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                    <span className="mr-2">📤</span>
                    Send Notification
                  </Button>
                  <Button variant="outline">
                    <span className="mr-2">👁️</span>
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: '2024-01-20', type: 'Feature Update', message: 'New AI Resume Builder features now available!', recipients: 'All Users' },
                    { date: '2024-01-18', type: 'Announcement', message: 'Scheduled maintenance on January 25th', recipients: 'All Users' },
                    { date: '2024-01-15', type: 'Premium Feature', message: 'Advanced interview analytics now live', recipients: 'Premium Users' }
                  ].map((notification, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{notification.type}</Badge>
                        <span className="text-xs text-gray-500">{notification.date}</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{notification.message}</p>
                      <div className="text-xs text-gray-500">Sent to: {notification.recipients}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPanel;
