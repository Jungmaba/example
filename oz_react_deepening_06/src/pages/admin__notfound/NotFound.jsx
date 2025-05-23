import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - 잘못된 페이지 요청</h1>
      <p>이 페이지 요청은 잘못된 페이지 입니다.</p>
      <Link to="/admin">대시보드로 돌아가기</Link>
    </div>
  );
}

export default NotFound;
