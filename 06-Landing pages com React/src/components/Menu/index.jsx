import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export function Menu({ links, logoData }) {
    const [visible, setVisible] = useState(false);
    const isTesting = typeof jest !== 'undefined';

    return (
        <>
            <Styled.Button
                visible={isTesting ? (visible ? 'true' : 'false') : visible}
                onClick={() => setVisible(true)}
                aria-label="Open/Close menu"
            >
                {visible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
            </Styled.Button>
            <Styled.Container
                visible={isTesting ? (visible ? 'true' : 'false') : visible}
                onClick={() => setVisible(false)}
            >
                <SectionContainer>
                    <Styled.MenuContainer>
                        <LogoLink {...logoData} />
                        <NavLinks links={links} />
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </>
    );
}

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired,
};
