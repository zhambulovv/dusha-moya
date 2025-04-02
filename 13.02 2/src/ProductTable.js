import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductTable.css';

const PAGE_SIZE = 20;

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [settings, setSettings] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10000')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Ошибка загрузки данных:', err));

    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const totalPages = useMemo(() => Math.ceil(products.length / PAGE_SIZE), [products]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return products.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, products]);

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Название' },
    { key: 'price', label: 'Цена' },
    { key: 'description', label: 'Описание' },
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>🛍️ Неоновая таблица товаров</h1>
        <button className="settings-btn" onClick={() => navigate('/settings')}>⚙️</button>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((col) => {
              const colSettings = settings[col.key] || {};
              if (colSettings.visible === false) return null;
              return (
                <th
                  key={col.key}
                  style={{
                    width: colSettings.width ? `${colSettings.width}px` : 'auto',
                    backgroundColor: colSettings.bgColor || 'inherit',
                  }}
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentData.map((product) => (
            <tr key={product.id}>
              {columns.map((col) => {
                const colSettings = settings[col.key] || {};
                if (colSettings.visible === false) return null;
                return (
                  <td
                    key={col.key}
                    style={{
                      backgroundColor: colSettings.bgColor || 'inherit',
                    }}
                  >
                    {product[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
