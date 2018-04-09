import React from 'react';

 const PrintButton = (props)=>{
  return (
    <div className="print-button">
        <label>Print</label>
        <h1>printing...</h1>
        <button onClick={ () => window.print()}>PRINT</button>
    </div>
  );
}

export default PrintButton