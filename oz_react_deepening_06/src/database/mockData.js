// 1. 대시보드 통계 (Dashboard.jsx에서 사용)
export const dashboardStats = {
  totalUsers: 1250,
  activeUsers: 800,
  inactiveUsers: 450,
  totalPosts: 3400,
  totalComments: 21000,
  revenue: 2300,
};

// 2. 사용자 목록 (Users.jsx에서 사용)
export const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active', registrationDate: '2023-01-12' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive', registrationDate: '2022-11-05' },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    status: 'Active',
    registrationDate: '2023-03-19',
  },
  { id: 4, name: 'Bob Lee', email: 'bob.lee@example.com', status: 'Inactive', registrationDate: '2021-07-25' },
  {
    id: 5,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    status: 'Active',
    registrationDate: '2023-02-28',
  },
  // 더 많은 사용자 추가 가능
];

// 3. 사용자 상세 정보 (UserDetail.jsx에서 사용)
export const getUserDetail = (id) => {
  const userDetails = {
    1: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      status: 'Active',
      registrationDate: '2023-01-12',
      role: 'Admin',
      lastLogin: '2023-03-15',
    },
    2: {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'Inactive',
      registrationDate: '2022-11-05',
      role: 'User',
      lastLogin: '2022-10-10',
    },
    3: {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      status: 'Active',
      registrationDate: '2023-03-19',
      role: 'Moderator',
      lastLogin: '2023-03-18',
    },
    4: {
      id: 4,
      name: 'Bob Lee',
      email: 'bob.lee@example.com',
      status: 'Inactive',
      registrationDate: '2021-07-25',
      role: 'User',
      lastLogin: '2021-06-20',
    },
    5: {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      status: 'Active',
      registrationDate: '2023-02-28',
      role: 'User',
      lastLogin: '2023-03-10',
    },
  };
  return userDetails[id] || null;
};

// 4. 어드민 설정 (Settings.jsx에서 사용)
export const adminSettings = {
  siteTitle: 'Admin Dashboard',
  theme: 'dark',
  notificationsEnabled: true,
  allowUserRegistration: true,
};

// 5. 404 페이지 목업 (NotFound.jsx에서 사용)
export const notFoundMessage = 'Page not found. Please check the URL or go back to the dashboard.';
