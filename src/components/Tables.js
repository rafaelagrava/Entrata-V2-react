import React from 'react'
import MaterialTable from 'material-table'
// import {  } from '@material-ui/icons'



export const Table = ()=>{
    const data = [
        {id:1,name:'Rafael',status:'Pending'},
        {id:2,name:'Chesco',status:'Pending'},
        {id:3,name:'Cardo',status:'Pending'},
        {id:1,name:'Rafael',status:'Pending'},
        {id:2,name:'Chesco',status:'Pending'},
        {id:3,name:'Cardo',status:'Pending'},
        {id:1,name:'Rafael',status:'Pending'},
        {id:2,name:'Chesco',status:'Pending'},
        {id:3,name:'Cardo',status:'Pending'}
    ]
    const Column= [
        {title: 'Id', field: 'id'},
        {title: 'Name', field: 'name'},
        {title: 'Status', field: 'status'}

    ]

    return(
        <div>
        <MaterialTable title = "List of Transaction"
        data = {data}
        columns = {Column}
       
        options = {{
            exportButton : true,
            actionsColumnIndex: -1,

            headerStyle: {
              backgroundColor: '#3f51b5',
              color: '#FFFF'
              }
        }}
        
        actions={[

            {
                tooltip: 'Update Selected Users',
                icon: 'update',
                onClick: (evt, data) =>  alert('You want to update ' + data.id + ' rows')
            },

            {
              tooltip: 'Remove All Selected Users',
              icon: 'delete',
              onClick: (evt, data) => alert('You want to delete ' + data.id + ' rows')
            }

          ]}

        />
       

        </div>
    );
}


export const CustomerTable = ()=>{
    const data = [
        {id:1,name:'Rafael',status:'Pending'},
        {id:2,name:'Chesco',status:'Pending'},
        {id:3,name:'Cardo',status:'Pending'}
    ]
    const Column= [
        {title: 'Id', field: 'id'},
        {title: 'Name', field: 'name'},
        {title: 'Status', field: 'status'}

    ]

    return(
        <div>
        <MaterialTable title = "List of Transaction"
        data = {data}
        columns = {Column}
       
        options = {{
            exportButton : true,
            filtering: true,
            actionsColumnIndex: -1,

        }}
        
        // actions={[

        //     {
        //         tooltip: 'Update Selected Users',
        //         icon: 'update',
        //         onClick: (evt, data) => alert('You want to update ' + data.id + ' rows')
        //     },

        //     {
        //       tooltip: 'Remove All Selected Users',
        //       icon: 'delete',
        //       onClick: (evt, data) => alert('You want to delete ' + data.id + ' rows')
        //     }

        //   ]}
        />
       

        </div>
    );
}


export function Editable() {
    const { useState } = React;
  
    const [columns] = useState([
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ]);
  
    const [data, setData] = useState([
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);
  
    return (
      <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={data}
        options = {{
          exportButton : true,
          actionsColumnIndex: -1,
          doubleHorizontalScroll: true,
      }}
        
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }