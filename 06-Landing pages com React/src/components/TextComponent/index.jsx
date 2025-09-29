import P from 'prop-types';
import * as Styled from './styles';

// eslint-disable-next-line react/prop-types
export function TextComponent({ children }) {
    return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
}

TextComponent.propTypes = {
    children: P.node.isRequired,
};
