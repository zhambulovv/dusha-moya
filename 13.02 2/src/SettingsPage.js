import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

const initialSettings = {
  id: { visible: true, width: 100, bgColor: '#000000' },
  title: { visible: true, width: 200, bgColor: '#000000' },
  price: { visible: true, width: 100, bgColor: '#000000' },
  description: { visible: true, width: 300, bgColor: '#000000' },
};

const SettingsPage = () => {
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem('settings')) || initialSettings
  );

  const navigate = useNavigate();

  const handleChange = (key, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  const saveSettings = () => {
    localStorage.setItem('settings', JSON.stringify(settings));
    navigate('/');
  };

  const columns = Object.keys(initialSettings);

  return (
    <div className="settings-page">
      <h1>⚙️ Настройки таблицы</h1>
      {columns.map((col) => (
        <div key={col} className="setting-row">
          <span>{col.toUpperCase()}</span>
          <label>
            Видимость:
            <input
              type="checkbox"
              checked={settings[col].visible}
              onChange={(e) => handleChange(col, 'visible', e.target.checked)}
            />
          </label>
          <label>
            Ширина (px):
            <input
              type="number"
              value={settings[col].width}
              onChange={(e) => handleChange(col, 'width', Number(e.target.value))}
            />
          </label>
          <label>
            Цвет фона:
            <input
              type="color"
              value={settings[col].bgColor}
              onChange={(e) => handleChange(col, 'bgColor', e.target.value)}
            />
          </label>
        </div>
      ))}
      <button className="save-btn" onClick={saveSettings}>Сохранить изменения</button>
    </div>
  );
};

export default SettingsPage;
