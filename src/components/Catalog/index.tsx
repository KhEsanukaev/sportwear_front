// src/components/Header/index.tsx
import React from 'react';
import styles from './Catalog.module.scss';

const Catalog: React.FC = () => {
    return (
            <div className={styles.catalog}>
                <h3>Каталог</h3>
            </div>
    );
};

export default Catalog;