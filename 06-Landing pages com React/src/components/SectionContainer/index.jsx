import P from 'prop-types';
import * as Styled from './styles';

export function SectionContainer({ children }) {
    return <Styled.Container>{children}</Styled.Container>;
}

SectionContainer.propTypes = {
    children: P.node.isRequired,
};
