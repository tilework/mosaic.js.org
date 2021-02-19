import ContentWrapper from '../ContentWrapper';

import quoteImg from './quote.png';
import jackImg from './jack.png';
import ytImg from './yt.svg';

import './Quote.style.scss';

const Quote = () => (
    <blockquote className="Quote">
        <ContentWrapper className="Quote-Wrapper">
            <img className="Quote-Icon" src={ quoteImg } alt="" />
            <div className="Quote-Content">
                <p className="Quote-Text">
                    Wow! Extension points into my apllication with code located in another package! How cool is that?
                </p>
                <footer className="Quote-Footer">
                    <img src={ jackImg } alt="" />
                    <div>
                        <strong>Jack Herrington</strong>
                        <a href="#">
                            <img src={ ytImg } alt="" />
                            Watch YouTube video
                        </a>
                    </div>
                </footer>
            </div>
        </ContentWrapper>
    </blockquote>
);

export default Quote;
