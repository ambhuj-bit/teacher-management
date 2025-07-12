"use client";
import { Teacher } from '@/app/utils/types/teachers';
import { useForm } from 'react-hook-form';

interface TeacherFormProps {
  initialData?: Partial<Teacher>;
  onSave: (teacher: Omit<Teacher, 'id'>) => void;
  onCancel: () => void;
}

export default function TeacherForm({ initialData, onSave, onCancel }: TeacherFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Teacher, 'id'>>({
    defaultValues: initialData || {
      status: 'active',
      hireDate: new Date().toISOString().split('T')[0],
      salary: 0,
      phone: '',
      specialization: ''
    }
  });

  const onSubmit = (data: Omit<Teacher, 'id'>) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            {...register('firstName', { required: 'First name is required' })}
            className={`w-full rounded-lg border ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder='First Name'
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            className={`w-full rounded-lg border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder='last Name'
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder='Email Address'
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='Phone Number'
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department *
          </label>
          <input
            {...register('department', { required: 'Department is required' })}
            className={`w-full rounded-lg border ${
              errors.department ? 'border-red-500' : 'border-gray-300'
            } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder='Department Name'
          />
          {errors.department && (
            <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
          )}
        </div>

        {/* Specialization */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specialization
          </label>
          <input
            {...register('specialization')}
            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='Specialization'
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Salary
          </label>
          <input
            type="number"
            {...register('salary', {
              valueAsNumber: true,
              min: { value: 0, message: 'Salary must be positive' }
            })}
            className={`w-full rounded-lg border ${
              errors.salary ? 'border-red-500' : 'border-gray-300'
            } py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder='Salary Amount'
          />
          {errors.salary && (
            <p className="mt-1 text-sm text-red-600">{errors.salary.message}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            {...register('status')}
            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="on leave">On Leave</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Hire Date (hidden but included in form) */}
        <input type="hidden" {...register('hireDate')} />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Save Teacher
        </button>
      </div>
    </form>
  );
}