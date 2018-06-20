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
        height: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '50px 0 0 0',
        
    },
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        margin: 50
    }
}

export const inputStyles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    }
  });