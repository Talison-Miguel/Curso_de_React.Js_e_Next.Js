import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
    it('Should render a link', () => {
        renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);

        expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
    });

    it('Should render open in a new tab', () => {
        renderTheme(
            <MenuLink link="http://localhost" newTab={true}>
                Children
            </MenuLink>,
        );

        expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
    });

    it('Should render open in a new tab', () => {
        renderTheme(
            <MenuLink link="http://localhost" newTab={false}>
                Children
            </MenuLink>,
        );

        expect(screen.getByRole('link', { name: 'Children' })).toMatchSnapshot();
    });
});
