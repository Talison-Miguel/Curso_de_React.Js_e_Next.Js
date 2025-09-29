import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridContent } from '.';

import mock from './mock';

describe('<GridContent />', () => {
    it('Should render grid content', () => {
        const { container } = renderTheme(<GridContent {...mock} />);

        expect(container).toMatchSnapshot();
    });
});
