import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../../database/mockData';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUserDetail(id);
    setUser(userData);
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name} 유저 상세정보 </h1>
      <div className="stat-card">
        <h3>닉네임</h3>
        <div className="stat-value">{user.name}</div>
      </div>
      <div className="stat-card">
        <h3>이메일</h3>
        <div className="stat-value">{user.email}</div>
      </div>
      <div className="stat-card">
        <h3>상태</h3>
        <div className="stat-value">{user.status}</div>
      </div>
      <div className="stat-card">
        <h3>마지막 로그인</h3>
        <div className="stat-value">{user.lastLogin}</div>
      </div>
    </div>
  );
}

export default UserDetail;
