import { renderTheme } from '../../styles/renderTheme';
import Home from '.';

describe('<Home />', () => {
    it('should render home', () => {
        renderTheme(<Home />);
    });
});
