import UsersTableActions from "../UsersTableActions";
import { TablePropTypes } from "./type";

const Table = ({ header, items }: TablePropTypes) => {
    return (
        <table className="bg-white table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                    {header.map(item => (
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                                {item}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
                {items.map(item => (
                    <tr>
                        <td className="p-2 whitespace-nowrap">
                            <div className="flex flex-col">
                                <span className="font-bold">
                                    {item.name}
                                </span>
                                <span className="text-sm text-gray-500">
                                    @{item.username}
                                </span>
                            </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                                {item.lastUpdate}
                            </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                                {item.added}
                            </div>
                        </td>
                        <td className="flex p-2 px-4 justify-end">
                            <UsersTableActions />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;