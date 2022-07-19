import React, {useEffect} from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Header';
import * as Icon from '@material-ui/icons';
import Api from '../helper/Api'
import NumberFormat from 'react-number-format';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});






export const TotalAmount = ()=>{
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Total Amount</Title>
      <Typography component="p" variant="h4">
         500,000.00
      {/* <NumberFormat value={data.NumberFormat} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 03 December, 2020
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link> */}
        <Icon.MonetizationOn style={{ fontSize: '60px', color: 'blue' }}/>
      </div>
    </React.Fragment>
  );
}

export const TotalTransaction = ()=>{

  const classes = useStyles();
  const api = new Api();
  const [data, setData] = React.useState([])

useEffect(() => {
  api.countTransaction()
  .then((response) =>  setData(response.data))
  .catch(err => console.log(err));
  },[])

  return (
    <React.Fragment>
      <Title>Total Transaction</Title>
      <Typography component="p" variant="h4">
        {data}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 03 December, 2020
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link> */}
        <Icon.GroupWork style={{ fontSize: '60px', color: 'blue' }}/>
      </div>
    </React.Fragment>
  );
}

export const TotalPostedTransaction = ()=>{
    const classes = useStyles();
    return (
      <React.Fragment>
        <Title>Posted Transaction</Title>
        <Typography component="p" variant="h4">
          1,500
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          as of 03 December, 2020
        </Typography>
        <div>
          {/* <Link color="primary" href="#" onClick={preventDefault}>
           View details
          </Link> */}
          <Icon.CheckCircle style={{ fontSize: '60px', color: 'blue' }}/>
        </div>
      </React.Fragment>
    );
  }


  export const TotalFailedTransaction = ()=>{
    const classes = useStyles();
    return (
      <React.Fragment>
        
        <Title>Failed Transaction</Title>
        <Typography component="p" variant="h4">
          20
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          as of 03 December, 2020
        </Typography>
        <div>

        <Icon.Error style={{ fontSize: '60px',color: 'blue' }}/>
          {/* <Link color="primary" href="#" onClick={preventDefault}>
           View details
          </Link> */}
        </div>
      </React.Fragment>
    );

 
  }