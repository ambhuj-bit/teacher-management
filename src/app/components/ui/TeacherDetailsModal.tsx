import { Teacher } from "@/app/utils/types/teachers";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import TeacherForm from "./TeacherForm";

interface TeacherDetailsModalProps {
  teacher: Teacher;
  onClose: () => void;
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: string) => void;
}

export default function TeacherDetailsModal({ 
  teacher, 
  onClose, 
  onEdit, 
  onDelete 
}: TeacherDetailsModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditSubmit = (updatedTeacher: Omit<Teacher, 'id'>) => {
    onEdit({ ...updatedTeacher, id: teacher.id });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${teacher.firstName} ${teacher.lastName}?`)) {
      onDelete(teacher.id);
      onClose();
    }
  };

  if (isEditing) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Edit Teacher
              </h3>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <TeacherForm
              initialData={teacher}
              onSave={handleEditSubmit}
              onCancel={() => setIsEditing(false)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              {teacher.firstName} {teacher.lastName}'s Details
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Personal Information</h4>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Email:</span> {teacher.email}</p>
                  <p><span className="font-medium">Phone:</span> {teacher.phone}</p>
                  {teacher.address && (
                    <p>
                      <span className="font-medium">Address:</span> {teacher.address.street}, {teacher.address.city}, {teacher.address.state} {teacher.address.zip}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Employment Details</h4>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Department:</span> {teacher.department}</p>
                  <p><span className="font-medium">Specialization:</span> {teacher.specialization}</p>
                  <p><span className="font-medium">Hire Date:</span> {new Date(teacher.hireDate).toLocaleDateString()}</p>
                  <p><span className="font-medium">Status:</span> 
                    <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      teacher.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : teacher.status === 'on leave' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {teacher.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Financial Information</h4>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Salary:</span> ₹{teacher.salary.toLocaleString()}</p>
                  <p><span className="font-medium">Payment History:</span> Last paid on {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Actions</h4>
                <div className="mt-3 flex space-x-3">
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                  <button 
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="px-4 py-2 border border-red-300 rounded-lg hover:bg-red-500 hover:text-white transition-colors flex items-center bg-red-300 text-white disabled:opacity-50"
                  >
                    <TrashIcon className="h-4 w-4 mr-2" />
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}