import React, { useState, useEffect } from 'react';
import { Plus, Eye, Edit } from 'lucide-react';
import { api } from '../api';
import { ROLE_BADGE_COLORS } from '../utils/constants';
import CreateAdminModal from '../components/modals/CreateAdminModal';

const AdminsPage = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'STAFF'
  });

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    try {
      const result = await api.getAllAdmins();
      if (result.status === 'success') {
        setAdmins(result.data || []);
      }
    } catch (err) {
      console.error('Failed to load admins:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      const result = await api.createAdmin(formData);
      if (result.status === 'success') {
        alert(`계정이 생성되었습니다!\n아이디: ${result.data.username}\n임시 비밀번호: ${result.data.temporaryPassword}`);
        setShowModal(false);
        loadAdmins();
        setFormData({ name: '', email: '', phone: '', role: 'STAFF' });
      }
    } catch (err) {
      alert('계정 생성에 실패했습니다.');
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">관리자 관리</h1>
          <p className="text-gray-500 mt-2">시스템 관리자 계정을 관리합니다</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition"
        >
          <Plus className="w-5 h-5" />
          관리자 추가
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">이름</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">아이디</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">이메일</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">권한</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">상태</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">작업</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    로딩 중...
                  </td>
                </tr>
              ) : admins.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    등록된 관리자가 없습니다
                  </td>
                </tr>
              ) : (
                admins.map((admin) => (
                  <tr key={admin.adminId} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {admin.name?.[0] || 'A'}
                        </div>
                        <span className="font-medium text-gray-900">{admin.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{admin.username}</td>
                    <td className="px-6 py-4 text-gray-600">{admin.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${ROLE_BADGE_COLORS[admin.role] || 'bg-gray-100 text-gray-700'}`}>
                        {admin.roleText || admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {admin.isActive ? (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          활성
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          비활성
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Edit className="w-4 h-4 text-blue-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <CreateAdminModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleCreateAdmin}
      />
    </div>
  );
};

export default AdminsPage;