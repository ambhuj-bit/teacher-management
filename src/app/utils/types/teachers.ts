export interface Teacher {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: string;
    specialization: string;
    hireDate: string;
    salary: number;
    status: 'active' | 'on leave' | 'inactive';
    avatar?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  }