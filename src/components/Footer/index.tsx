// Footer
// // src/components/Header/index.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
            <p>© 2025 Магазин спортивной одежды. Все права защищены.</p>
            </Container>
        </footer>
    );
};

export default Footer;