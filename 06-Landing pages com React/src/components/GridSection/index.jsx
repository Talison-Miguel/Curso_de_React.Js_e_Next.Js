import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground';

export function GridSection({ children }) {
    return (
        <SectionBackground>
            <Styled.Container>
                <h1>{children}</h1>
            </Styled.Container>
        </SectionBackground>
    );
}

GridSection.propTypes = {
    children: P.node.isRequired,
};
