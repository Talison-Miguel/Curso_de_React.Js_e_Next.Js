import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export function GridContent({ title, html, background = false }) {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading uppercase colordark={!background}>
                    {title}
                </Heading>
                <Styled.Html></Styled.Html>
                <TextComponent>{html}</TextComponent>
            </Styled.Container>
        </SectionBackground>
    );
}

GridContent.propTypes = {
    title: P.string.isRequired,
    html: P.string.isRequired,
    background: P.bool,
};
