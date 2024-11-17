import { TagsTasksPropTypes } from "../../../enums/tags.tasks";

export interface FormFieldTagSelectPropTypes {
    label: string;
    tags: TagsTasksPropTypes[];
    selectedTags: TagsTasksPropTypes[];
    onChange: (tags: TagsTasksPropTypes[]) => void;
}