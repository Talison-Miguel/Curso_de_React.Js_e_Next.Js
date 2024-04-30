import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import { Menu } from '.';
import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';

const logoData = {
    text: 'Logo',
    link: '#target',
};

describe('<Menu />', () => {
    it('Should render logo and main menu nav', () => {
        const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
        expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();

        expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('Should render menu mobile and button for open and close the menu', () => {
        const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);

        const button = screen.getByLabelText('Open/Close menu');
        const menuContainer = button.nextSibling;

        expect(button).toHaveStyleRule('display', 'none');

        expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

        fireEvent.click(button);
    });

    it('Should not render links', () => {
        const { container } = renderTheme(<Menu logoData={logoData} />);

        expect(screen.queryByRole('navigation', { name: 'Main menu' }).firstChild).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
