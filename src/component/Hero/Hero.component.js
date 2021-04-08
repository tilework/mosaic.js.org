import Button from '../Button';
import ContentWrapper from '../ContentWrapper';
import GitHubButton from '../GitHubButton';
import Heading from '../Heading';
import './Hero.style.scss';

import heroImg from './hero.svg';

const Hero = () => (
    <section className="Hero">
        <ContentWrapper className="Hero-Wrapper">
            <div className="Hero-Content">
                <p className="Hero-SubTitle">Mosaic is...</p>
                <Heading type="h1" className="Hero-Title">
                    A way to split a JavaScript monolyth into modules
                </Heading>
                <nav className="Hero-Nav">
                    <Button>Docs</Button>
                    <GitHubButton />
                </nav>
            </div>
            <img src={ heroImg } alt="Shapes" className="Hero-Image" />
        </ContentWrapper>
    </section>
);

export default Hero;
