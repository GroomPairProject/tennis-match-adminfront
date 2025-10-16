import React from 'react';

const PlaceholderPage = ({ title, icon: Icon }) => (
  <div className="p-8">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-500 mt-2">이 기능은 곧 제공될 예정입니다</p>
    </div>
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
      <Icon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <p className="text-gray-500 text-lg">개발 중입니다</p>
    </div>
  </div>
);

export default PlaceholderPage;