import ContentWrapper from '../ContentWrapper';
import Heading from '../Heading';
import './StanaloneModules.style.scss';
import iocImg from './ioc.svg';
import mprefImg from './mpref.svg';
import shadowImg from './file-shadow.svg';
import Image from '../Image';

const items = [
    {
        img: iocImg,
        title: 'Inversion of control',
        text: 'Make dependencies be injected, don’t import them!'
    },
    {
        img: mprefImg,
        title: 'Module preference',
        text: 'Unique implementations for strictly typed interfaces.'
    },
    {
        img: shadowImg,
        title: 'File Shadowing',
        text: 'Focus on modifying functionality, not files.'
    }
]

const StanaloneModuleItem = ({ img, title, text }) => (
    <div className="StanaloneModules-Item">
        <Image src={ img } alt="" />
        <Heading type="h4" className="StanaloneModules-ItemTitle">
            { title }
        </Heading>
        <p className="StanaloneModules-ItemDescription">
            { text }
        </p>
    </div>
);

const StanaloneModules = () => (
    <section className="StanaloneModules">
        <ContentWrapper className="StanaloneModules-Wrapper">
            <Heading type="h2" className="StanaloneModules-Title">
                Standalone modules in JavaScript
            </Heading>
            <div className="StanaloneModules-Grid">
                { items.map((item, i) => (
                    <StanaloneModuleItem
                      key={ i }
                      { ...item }
                    />
                )) }
            </div>
        </ContentWrapper>
    </section>
);

export default StanaloneModules;
