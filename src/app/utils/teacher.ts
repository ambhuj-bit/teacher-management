import { mockTeachers } from "../constants/constants";
import { Teacher } from "./types/teachers";


export function getTeachers(): Teacher[] {
  return mockTeachers;
}

export function getTeacherById(id: string): Teacher | undefined {
  return mockTeachers.find(teacher => teacher.id === id);
}

export function addTeacher(newTeacher: Omit<Teacher, 'id'>): Teacher {
  const id = `T${String(mockTeachers.length + 1).padStart(3, '0')}`;
  const teacher = { ...newTeacher, id };
  mockTeachers.push(teacher);
  return teacher;
}

export function updateTeacher(id: string, updatedData: Partial<Teacher>): Teacher | undefined {
  const index = mockTeachers.findIndex(teacher => teacher.id === id);
  if (index === -1) return undefined;
  
  mockTeachers[index] = { ...mockTeachers[index], ...updatedData };
  return mockTeachers[index];
}