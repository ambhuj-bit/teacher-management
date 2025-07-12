"use client";
import { useState } from 'react';
import { getTeachers } from '../utils/teacher';
import SearchBar from '../components/ui/SearchBar';
import StatsCard from '../components/ui/StatsCard';
import AddTeacherModal from '../components/ui/AddTeacherModal';
import TeacherList from '../components/teachers/TeacherList';


export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const filteredTeachers = getTeachers().filter(teacher => {
    const matchesSearch = 
      teacher.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      statusFilter === 'all' || teacher.status === statusFilter;
    
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Teacher Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Teachers" value={getTeachers().length.toString()} trend="up" />
        <StatsCard 
          title="Active Now" 
          value={getTeachers().filter(t => t.status === 'active').length.toString()} 
          trend="up" 
        />
        <StatsCard 
          title="On Leave" 
          value={getTeachers().filter(t => t.status === 'on leave').length.toString()} 
          trend="down" 
        />
        <StatsCard 
          title="New Hires" 
          value={getTeachers()
            .filter(t => new Date(t.hireDate) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
            .length.toString()} 
          trend="up" 
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <SearchBar 
          onSearch={setSearchQuery}
          onFilter={setStatusFilter}
          onAddTeacher={() => setIsAddModalOpen(true)}
        />
        <TeacherList 
          teachers={filteredTeachers} 
        />
      </div>
      
      <button 
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
      
      <AddTeacherModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onTeacherAdded={() => {
          console.log('New teacher added');
        }}
      />
    </div>
  );
}