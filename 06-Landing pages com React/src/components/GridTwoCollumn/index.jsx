import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export function GridTwoCollumn({ title, text, srcImg, background = false }) {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Styled.TextContainer>
                    <Heading>{title}</Heading>
                    <TextComponent>{text}</TextComponent>
                </Styled.TextContainer>

                <Styled.ImageContainer>
                    <Heading>{title}</Heading>
                    <TextComponent>{text}</TextComponent>
                </Styled.ImageContainer>
            </Styled.Container>
        </SectionBackground>
    );
}

GridTwoCollumn.propTypes = {
    title: P.string.isRequired,
    text: P.string.isRequired,
    background: P.bool,
    srcImg: P.string.isRequired,
};
