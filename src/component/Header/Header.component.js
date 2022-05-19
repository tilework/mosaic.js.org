import DocsButton from '../DocsButton';
import ContentWrapper from '../ContentWrapper';
import GitHubButton from '../GitHubButton';
import SupportButton from '../SupportButton';
import './Header.style.scss';

const Header = () => (
    <header className="Header">
        <ContentWrapper className="Header-Wrapper">
            <a
            className="Header-Logo"
            href="/"
            >
                Mosaic
            </a>
            <nav className="Header-Nav">
                <SupportButton />
                <GitHubButton />
                <DocsButton />
            </nav>
        </ContentWrapper>
    </header>
);

export default Header;
