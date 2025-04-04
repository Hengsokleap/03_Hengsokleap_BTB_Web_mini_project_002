import { ChevronRight, Bell } from 'lucide-react';

export default function DashboardHeader({ title, name, email, profile }) {
  console.log("name in dashboard header ===========",name)
  console.log("email in dashboard header ===========",email)
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-gray-500">Workspace</span>
        <ChevronRight size={16} className="text-gray-400" />
        <a href="#" className="text-blue-600 underline font-medium">{title}</a>
      </div>
      <div className="flex items-center gap-4">
        <Bell size={20} className="text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-2">
          <img
            src={profile || "/default-avatar.png"}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-800 font-medium">{name }</p>
            <p className="text-sm text-gray-500">{email || "example@mail.com"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
