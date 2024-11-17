export interface Comments {
    id: number;
    comment: string;
    createdAt: string;
    commentedBy: {
        id: number;
        fullName: string;
        username: string;
    }
}