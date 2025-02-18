import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    setName(items.find(i => i.id === parseInt(id))?.name || '');
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('items')) || [];
    localStorage.setItem('items', JSON.stringify(items.map(i => (i.id === parseInt(id) ? { ...i, name } : i))));
    navigate('/');
  };

  return (
    <form onSubmit={handleUpdate}>
      <input value={name} onChange={e => setName(e.target.value)} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default Edit;
