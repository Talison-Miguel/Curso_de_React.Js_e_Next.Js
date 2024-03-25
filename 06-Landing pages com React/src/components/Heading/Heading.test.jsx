import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
    it('should render with default values', () => {
        renderTheme(<Heading>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            color: theme.colors.primaryColor,
            'font-size': theme.font.sizes.xhuge,
            'text-transform': 'uppercase',
        });
    });

    it('should render with primaryColor color', () => {
        renderTheme(<Heading colordark={false}>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            color: theme.colors.primaryColor,
        });
    });

    it('should render correct render sizes', () => {
        const { rerender } = renderTheme(<Heading size={'small'}>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.medium,
        });

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size={'big'}>texto</Heading>
            </ThemeProvider>,
        );

        expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
            'font-size': theme.font.sizes.xlarge,
        });

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size={'medium'}>texto</Heading>
            </ThemeProvider>,
        );

        expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
            'font-size': theme.font.sizes.large,
        });

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size={'huge'}>texto</Heading>
            </ThemeProvider>,
        );

        expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
            'font-size': theme.font.sizes.xhuge,
        });
    });

    it('should render correct font sizes when using mobile', () => {
        const { rerender } = renderTheme(<Heading size={'small'}>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size={'small'}>texto</Heading>
            </ThemeProvider>,
        );

        expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle(`font-size: ${theme.font.sizes.medium}`, {
            media: theme.media.lessThanMedium,
        });
    });

    it('should render with uppercase letters', () => {
        renderTheme(<Heading uppercase>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            'text-transform': 'uppercase',
        });
    });

    it('should render correct heading element', () => {
        const { container } = renderTheme(<Heading as="h6">texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });
        const h6 = container.querySelector('h6');

        expect(h6.tagName.toLowerCase()).toBe('h6');
    });
});
