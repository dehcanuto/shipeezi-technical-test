export interface TodoCardPropsType {
    id: number;
    title: string;
    description: string;
    status: number;
    tags: string;
    storyPoints: number;
    createdBy: number;
    assignee: number;
    assignedTo: {
        id: number;
        fullName: string;
        username: string;
    }
    commentsCount: number;
    createdAt: string;
    updatedAt: string;
}