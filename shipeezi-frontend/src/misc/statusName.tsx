const TaskStatusNames = {
    0: 'Backlog',
    1: 'To Do',
    2: 'In Process',
    3: 'Done',
};
  
export type TaskStatus = keyof typeof TaskStatusNames;
  
export function getStatusName(status: TaskStatus): string {
    return TaskStatusNames[status];
}