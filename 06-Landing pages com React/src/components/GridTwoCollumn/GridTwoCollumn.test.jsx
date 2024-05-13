import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoCollumn } from '.';

import mock from './mock';

describe('<GridTwoCollumn />', () => {
    it('Should render grid with two columns', () => {
        const { container } = renderTheme(<GridTwoCollumn {...mock} />);

        expect(container).toMatchSnapshot();
    });
});
