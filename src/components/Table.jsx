import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import App from '../Containers/App'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell >Examen</TableCell>
          <TableCell numeric>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.state.prices.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell >{n.name}</TableCell>
                <TableCell numeric>                            
                <Button 
                  color="primary"
                  key={n.id}
                  title={n.price}
                  // primary={true} 
                  variant="raised"
                  type="submit"
                  // functions allows me to pass in the (item price and name as parameter)   
                  onClick={() => props.addPrices(n.price, n.name)}
                  >{n.price}</Button>   
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  addPrices: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleTable);