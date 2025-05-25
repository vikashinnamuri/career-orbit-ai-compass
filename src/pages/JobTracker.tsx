
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Layout from '@/components/Layout';

const JobTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer',
      location: 'Mountain View, CA',
      status: 'interviewing',
      appliedDate: '2024-01-15',
      resumeVersion: 'Google_SDE_v2.pdf',
      salary: '$150k - $200k',
      stage: 'Technical Round 2'
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Full Stack Developer',
      location: 'Seattle, WA',
      status: 'applied',
      appliedDate: '2024-01-18',
      resumeVersion: 'Microsoft_FS_v1.pdf',
      salary: '$140k - $180k',
      stage: 'Application Review'
    },
    {
      id: 3,
      company: 'Meta',
      position: 'Frontend Engineer',
      location: 'Menlo Park, CA',
      status: 'rejected',
      appliedDate: '2024-01-10',
      resumeVersion: 'Meta_FE_v1.pdf',
      salary: '$160k - $220k',
      stage: 'Final Interview'
    },
    {
      id: 4,
      company: 'Amazon',
      position: 'SDE II',
      location: 'Austin, TX',
      status: 'offer',
      appliedDate: '2024-01-08',
      resumeVersion: 'Amazon_SDE2_v3.pdf',
      salary: '$145k - $190k',
      stage: 'Offer Negotiation'
    },
    {
      id: 5,
      company: 'Netflix',
      position: 'Backend Engineer',
      location: 'Los Gatos, CA',
      status: 'applied',
      appliedDate: '2024-01-20',
      resumeVersion: 'Netflix_BE_v1.pdf',
      salary: '$155k - $210k',
      stage: 'Resume Screening'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'interviewing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'offer': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'rejected': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied': return '📝';
      case 'interviewing': return '💬';
      case 'offer': return '🎉';
      case 'rejected': return '❌';
      default: return '📄';
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    applied: jobs.filter(j => j.status === 'applied').length,
    interviewing: jobs.filter(j => j.status === 'interviewing').length,
    offer: jobs.filter(j => j.status === 'offer').length,
    rejected: jobs.filter(j => j.status === 'rejected').length,
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Job Application Tracker 📊
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track and manage all your job applications in one place
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-lg border-0 bg-blue-50 dark:bg-blue-900/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{statusCounts.applied}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Applied</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0 bg-yellow-50 dark:bg-yellow-900/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{statusCounts.interviewing}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Interviewing</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0 bg-green-50 dark:bg-green-900/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{statusCounts.offer}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Offers</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0 bg-red-50 dark:bg-red-900/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{statusCounts.rejected}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rejected</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Filter & Search
              </CardTitle>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <span className="mr-2">➕</span>
                Add New Application
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by company or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="interviewing">Interviewing</SelectItem>
                  <SelectItem value="offer">Offer</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Jobs Table */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">📋</span>
              Applications ({filteredJobs.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredJobs.map((job) => (
                    <TableRow key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <TableCell>
                        <div>
                          <div className="font-semibold">{job.company}</div>
                          <div className="text-sm text-gray-500">{job.location}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{job.position}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(job.status)}>
                          <span className="mr-1">{getStatusIcon(job.status)}</span>
                          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{job.stage}</div>
                      </TableCell>
                      <TableCell>{job.appliedDate}</TableCell>
                      <TableCell className="text-sm font-medium text-green-600">{job.salary}</TableCell>
                      <TableCell>
                        <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                          {job.resumeVersion}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            ✏️
                          </Button>
                          <Button variant="ghost" size="sm">
                            👁️
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            🗑️
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default JobTracker;
