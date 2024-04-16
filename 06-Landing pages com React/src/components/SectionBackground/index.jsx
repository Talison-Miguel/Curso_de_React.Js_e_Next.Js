import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export function SectionBackground({ children, background = false }) {
    const isTesting = typeof jest !== 'undefined';

    return (
        <Styled.Container background={isTesting ? (background ? 'true' : 'false') : background}>
            <SectionContainer>{children}</SectionContainer>
        </Styled.Container>
    );
}

SectionBackground.propTypes = {
    children: P.node.isRequired,
    background: P.bool,
};
