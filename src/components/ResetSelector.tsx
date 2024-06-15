import React, { useState, useEffect } from 'react';
import { resets, Reset } from '../data/resets';
import './ResetSelector.css';

const ResetSelector: React.FC = () => {
  const [selectedReset, setSelectedReset] = useState<Reset | null>(null);

  useEffect(() => {
    const defaultReset = resets.find(r => r.name === 'Epson L220') || null;
    setSelectedReset(defaultReset);
  }, []);

  return (
    <div className="container">
      <div className="reset-selector">
        <h3 className="resets-title">Resets</h3>
        <div className="selector-and-details">
          <div className="selector-container">
            <h2>Selecione a Impressora:</h2>
            <select 
              value={selectedReset ? selectedReset.name : ''} 
              onChange={(e) => setSelectedReset(resets.find(r => r.name === e.target.value) || null)}
            >
              {resets.map((reset) => (
                <option key={reset.name} value={reset.name}>
                  {reset.name}
                </option>
              ))}
            </select>
          </div>

          {selectedReset && (
            <div className="reset-details">
              <h1 className="reset-title">{selectedReset.name}</h1>
              <div className="image-container">
                <img src={selectedReset.image} alt={selectedReset.name} />
              </div>
              <div className="button-group">
                <a href={selectedReset.download} target="_blank" rel="noopener noreferrer">
                  <button className="download-button">Download</button>
                </a>
                <p className="file-password">Senha do arquivo: reset</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetSelector;