import styled, { css } from 'styled-components';

const titleSize = {
    small: (theme) => css`
        font-size: ${theme.font.sizes.medium};
    `,
    medium: (theme) => css`
        font-size: ${theme.font.sizes.large};
    `,
    big: (theme) => css`
        font-size: ${theme.font.sizes.xlarge};
    `,
    huge: (theme) => css`
        font-size: ${theme.font.sizes.xhuge};
        ${mediaFont(theme)}
    `,
};

const mediaFont = (theme) => css`
    @media ${theme.media.lessThanMedium} {
        font-size: ${theme.font.sizes.xlarge};
    }
`;

const titleCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
    ${({ theme, colordark, size, uppercase }) => css`
        color: ${colordark ? theme.colors.primaryColor : theme.colors.white};
        ${titleSize[size](theme)}
        ${titleCase(uppercase)}
    `}
`;
