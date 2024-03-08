import styled, { css } from 'styled-components';
import * as Styled from './styles';
import { Heading } from '../../components/Heading';

// import { theme } from '../../styles/theme';

function Home() {
    return (
        <div className="App">
            <Styled.Wrapper>
                <Heading>O texto que eu quero</Heading>
            </Styled.Wrapper>
        </div>
    );
}

export default Home;
