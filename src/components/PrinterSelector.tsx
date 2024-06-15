// src/components/PrinterSelector.tsx
import React, { useState, useEffect } from 'react';
import { printers, Printer } from '../data/printers';
import './PrinterSelector.css';

const PrinterSelector: React.FC = () => {
  const [selectedPrinter, setSelectedPrinter] = useState<Printer | null>(null);

  useEffect(() => {
    const defaultPrinter = printers.find(p => p.name === 'Epson L220') || null;
    setSelectedPrinter(defaultPrinter);
  }, []);

  return (
    <div className="container">
      <div className="printer-selector">
        <h3 className="drivers-title">Drivers</h3>
        <div className="selector-and-details">
          <div className="selector-container">
            <h2>Selecione a Impressora:</h2>
            <select 
              value={selectedPrinter ? selectedPrinter.name : ''} 
              onChange={(e) => setSelectedPrinter(printers.find(p => p.name === e.target.value) || null)}
            >
              {printers.map((printer) => (
                <option key={printer.name} value={printer.name}>
                  {printer.name}
                </option>
              ))}
            </select>
          </div>

          {selectedPrinter && (
            <div className="printer-details">
              <h1 className="printer-title">{selectedPrinter.name}</h1>
              <div className="image-container">
                <img src={selectedPrinter.image} alt={selectedPrinter.name} />
              </div>
              <div className="button-group">
                <a href={selectedPrinter.downloads.x32} target="_blank" rel="noopener noreferrer">
                  <button className="download-button">Download 32 bits</button>
                </a>
                <a href={selectedPrinter.downloads.x64} target="_blank" rel="noopener noreferrer">
                  <button className="download-button">Download 64 bits</button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrinterSelector;