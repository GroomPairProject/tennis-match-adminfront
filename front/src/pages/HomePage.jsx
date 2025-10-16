import React from 'react';
import { Trophy, Plus, Building2, GitBranch, Settings } from 'lucide-react';

const HomePage = ({ user }) => {
  const stats = [
    { label: '진행 중인 대회', value: '12', change: '+3', color: 'from-blue-500 to-blue-600' },
    { label: '등록된 클럽', value: '45', change: '+8', color: 'from-purple-500 to-purple-600' },
    { label: '전체 참가자', value: '328', change: '+24', color: 'from-green-500 to-green-600' },
    { label: '활성 관리자', value: '15', change: '+2', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-500 mt-2">테니스 대회 관리 시스템에 오신 것을 환영합니다</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">최근 활동</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">신규 대회 등록</p>
                  <p className="text-sm text-gray-500">{i}분 전</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">빠른 작업</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '대회 등록', icon: Plus },
              { label: '클럽 관리', icon: Building2 },
              { label: '대진표 생성', icon: GitBranch },
              { label: '설정', icon: Settings },
            ].map((item, idx) => (
              <button
                key={idx}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-center group"
              >
                <item.icon className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-blue-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;