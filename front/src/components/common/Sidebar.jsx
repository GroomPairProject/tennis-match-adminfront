import React from 'react';
import { Home, Users, Trophy, Building2, MapPin, GitBranch, MessageSquare, LogOut, Menu, X } from 'lucide-react';

const Sidebar = ({ user, currentPage, setCurrentPage, sidebarOpen, setSidebarOpen, onLogout }) => {
  const menuItems = [
    { id: 'home', name: '홈', icon: Home },
    { id: 'tournaments', name: '대회 관리', icon: Trophy },
    { id: 'admins', name: '관리자 관리', icon: Users },
    { id: 'clubs', name: '클럽 관리', icon: Building2 },
    { id: 'stadiums', name: '경기장 관리', icon: MapPin },
    { id: 'brackets', name: '대진 관리', icon: GitBranch },
    { id: 'support', name: '고객 센터', icon: MessageSquare },
  ];

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col`}>
      <div className="p-6 flex items-center justify-between">
        {sidebarOpen && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg">Tennis Match</span>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-700 rounded-lg transition"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              currentPage === item.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>{item.name}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className={`flex items-center gap-3 px-4 py-3 ${sidebarOpen ? '' : 'justify-center'}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
            {user?.username?.[0]?.toUpperCase() || 'A'}
          </div>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{user?.username || '관리자'}</div>
              <div className="text-sm text-gray-400 truncate">{user?.authorities?.[0] || 'ROLE_ADMIN'}</div>
            </div>
          )}
        </div>
        <button
          onClick={onLogout}
          className={`w-full mt-2 flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition ${
            sidebarOpen ? '' : 'justify-center'
          }`}
        >
          <LogOut className="w-5 h-5" />
          {sidebarOpen && <span>로그아웃</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;