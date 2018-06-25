import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Table.styles'
import { 
  Paper, 
  Table,
  TableBody,
  TableCell, 
  TableHead, 
  TableRow, 
  Button
} from '@material-ui/core';

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
          {props.state.prices.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell >{n.name}</TableCell>
                <TableCell numeric>                            
                <Button 
                  color="primary"
                  key={n.price}
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

export default withStyles(styles)(SimpleTable);