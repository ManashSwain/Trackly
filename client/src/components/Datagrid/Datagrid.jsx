/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridReact } from 'ag-grid-react';

ModuleRegistry.registerModules([AllCommunityModule]);

const Datagrid = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950 },
        { make: "Ford", model: "F-Series", price: 33850},
        { make: "Toyota", model: "Corolla", price: 29600 },
        { make: "Toyota", model: "Corolla", price: 29600 },
        { make: "Toyota", model: "Corolla", price: 29600 },
        { make: "Toyota", model: "Corolla", price: 29600 },
        { make: "Toyota", model: "Corolla", price: 29600 },
        { make: "Toyota", model: "Corolla", price: 29600 },
        { make: "Toyota", model: "Corolla", price: 29600 },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "make", flex: 1 },
        { field: "model", flex: 1 },
        { field: "price", flex: 1 },
    ]);

  return (
   <>
    <div className='ag-theme-alpine' style={{ width: '100%' , padding:'40px'}}>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            domLayout="autoHeight"
        />
    </div>

   </>
  )
}

export default Datagrid
