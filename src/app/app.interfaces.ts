export interface tasks {
  id : string
  taskName: string;
  description: string;
  category: string;
  dueDate: string;
  isComplete: boolean;
  createdAt: string;
}

export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface Task {
  description: string;
  category: string;
  dueDate: string;
  isCompleted?: boolean;
}

export interface createTaskResponse extends Task {
  user: string;
  _id: string;
  createdAt: string;
}
