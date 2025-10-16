// API Base URL
const API_BASE_URL = 'http://localhost:8080/api';

// API Client
export const api = {
  // 인증 관련
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/admin/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });
    return response.json();
  },
  
  logout: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    return response.json();
  },
  
  // 프로필 관련
  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/mypage`, {
      credentials: 'include'
    });
    return response.json();
  },
  
  updateProfile: async (data) => {
    const response = await fetch(`${API_BASE_URL}/admin/mypage`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  // 관리자 관리
  getAllAdmins: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
      credentials: 'include'
    });
    return response.json();
  },
  
  getActiveAdmins: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/users/active`, {
      credentials: 'include'
    });
    return response.json();
  },
  
  getAdminsByRole: async (role) => {
    const response = await fetch(`${API_BASE_URL}/admin/users/role/${role}`, {
      credentials: 'include'
    });
    return response.json();
  },
  
  createAdmin: async (data) => {
    const response = await fetch(`${API_BASE_URL}/admin/auth/accounts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  // 클럽 관리
  getClub: async (clubId) => {
    const response = await fetch(`${API_BASE_URL}/admin/club/${clubId}`, {
      credentials: 'include'
    });
    return response.json();
  },
  
  createClub: async (data) => {
    const response = await fetch(`${API_BASE_URL}/admin/club`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  updateClub: async (clubId, data) => {
    const response = await fetch(`${API_BASE_URL}/admin/club/${clubId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  deleteClub: async (clubId) => {
    const response = await fetch(`${API_BASE_URL}/admin/club/${clubId}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    return response.json();
  }
};