import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { styles } from './NavButtons.styles';

const NavButtons = (props) => {
    return (
        <div style={styles.profileCardButtons}>
            <Button style={styles.directButtons}><NavLink to='/perfil' style={styles.navLinks}>Inicio</NavLink></Button>
            <Button style={styles.directButtons}><NavLink to='/perfil/ordenes' style={styles.navLinks} >Ordenes Recientes</NavLink></Button>
            <Button style={styles.directButtons}><NavLink to='/examenes' style={styles.navLinks} >Crear Orden</NavLink></Button>
            <Button style={styles.directButtons}>Pacientes</Button>
            <Button style={styles.directButtons}>Servicios</Button>
        </div>
    )
}

export default NavButtons;