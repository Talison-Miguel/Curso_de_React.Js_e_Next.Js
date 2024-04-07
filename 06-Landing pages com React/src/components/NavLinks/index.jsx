import P from 'prop-types';
import * as Styled from './styles';

import { MenuLink } from '../MenuLink';

export function NavLinks({ links = [] }) {
    return (
        <Styled.Container>
            {links.map((link) => (
                <MenuLink {...link} key={link.link} />
            ))}
        </Styled.Container>
    );
}

NavLinks.propTypes = {
    links: P.arrayOf(
        P.shape({
            children: P.string.isRequired,
            link: P.string.isRequired,
            newTab: P.bool,
        }),
    ),
};
