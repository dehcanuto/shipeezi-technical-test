export interface TodoCardPropsType {
    id: number;
    title: string;
    description: string;
    status: 0 | 1 | 2 | 3;
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
    handleShow?: () => void;
}