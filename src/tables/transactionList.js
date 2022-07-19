import MaterialTable from 'material-table'
import Api from '../helper/Api'
import React, {useEffect} from 'react';

export const TransactionList = ()=>{

    const api = new Api();
    const [data, setData] = React.useState([])
  

      const Column= [
          {title: 'Transaction Type', field: 'transactionType'},
          {title: 'Transaction ID', field: 'transactionCode'}, 
          {title: 'Amount', field: 'totalRemittance'},
          {title: 'Status', field: 'status'},
          {title: 'Country', field: 'location.name'}
  ]
  
      useEffect(() => {
        api.getUserList()
        .then((response) =>  setData(response.data))
        .catch(err => console.log(err));
        },[])
  
      return(
          <div>
          <MaterialTable title = "Recent Transaction"
          data = {data.result}
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
                tooltip: 'Post Selected Transaction',
                icon: 'update',
                onClick: (evt, data) =>  alert('This transaction is Successfully Posted ' + data.transConfirmationCode )
            },

            {
              tooltip: 'Void Selected Transaction',
              icon: 'delete',
              onClick: (evt, data) => alert('This transaction is Successfully Voided ' + data.transConfirmationCode )
            }

          ]}

          
          />
          </div>
      );
  }