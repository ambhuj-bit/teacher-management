import { Teacher } from '@/app/utils/types/teachers';
import { addTeacher } from '@/app/utils/teacher';
import TeacherForm from './TeacherForm';


interface AddTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTeacherAdded: () => void;
}

export default function AddTeacherModal({ isOpen, onClose, onTeacherAdded }: AddTeacherModalProps) {
  const handleSave = (teacherData: Omit<Teacher, 'id'>) => {
    addTeacher(teacherData);
    onTeacherAdded();
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Add New Teacher</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <TeacherForm 
            onSave={handleSave}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}