import { Teacher } from "../utils/types/teachers";


export const mockTeachers: Teacher[] = [
  {
    id: 'T001',
    firstName: 'Saransh',
    lastName: 'Joshi',
    email: 'saransh.joshi@example.com',
    phone: '9717627789',
    department: 'Mathematics',
    specialization: 'Algebra',
    hireDate: '2018-06-15',
    salary: 65000,
    status: 'active',
    avatar: '/avatars/sarah.jpg',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62704'
    }
  },
  {
    id: 'T002',
    firstName: 'Mithlesh',
    lastName: 'Chandan',
    email: 'mithlesh.chandan@example.com',
    phone: '8090601234',
    department: 'Science',
    specialization: 'Physics',
    hireDate: '2019-03-22',
    salary: 72000,
    status: 'active',
    avatar: '/avatars/michael.jpg'
  },
  {
    id: 'T003',
    firstName: 'Amit',
    lastName: 'Sharma',
    email: "ambhuj.sharma",
    phone: "9717627789",
    department: "Computer Science",
    specialization: "CS",
    hireDate: "2022-03-07",
    salary: 950000,
    status: "on leave"
  },
  {
    id: 'T004',
    firstName: 'Ambhuj',
    lastName: '.',
    email: "ambhuj.sharma",
    phone: "9717627789",
    department: "Computer Science",
    specialization: "CS",
    hireDate: "2022-03-07",
    salary: 950000,
    status: "inactive"
  }

];