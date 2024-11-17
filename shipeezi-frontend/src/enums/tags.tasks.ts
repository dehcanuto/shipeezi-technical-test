export interface TagsTasksPropTypes {
    label: string;
    value: number;
    color: string;
}

const tagsTasks: TagsTasksPropTypes[] = [
    {
        label: 'Dev',
        value: 0,
        color: '#7B00FF'
    },
    {
        label: 'Design',
        value: 1,
        color: '#0059FF'
    },
    {
        label: 'Test',
        value: 2,
        color: '#306f32'
    }
]

export default tagsTasks;