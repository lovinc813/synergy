"use client"

import {data as groupRowData } from '../../helper/group';


// import { useState, useEffect } from ‘React’;

import { log } from 'console';
import { useEffect, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

const GridTable = () => {
    interface ColDef {
        headerName: string;
        field?: string | null | undefined;
        hide?: boolean;
        sortable?: boolean;
        defaultColDef?: DefaultColDef;
       }

       interface DefaultColDef {
        resizable: boolean;
        editable?: boolean;
        sortable?: boolean;
       } 
    let defaultColDef = {
        sortable: true,
        resizable: true,
        editable: true,
    }
    const [columnDefs] = useState<ColDef[]>([
        { headerName: 'First Name', field: 'alpha_two_code' },
        { headerName: 'Country', field: 'country', sortable: false  },
        { headerName: 'Job Title', field: 'name' },
        { headerName: 'domains',field: 'domains' },
        { headerName: 'web pages',field: 'web_pages', hide: true }
      ],
      );
    const [rowData, setRowData] = useState([]);
    const [rowGroupData, setRowGroupData] = useState(groupRowData);


    useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=United+States',
    )
        .then((response) => response.json())
        .then((data) => setRowData(data));
        console.log('API data', rowData);
    }, []);
    return (  
        <div>
            <div 
            className="ag-theme-alpine"
            style={{ height: '600px' }}
            >
            {/* <AgGridReact
                id="staff_grid"
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                style={{ height: '100%', width: '100%' }}
                
            ></AgGridReact> */}
            </div>
        </div>
    );
}
 
export default GridTable;