export const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

export const cardStyle = {
    card: {
        width: 400,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px 0 0 0'
    },
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        margin: '5px' ,
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        borderBottom: '1px solid'
    }
}

export const inputStyles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    }
  });