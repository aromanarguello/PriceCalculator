export const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });

  export const modalContentStyles = {
      modalContainer: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          listStyle: 'none'
      },
      modalHeader: {
          textAlign: 'center',
          margin: '0 0 10px 0',
          borderBottom: '1px solid'
      }
  }