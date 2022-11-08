import MaterialIcon from "../../MaterialIcon";
import Link from "next/link";

const SidebarItem = ({ path, icon, label }) => {
  return (
    <li className="text-base font-normal text-neutral-100 dark:text-white hover:text-gray-500">
      <Link href={path}
        className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <MaterialIcon iconName={icon} />
        <span className="ml-3">{label}</span>
      </Link>
    </li>
  )
}

const Sidebar = ({ options }) => {
  return (
    <aside className="w-1/4 h-screen px-3 py-4 overflow-y-auto bg-slate-700 dark:bg-sky-800">
      <div className="">
        <ul className="space-y-2">
          {options.map((option) => (
            <SidebarItem key={option.title} {...option} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
