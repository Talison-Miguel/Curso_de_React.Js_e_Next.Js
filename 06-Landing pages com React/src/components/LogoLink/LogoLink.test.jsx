import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

import { theme } from '../../styles/theme';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

describe('<LogoLink />', () => {
    it('should render text logo', () => {
        renderTheme(<LogoLink link="#target" text="Olá mundo!" />);
        const heading = screen.getByRole('heading', { name: 'Olá mundo!' });
        expect(screen.getByRole('heading', { name: 'Olá mundo!' })).toBeInTheDocument();
        expect(heading.firstChild).toHaveAttribute('href', '#target');
    });

    it('should render image logo', () => {
        renderTheme(<LogoLink link="#target" text="Olá mundo!" srcImg="image.jpg" />);
        expect(screen.getByAltText('Olá mundo!')).toHaveAttribute('src', 'image.jpg');
    });

    it('should  match snapshot', () => {
        const { container } = renderTheme(<LogoLink link="#target" text="Olá mundo!" srcImg="image.jpg" />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
