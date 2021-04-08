import Button from '../Button';
import ContentWrapper from '../ContentWrapper';
import GitHubButton from '../GitHubButton';
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
                <Button>Docs</Button>
                <GitHubButton />
            </nav>
        </ContentWrapper>
    </header>
);

export default Header;
