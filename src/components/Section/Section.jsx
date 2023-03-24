import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

export function Section({title, children}) {
    return (
        <Container>
            {title && (<Title>{title}</Title>)}
            {children}
        </Container>
    );
};

Section.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string, 
    children: PropTypes.node,
};