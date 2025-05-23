import React, { useState } from 'react';
import { adminSettings } from '../../database/mockData';

function Settings() {
  const [settings, setSettings] = useState(adminSettings);

  const handleChangeTheme = () => {
    setSettings({
      ...settings,
      theme: settings.theme === 'dark' ? 'light' : 'dark',
    });
  };
  const handleChangeAlarm = () => {
    setSettings({
      ...settings,
      notificationsEnabled: !settings.notificationsEnabled,
    });
  };
  const handleChangeRegister = () => {
    setSettings({
      ...settings,
      allowUserRegistration: !settings.allowUserRegistration,
    });
  };

  return (
    <div>
      <h1>설정</h1>
      <div className="form-section">
        <label htmlFor="theme">사이트 테마</label>
        <button
          className={`${settings.theme === 'dark' ? 'button-white' : 'button-secondary'}`}
          onClick={handleChangeTheme}
        >
          {settings.theme === 'dark' ? '화이트' : '다크'} 테마로 변경
        </button>
      </div>
      <div className="form-section">
        <label htmlFor="site-title">사이트 제목</label>
        <input
          type="text"
          id="site-title"
          value={settings.siteTitle}
          onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
        />
      </div>
      <div className="form-section">
        <label htmlFor="site-alarm">알림 설정</label>
        <button
          className={`${settings.notificationsEnabled ? 'button' : 'button-secondary'}`}
          onClick={handleChangeAlarm}
        >
          {settings.notificationsEnabled ? '활성화' : '비활성화'}
        </button>
      </div>
      <div className="form-section">
        <label htmlFor="site-register">유저 가입 설정</label>
        <button
          className={`${settings.allowUserRegistration ? 'button' : 'button-secondary'}`}
          onClick={handleChangeRegister}
        >
          {settings.allowUserRegistration ? '활성화' : '비활성화'}
        </button>
      </div>
    </div>
  );
}

export default Settings;
