import React, { useState } from 'react';
import Papa from 'papaparse';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const GBM = () => {
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [totalColumns, setTotalColumns] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [modelTrained, setModelTrained] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type !== 'text/csv') {
      setError('Please upload a .csv file.');
      setData([]);
      setTotalColumns(0);
      setTotalRows(0);
      setModelTrained(false);
    } else {
      setError('');
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
          setTotalColumns(Object.keys(results.data[0]).length);
          setTotalRows(results.data.length);
          setModelTrained(false);
        },
        error: (error) => {
          setError('Error parsing the file.');
          setData([]);
          setTotalColumns(0);
          setTotalRows(0);
          setModelTrained(false);
        }
      });
      console.log('File uploaded:', file);
    }
  };

  const handleTrainModel = () => {
    setModelTrained(true);
  };

  return (
    <div className='container mx-auto' style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '100%' }}>
      <Navbar />
      <div className='header'>
        <div className='text' style={{ color: '#00df9a', textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
          Training Dashboard
        </div>
        <div className='underline' style={{ borderBottom: '2px solid #00df9a', margin: '0 auto 20px', width: '50%' }}></div>
      </div>
      <div className='content'>
        <div className='box border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
          <div className='flex gap-6 justify-center'>
            <div className='my-auto'>
              <img src="https://img.icons8.com/?size=100&id=3QpOTWDqiqQU&format=png&color=000000" alt="" />
            </div>
            <div className='font-semibold text-6xl'>Gradient Boosting Machines</div>
          </div>
          <div className='mt-2 text-slate-400 text-center'>
            A machine learning technique that produces a prediction model in the form of an ensemble of weak prediction models, typically decision trees.
          </div>
          <div className='flex justify-center mt-4'>
            <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full'>
              REGRESSION
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=49445&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Key Concepts</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Boosting: Iterative technique combining weak learners to form a strong learner.</li>
              <li>Decision Trees: Often used as base learners.</li>
              <li>Gradient Descent: Optimization method to minimize errors in successive models.</li>
              <li>Learning Rate: Controls how much each model contributes to the ensemble.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=BEViFzYcviOb&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Applications</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Business: Predictive analytics for sales forecasting.</li>
              <li>Healthcare: Predicting patient outcomes based on medical data.</li>
              <li>Marketing: Customer churn prediction and personalized marketing.</li>
              <li>Finance: Risk assessment and fraud detection.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=8m89hFwpmX6a&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Advantages</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>High Accuracy: Often outperforms other machine learning algorithms.</li>
              <li>Handles Missing Data: Robust to missing values in the dataset.</li>
              <li>Flexible: Supports various loss functions and can be customized.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=VIv8t3G3jp6o&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Limitations</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Complexity: Prone to overfitting, especially with noisy data.</li>
              <li>Training Time: Can be computationally expensive.</li>
            </ul>
          </div>
        </div>

        <div className='flex justify-center'>
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ color: '#00df9a', fontSize: '1.1em', padding: '8px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '20px' }}
            accept=".csv"
          />
        </div>
        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
        {data.length > 0 && !modelTrained && (
          <div className='flex justify-center'>
            <button onClick={handleTrainModel} style={{ color: '#00df9a', fontSize: '1.1em', padding: '10px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '10px' }}>Train Model</button>
          </div>
        )}
        {data.length > 0 && (
          <div style={{ marginTop: '20px', color: '#ffffff', textAlign: 'left' }}>
            <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Columns: {totalColumns}</p>
            <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Rows: {totalRows}</p>
            <div style={{ maxHeight: '400px', overflowY: 'scroll', overflowX: 'auto', border: '1px solid #00df9a', borderRadius: '5px', marginTop: '10px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.1em' }}>
                <thead style={{ position: 'sticky', top: 0, backgroundColor: '#00df9a', zIndex: 1 }}>
                  <tr>
                    {Object.keys(data[0]).map((header, index) => (
                      <th key={index} style={{ border: '1px solid #00df9a', padding: '8px', color: '#ffffff', textAlign: 'left', textTransform: 'capitalize' }}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{ borderBottom: '1px solid #00df9a' }}>
                      {Object.values(row).map((value, index) => (
                        <td key={index} style={{ border: '1px solid #00df9a', padding: '8px', color: '#ffffff' }}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {modelTrained && (
          <div className='flex justify-center'>
            <div style={{ color: '#00df9a', fontSize: '1.5em', marginTop: '20px' }}>Model Trained Successfully!</div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GBM;
