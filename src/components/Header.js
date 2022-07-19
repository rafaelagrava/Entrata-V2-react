import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h7" >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export const numberFormat = value =>
new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "PHP"
}).format(value);