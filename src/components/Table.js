import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper';
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
          <TableCell>Examen</TableCell>
          <TableCell numeric>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(props.state)}
          {props.state.prices.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell numeric>{n.name}</TableCell>
                <TableCell numeric>                            
                <Button 
                  key={n.id}
                  title={n.price}
                  // primary={true} 
                  variant="raised"
                  type="submit"
                  // functions allows me to pass in the (item price and name as parameter)   
                  onClick={() => props.addPrices(n.price, n.name)}
                  />   
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
  state: PropTypes.array.isRequired,
  addPrices: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleTable);