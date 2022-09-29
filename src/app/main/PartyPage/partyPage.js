import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function PartyPage() {
  const [rowData, setRowData] = useState();

  const [colDefs, setColDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price', editable: 'true' },
  ]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://www.ag-grid.com/example-assets/row-data.json');
      setRowData(result.data);
    }
    fetchData();
  });

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        defaultColDef={{ sortable: true, filter: true }}
        pagination
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
}
