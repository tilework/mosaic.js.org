import './UsedBy.style.scss';
import Heading from '../Heading';
import ContentWrapper from '../ContentWrapper';

import pwaLogo from './pwa-logo.png';
import pumaLogo from './puma-logo.svg';
import moninLogo from './monin-logo.svg';
import sweetLogo from './sweet-logo.png';

export function UsedBy() {
    return (
        <section className="UsedBy">
            <ContentWrapper>
                <Heading type="h2" className="UsedBy-SubHeading">Used by hundreds today</Heading>
                <div className="UsedBy-Images">
                    <img src={ pwaLogo } alt="ScandiPWA logo" />
                    <img src={ pumaLogo } alt="Puma logo" />
                    <img src={ moninLogo } alt="Monin logo" />
                    <img src={ sweetLogo } alt="Sweet.io logo" />
                </div>
            </ContentWrapper>
        </section>
    );
};