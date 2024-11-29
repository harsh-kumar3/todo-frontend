export interface tasks {
    taskName: string,
    description: string,
    category: string,
    dueDate: string,
    isComplete: boolean,
    createdAt : string
}

export interface User{
    name ?: string,
    email : string,
    password : string
}