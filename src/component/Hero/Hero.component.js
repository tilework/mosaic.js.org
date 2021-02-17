import Button from '../Button';
import ContentWrapper from '../ContentWrapper';
import GitHubButton from '../GitHubButton';
import './Hero.style.scss';

import heroImg from './hero.svg';

const Hero = () => (
    <header className="Hero">
        <ContentWrapper className="Hero-Wrapper">
            <div className="Hero-Content">
                <p className="Hero-SubTitle">Plug.js is...</p>
                <h1 className="Hero-Title">A way to split a JavaScript monolyth into modules</h1>
                <nav className="Hero-Nav">
                    <Button>Docs</Button>
                    <GitHubButton />
                </nav>
            </div>
            <img src={ heroImg } alt="Shapes" className="Hero-Image" />
        </ContentWrapper>
    </header>
);

export default Hero;
