import React, { useState, useEffect } from 'react';
import { calculateCosts } from './utils/calculator';

function App() {
  const [params, setParams] = useState({ hours: 720, storage: 100, bandwidth: 50, dbLevel: 'Standard' });
  const [results, setResults] = useState(null);

  useEffect(() => {
    setResults(calculateCosts(params));
  }, [params]);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">CFO Cloud Bot</h1>
          <p className="text-slate-500 italic">"Precision in every byte, clarity in every cent"</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Блок ввода данных */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold mb-6 border-b pb-2 text-slate-700">Infrastructure Specs</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600">Monthly Hours ({params.hours}h)</label>
                <input type="range" min="1" max="744" value={params.hours} 
                  onChange={(e) => setParams({...params, hours: parseInt(e.target.value)})}
                  className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer mt-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600">Storage (GB):</label>
                <input type="number" value={params.storage} 
                  onChange={(e) => setParams({...params, storage: parseInt(e.target.value)})}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600">DB Level:</label>
                <select value={params.dbLevel} onChange={(e) => setParams({...params, dbLevel: e.target.value})}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border">
                  <option>Basic</option><option>Standard</option><option>Premium</option>
                </select>
              </div>
            </div>
          </div>

          {/* Блок результатов */}
          <div className="bg-indigo-600 p-6 rounded-2xl shadow-xl text-white">
            <h2 className="text-xl font-semibold mb-6 border-b border-indigo-400 pb-2 text-indigo-100">Financial Forecast</h2>
            {results && Object.entries(results).map(([cloud, cost]) => (
              <div key={cloud} className="flex justify-between items-center mb-6 last:mb-0 bg-white/10 p-4 rounded-xl">
                <span className="text-lg font-medium">{cloud.toUpperCase()}</span>
                <span className="text-2xl font-bold">${cost.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <footer className="mt-12 text-center text-slate-400 text-sm">
          Built with SDD Methodology • Hosted on Firebase
        </footer>
      </div>
    </div>
  );
}

export default App;