// src/components/Header/index.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <h3>Магазин спортивной одежды</h3>
            </Container>
        </header>
    );
};

export default Header;