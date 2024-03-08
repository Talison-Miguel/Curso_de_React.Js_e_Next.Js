import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: theme.colors.white
                },
                {
                    name: 'dark',
                    value: theme.colors.primaryColor
                }
            ]
        }
    },
};

export default preview;

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme }>
            <Story />
            <GlobalStyles />
        </ThemeProvider>
    )
]
