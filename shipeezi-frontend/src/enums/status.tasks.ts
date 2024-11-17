import { FormFieldSelectOptionsPropTypes } from "../components/molecules/FormFieldSelect/type";

const statusTasks: FormFieldSelectOptionsPropTypes[] = [
    {
        label: 'Backlog',
        value: 0
    },
    {
        label: 'Pending',
        value: 1
    },
    {
        label: 'In Progress',
        value: 2
    },
    {
        label: 'Done',
        value: 3
    }
]

export default statusTasks;