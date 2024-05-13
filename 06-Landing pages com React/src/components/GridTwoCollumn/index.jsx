import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export function GridTwoCollumn({ title, text, srcImg, background = false }) {
    return (
        <SectionBackground background={background}>
            <Styled.Container background={background}>
                <Styled.TextContainer>
                    <Heading uppercase colordark={!background}>
                        {title}
                    </Heading>
                    <TextComponent>{text}</TextComponent>
                </Styled.TextContainer>

                <Styled.ImageContainer>
                    <Styled.Image src={srcImg} alt={title} />
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
