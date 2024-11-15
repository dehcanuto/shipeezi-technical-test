import { formatDate } from "../../../misc/format";
import UsersTableActions from "../UsersTableActions";
import { TablePropTypes } from "./type";

const Table = ({ header, items, loading }: TablePropTypes) => {
    return (
        <table className="bg-white table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                    {header.map((item, key) => (
                        <th key={key} className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                                {item}
                            </div>
                        </th>
                    ))}
                    <th key={header.length + 1} className="p-2" />
                </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
                {loading ? Array.from({ length: 6 }, (_, key) => 
                    <tr key={key} className="animate-pulse">
                        {header.map((_, index) => 
                            <td key={index} className="p-2">
                                <div className="flex flex-col gap-1">
                                    <span className="flex w-2/3 h-3 bg-slate-200 rounded" />
                                    {index === 0 && <span className="flex w-1/3 h-3 bg-slate-100 rounded" />}
                                </div>
                            </td>
                        )}
                    </tr>
                ) :
                items.map((item, key) => (
                    <tr key={key}>
                        <td className="p-2 whitespace-nowrap">
                            <div className="flex flex-col">
                                <span className="font-bold">
                                    {item.fullName}
                                </span>
                                <span className="text-sm text-gray-500">
                                    @{item.username}
                                </span>
                            </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                                {formatDate(item.updatedAt)}
                            </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                                {formatDate(item.createdAt)}
                            </div>
                        </td>
                        <td className="flex p-2 px-4 justify-end">
                            <UsersTableActions id={item.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;