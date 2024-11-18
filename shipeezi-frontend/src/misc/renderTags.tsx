import { Key } from "react";
import { tagsTasks } from "../enums";
import { TagsTasksPropTypes } from "../enums/tags.tasks";

export const RenderTags = ({ tags }: { tags: string | number[] }) => {
    let tagsFormmated;
    let tagsIds: TagsTasksPropTypes[] = [];

    try {
        tagsFormmated = JSON.parse(tags as string)
    } catch {
        tagsFormmated = tags;
    }
    finally {
        tagsIds = tagsFormmated.map((tagId: number) =>
            tagsTasks.find((tag) => tag.value === tagId)
        );
    }

    return (
        <div className="flex gap-1">
            {tagsIds.map((tag: TagsTasksPropTypes, index: Key) =>
                tag && (
                    <span
                        key={index}
                        className="px-2 bg-[#7B00FF]/10 text-[#7B00FF] text-sm rounded"
                        style={{
                            color: tag.color,
                            backgroundColor: tag.color + '33',
                        }}>
                        {tag.label}
                    </span>
                )
            )}
        </div>
    )
}