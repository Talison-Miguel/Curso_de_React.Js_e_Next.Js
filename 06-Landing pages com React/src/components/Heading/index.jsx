import P from 'prop-types';
import * as Styled from './styles';

export function Heading({ children, colordark = true, as = 'h1', size = 'huge', uppercase = false }) {
    const isTesting = typeof jest !== 'undefined';

    return (
        <Styled.Title
            colordark={isTesting ? (colordark ? 'true' : 'false') : colordark}
            as={as}
            size={size}
            uppercase={isTesting ? (uppercase ? 'true' : 'false') : uppercase}
        >
            {children}
        </Styled.Title>
    );
}

Heading.propTypes = {
    children: P.node.isRequired,
    colordark: P.bool,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    size: P.oneOf(['small', 'medium', 'big', 'huge']),
    uppercase: P.bool,
};
