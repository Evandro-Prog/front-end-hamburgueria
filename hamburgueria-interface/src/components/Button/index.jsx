import PropTypes from 'prop-types';
import { ContainerButton } from './styles.js';

export function Button({ children }) {
    return (
        <ContainerButton>{children}</ContainerButton>
    )
}

Button.prototypes = {
    children: PropTypes.string,
}

