import React, { useState } from "react";
import { MdClose } from "react-icons/md";

import { FormFieldTagSelectPropTypes } from "./type";
import { TagsTasksPropTypes } from "../../../enums/tags.tasks";

const FormFieldTagSelect = ({ label, tags, selectedTags, onChange }: FormFieldTagSelectPropTypes) => {
    const [inputValue, setInputValue] = useState("");
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [availableTags, setAvailableTags] = useState(tags);

    const handleFocus = () => setShowOptions(true);

    const handleBlur = () => setTimeout(() => setShowOptions(false), 300);
    
    const handleAddTag = (tag: TagsTasksPropTypes) => {
        if (!selectedTags.find((t) => t.value === tag.value)) {
            onChange([...selectedTags, tag]);
        }
        setAvailableTags(availableTags.filter((t) => t.value !== tag.value));
    };
    
    const handleRemoveTag = (tag: TagsTasksPropTypes) => {
        onChange(selectedTags.filter((t) => t.value !== tag.value));
        setAvailableTags([...availableTags, tag]);
    };
    
    return (
        <div className="relative">
            <div className="absolute top-7 left-2 flex flex-wrap mt-1.5 gap-1">
                {selectedTags.map((tag) => (
                    <div
                        key={tag.value}
                        className="flex items-center px-3 gap-1 text-sm bg-[#e0e0e0] rounded"
                        style={{
                            color: tag.color,
                            backgroundColor: `${tag.color}1A`,
                        }}>
                        {tag.label}
                        <button
                            onClick={() => handleRemoveTag(tag)}
                            className="bg-transparent border-none cursor-pointer"
                        >
                            <MdClose />
                        </button>
                    </div>
                ))}
            </div>
            <label className="block text-green-600 text-sm font-semibold mb-1" htmlFor="tagInput">
                {label}
            </label>
            <input
                id="tagInput"
                type="text"
                placeholder={!selectedTags.length ? "Add a tag" : ''}
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setInputValue(e.target.value)}
                className="block w-full py-2 px-3 mt-1 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
            />
            {showOptions && (
                <div className="absolute top-full inset-x-0 p-2 mt-2 bg-white shadow rounded">
                    <p className="text-xs text-slate-500 uppercase mb-2">Select a tag:</p>
                    <div className="flex flex-wrap gap-2">
                        {availableTags.length ? availableTags.map((tag) => (
                            <button
                                key={tag.value}
                                onClick={() => handleAddTag(tag)}
                                disabled={selectedTags.some((t) => t.value === tag.value)}
                                className="text-sm px-3 rounded"
                                style={{
                                    color: tag.color,
                                    backgroundColor: `${tag.color}1A`,
                                }}
                            >
                                {tag.label}
                            </button>
                        )) : <span className="text-sm text-slate-600">Empty tags</span>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormFieldTagSelect;