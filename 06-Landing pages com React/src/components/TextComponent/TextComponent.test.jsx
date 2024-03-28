import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
    it('Should render text', () => {
        renderTheme(<TextComponent>Children</TextComponent>);
        expect(screen.getByText('Children')).toBeInTheDocument();
    });

    it('Should match snapshot', () => {
        const { container } = renderTheme(<TextComponent>Children</TextComponent>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
