import './App.css';
import React, { useState } from "react";

import CSVInput from './CSVInput';
import ActionButton from './ActionButton';
import DataTable from './DataTable';
import ParsedCSV from './ParsedCSV';
import Shape from './Shape';

const App = () => {
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
        const csv = new ParsedCSV(e.target.files[0])
        setTimeout(() => {
          setData(csv.data)
        }, 1000);       
    }};

  function handleCalcClick() {
    const modData = [];
    data.map((row) => {
      const myShape = new Shape(row)
      let c3 = myShape.output;
      row.push(c3)
      modData.push(row)
    });
    setData(modData);
  } 

  return (
    <>
      <div className="w-3/4 h-screen m-auto p-3 bg-slate-300">
        <header className="text-4xl font-bold mb-5">
          React Shaper
        </header>
        <div className="flex flex-row gap-4 mb-5">
          <CSVInput onFileChange={(e) => handleFileChange(e)} />
          <ActionButton text="Calculate Shape" onButtonClick={handleCalcClick} />
        </div>
        <div>
          <DataTable data={data} />
        </div>
      </div>
    </>
  )
};

export default App;