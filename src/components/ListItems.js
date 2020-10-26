import React from 'react';
import {ListItemIcon,ListItemText,ListItem,Divider,Tooltip,ListSubheader,Collapse,List} from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//import { createBrowserHistory } from "history";
//import {   withRouter  } from "react-router-dom";

//import HomePage from "../Pages/Homepage";
//import TransactionTab from "../Pages/TransactionTab";


// function ListItems(props){
// const { history } = props;
// const itemsList = [
//     {
//       text: "Dashboard",
//       icon: <Icon.Dashboard/>,
//       onClick: () => history.push("/"),
//       title: "Dashboard"
//     },
//     {
//       text: "Transaction",
//       icon: <Icon.ShoppingCart />,
//       onClick: () => history.push("/transaction"),
//       title: "Transaction"
//     },
//     {
//       text: "Customer",
//       icon: <Icon.People />,
//       onClick: () => history.push("/customer"),
//       title: "Customer"
//     },
//     {
//       text: "Reports",
//       icon: <Icon.BarChart />,
//       onClick: () => history.push("/reports"),
//       title: "Reports"
//     },
//     {
//       text: "Admin",
//       icon: <Icon.Person/>,
//       onClick: () => history.push("/admin"),
//       title: "Admin"

//     }
//   ];

//   const itemsList2 = [
//     {
//       text: "Login",
//       icon: <Icon.Dashboard/>,
//       onClick: () => history.push("/login")
//     },
//     {
//       text: "Transaction",
//       icon: <Icon.ShoppingCart />,
//       onClick: () => history.push("/transaction")
//     },
//     {
//       text: "Customers",
//       icon: <Icon.People />,
//       onClick: () => history.push("/customers")
//     },
//     {
//       text: "Reports",
//       icon: <Icon.BarChart />,
//       onClick: () => history.push("/reports")
//     },
//     {
//       text: "Logout",
//       icon: <Icon.ExitToApp/>,
//       onClick: () => history.push("/logout"),
//       title: "Logout"
//     }
//   ];
//   return(
//     <List>
//         {itemsList.map((item, index) => {
//           const { text, icon, onClick,title } = item;
//           return (
//             <Tooltip title = {title} placement="right">
//             <ListItem button key={text} onClick={onClick} >
//               {icon && <ListItemIcon>{icon}</ListItemIcon>}
//               <ListItemText primary={text} />
//             </ListItem>
//             </Tooltip>
//           );
//         })}
//         <Divider></Divider>

//         {itemsList2.map((item, index) => {
//           const { text, icon, onClick, title} = item;
//           return (
//             <Tooltip title = {title} placement="right">
//             <ListItem button key={text} onClick={onClick}>
//               {icon && <ListItemIcon>{icon}</ListItemIcon>}
//               <ListItemText primary={text} />
//             </ListItem>
//             </Tooltip>
//           );
//         } 
//         )}
//       </List>
// );
// } export default withRouter(ListItems);

// function ListItems() {
//   return(
//   <List>{mainListItems}</List>
//   );
//   }export default ListItems;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

//const [open, setOpen] = React.useState(true);

// const handleClick = () => {
//   setOpen(!open);
// };

// export const mainListItems = (
//     <div>
// <Tooltip title= "Dashboard" placement="right">
//   <ListItem button component={Link} to="/">
//     <ListItemIcon>
//       <Icon.Dashboard />
//     </ListItemIcon>
//     <ListItemText primary="Dashboard"/>
//   </ListItem>
// </Tooltip>

// <Tooltip title= "Transaction" placement="right">
//   <ListItem button component={Link} to="/transaction">
//     <ListItemIcon>
//       <Icon.ShoppingCart />
//     </ListItemIcon>
//     <ListItemText primary="Transaction" />
//   </ListItem>


// </Tooltip>

// <Tooltip title= "Customer" placement="right">
//   <ListItem button component={Link} to="/customer">
//     <ListItemIcon>
//       <Icon.People />
//     </ListItemIcon>
//     <ListItemText primary="Customers" />
//   </ListItem>
// </Tooltip>

// <Tooltip title= "Reports" placement="right">
//   <ListItem button component={Link} to="/reports" >
//     <ListItemIcon>  
//       <Icon.BarChart />
//     </ListItemIcon>
//     <ListItemText primary="Reports" />
//   </ListItem>
// </Tooltip> 

// <Tooltip title= "Admin" placement="right">
//   <ListItem button component={Link} to="/admin">
//     <ListItemIcon>
//       <Icon.Layers />
//     </ListItemIcon>
//     <ListItemText primary="Admin" />
//   </ListItem>
// </Tooltip>

//   <Divider/>

//   <ListSubheader inset>AMLC Reports</ListSubheader>

//       <ListItem button>
//         <ListItemIcon>  
//           <Icon.Assignment />
//         </ListItemIcon>
//         <ListItemText primary="Current month" />
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon>
//         <Icon.Assignment />
//         </ListItemIcon>
//         <ListItemText primary="Last quarter" />
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon>
//         <Icon.Assignment />
//         </ListItemIcon>
//         <ListItemText primary="Year-end sale" />
//       </ListItem>

// </div>
// );

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(2),
  },
  listItemText:{
    fontSize: '100rem', //Insert your required size
  }
}));


function MainlistItem(){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return(
  
  <div>

<Tooltip title= "Dashboard" placement="right">
  <ListItem button component={Link} to="/">
    <ListItemIcon>
      <Icon.Dashboard />
    </ListItemIcon>
    <ListItemText primary="Dashboard"/>
  </ListItem>
</Tooltip>

<Tooltip title= "Transaction Management" placement="right">
  <ListItem button onClick={handleClick}>
    <ListItemIcon>
      <Icon.ShoppingCart />
    </ListItemIcon>
    <ListItemText  primary="Transaction" />
    {open ? <Icon.ArrowDropUp /> : <Icon.ArrowDropDown />}
  </ListItem>
</Tooltip>  

<Collapse in={open} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
  <Tooltip title= "Encoding Tab" placement="right">
    <ListItem button className={classes.nested} >
        <ListItemIcon>
            <Icon.Queue />
        </ListItemIcon>
        <ListItemText secondary="Encode Transaction" />
    </ListItem>
  </Tooltip>
<Tooltip title= "List of Transaction" placement="right">
    <ListItem button className={classes.nested} component={Link} to="/transaction" >
        <ListItemIcon>
            <Icon.Description />
        </ListItemIcon>
        <ListItemText secondary="Transaction List" />
    </ListItem>
</Tooltip>
  </List>
</Collapse>

<Tooltip title= "Customer" placement="right">
  <ListItem button component={Link} to="/customer">
    <ListItemIcon>
      <Icon.People />
    </ListItemIcon>
    <ListItemText primary="Customers" />
  </ListItem>
</Tooltip>

<Tooltip title= "Reports" placement="right">
  <ListItem button component={Link} to="/reports" >
    <ListItemIcon>  
      <Icon.BarChart />
    </ListItemIcon>
    <ListItemText primary="Reports" />
  </ListItem>
</Tooltip> 

<Tooltip title= "Admin" placement="right">
  <ListItem button component={Link} to="/admin">
    <ListItemIcon>
      <Icon.Layers />
    </ListItemIcon>
    <ListItemText primary="Admin" />
  </ListItem>
</Tooltip>

<Divider/>

<ListSubheader inset>AMLC Reports</ListSubheader>

      <ListItem button>
         <ListItemIcon>  
           <Icon.Assignment />
         </ListItemIcon>
         <ListItemText primary="Current month" />
       </ListItem>
       <ListItem button>
         <ListItemIcon>
         <Icon.Assignment />
         </ListItemIcon>
         <ListItemText primary="Last quarter" />
       </ListItem>
       <ListItem button>
         <ListItemIcon>
         <Icon.Assignment />
         </ListItemIcon>
         <ListItemText primary="Year-end sale" />
        </ListItem>

</div>
  );
}export default MainlistItem;