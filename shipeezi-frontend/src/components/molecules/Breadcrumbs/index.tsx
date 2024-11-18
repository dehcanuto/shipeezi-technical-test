import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { BreadcrumbsPropTypes } from "./type";

const Breadcrumbs = ({ items }: BreadcrumbsPropTypes) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex w-full flex-wrap items-center p-2 text-2xl text-slate-700">
                {items.map((item, index) => (
                    <li className="flex cursor-pointer items-center leading-normal">
                        <Link to={item.link}>
                            {item.label}
                        </Link>
                        {(items.length !== (index + 1)) && (
                            <span className="pointer-events-none mx-2 select-none leading-normal">
                                <IoChevronForward />
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;