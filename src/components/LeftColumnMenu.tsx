import './styles/LeftColumnMenu.css';
import QuestionIcon from '../assets/icons/question.png';
import ExampleIcon from '../assets/icons/example.png';
import FAQIcon from '../assets/icons/faq.png';
import HelpIcon from '../assets/icons/help.png';
import HistoryIcon from '../assets/icons/history.png';
import TopicsIcon from '../assets/icons/topics.png';
import SavedIcon from '../assets/icons/saved.png';
import AboutUsIcon from '../assets/icons/information.png';
import LogoBrain from '../assets/logo/LogoPlusConti.png'
import { Link } from "react-router-dom";

const LeftColumnMenu: React.FC = () => {

    return (
        <div className="left-column-menu">
            <div className="logo-left-bar">
                <img src={LogoBrain} className='logo-brain-bar'></img>
            </div>
            <div className="left-column-menu-container" >
                <Link to="/" >
                    <button className="menu-button"><img src={QuestionIcon} className="menu-icon" title="Ask a Question" />Ask a Question</button>
                </Link>
                <Link to="/history">
                    <button className="menu-button"><img src={HistoryIcon} className="menu-icon" title="History" />History</button>
                </Link>
                <Link to="/savedquestions">
                    <button className="menu-button"><img src={SavedIcon} className="menu-icon" title="Saved Questions" />Saved Questions</button>
                </Link>
                <Link to="/topics">
                    <button className="menu-button"><img src={TopicsIcon} className="menu-icon" title="Browse Topics" />Browse Topics</button>
                </Link>
                <Link to="/examples">
                    <button className="menu-button"><img src={ExampleIcon} className="menu-icon" title="Examples" />Examples</button>
                </Link>
                <Link to="/aboutus">
                    <button className="menu-button"><img src={AboutUsIcon} className="menu-icon" title="About Us" />About Us</button>
                </Link>
                <Link to="/faqs">
                    <button className="menu-button"><img src={FAQIcon} className="menu-icon" title="FAQs" />FAQs</button>
                </Link>
                <Link to="/help">
                    <button className="menu-button"><img src={HelpIcon} className="menu-icon" title="Help" />Help</button>
                </Link>
            </div>
        </div>
    );
};

export default LeftColumnMenu;