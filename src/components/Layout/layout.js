import React from 'react';
import styles from './layout.module.css';
import Aux from '../../hoc/Aux'

const layout = (props) => {
    return (

        <Aux>
        <div>toolbar,sidedrawer,backdrop </div>
       <main className={styles.content}>
       {props.children}
       </main>

        
        </Aux>

    )
};

export default layout;