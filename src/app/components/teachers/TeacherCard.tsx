"use client";
import { useState } from 'react';
import PaymentModal from './PaymentModal';
import { Teacher } from '@/app/utils/types/teachers';
import TeacherDetailsModal from '../ui/TeacherDetailsModal';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleEdit = (updatedTeacher: Teacher) => {
    // Update teacher in your state/API
    console.log('Updated teacher:', updatedTeacher);
  };
  
  const handleDelete = (teacherId: string) => {
    // Delete teacher from your state/API
    console.log('Delete teacher with ID:', teacherId);
  };
  
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
        <div className="p-5">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                {teacher.firstName.charAt(0)}{teacher.lastName.charAt(0)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                {teacher.firstName} {teacher.lastName}
              </h3>
              <p className="text-sm text-gray-500 truncate">{teacher.department}</p>
            </div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              teacher.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : teacher.status === 'on leave' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-red-100 text-red-800'
            }`}>
              {teacher.status}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <p className="text-xs text-gray-500">Specialization</p>
              <p className="text-sm font-medium">{teacher.specialization}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Salary</p>
              <p className="text-sm font-medium">&#8377;{teacher.salary.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium truncate">{teacher.email}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium">{teacher.phone}</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowPaymentModal(true)}
              className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm font-medium py-2 px-3 rounded-lg transition-colors"
            >
              Process Payment
            </button>
            <button
            onClick={() => setShowDetailsModal(true)}
             className="flex-1 bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm font-medium py-2 px-3 rounded-lg transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
      
      {showPaymentModal && (
        <PaymentModal
          teacherId={teacher.id}
          teacherName={`${teacher.firstName} ${teacher.lastName}`}
          onClose={() => setShowPaymentModal(false)}
          onPaymentSuccess={() => {
            setShowPaymentModal(false);
            // Here you could add a toast notification
          }}
        />
      )}

{showDetailsModal && (
        <TeacherDetailsModal
          teacher={teacher}
          onClose={() => setShowDetailsModal(false)}
          onEdit={handleEdit}
  onDelete={handleDelete}
        />
      )}
    </>
  );
}