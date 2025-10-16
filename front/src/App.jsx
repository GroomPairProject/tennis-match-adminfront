import React, { useState, useEffect } from 'react';
import { Trophy, Building2, MapPin, GitBranch, MessageSquare } from 'lucide-react';
import { api } from './api';
import DashboardLayout from './components/layout/DashboardLayout';
import Loading from './components/common/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminsPage from './pages/AdminsPage';
import PlaceholderPage from './pages/PlaceholderPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const result = await api.getProfile();
      if (result.status === 'success') {
        setUser({ username: result.data.username });
      }
    } catch (err) {
      console.log('Not authenticated');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await api.logout();
      setUser(null);
    } catch (err) {
      console.error('Logout failed:', err);
      setUser(null);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout user={user} onLogout={handleLogout}>
      {(currentPage) => {
        switch (currentPage) {
          case 'home':
            return <HomePage user={user} />;
          case 'admins':
            return <AdminsPage />;
          case 'tournaments':
            return <PlaceholderPage title="대회 관리" icon={Trophy} />;
          case 'clubs':
            return <PlaceholderPage title="클럽 관리" icon={Building2} />;
          case 'stadiums':
            return <PlaceholderPage title="경기장 관리" icon={MapPin} />;
          case 'brackets':
            return <PlaceholderPage title="대진 관리" icon={GitBranch} />;
          case 'support':
            return <PlaceholderPage title="고객 센터" icon={MessageSquare} />;
          default:
            return <HomePage user={user} />;
        }
      }}
    </DashboardLayout>
  );
};

export default App;