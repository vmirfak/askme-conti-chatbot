import LeftColumnMenu from '../LeftColumnMenu';
import '../styles/AboutUs.css';

function aboutusPage() {
  return (
    <div className="appAboutus">
      <LeftColumnMenu />
      <div className='aboutusContent'>
        <div className='aboutus-title'>
          <h2>
            About Us
          </h2>
        </div>
        <div className='aboutusContent-text'>
          <h4>Welcome to Our Platform!</h4>
          <p>
            Hello and welcome to our platform! We're thrilled to have you here. Our platform is all about making 
            information accessible and useful to you. When we started this journey, we were fueled by the belief 
            that understanding complex documents should be as simple as having a conversation with a knowledgeable 
            friend.
          </p>
          <h4>Our Story</h4>
          <p>
          Our story began when a group of like-minded individuals, passionate about technology and its potential to 
          transform lives, came together. We wanted to create a tool that would simplify the way people interact with 
          documents and gather insights from them. That's how this platform was born — a blend of passion, expertise, 
          Our dedicated team is a mix of AI enthusiasts, software developers, and design wizards. Each one of us brings 
          a unique set of skills and experiences to the table, but we all share a common goal: to create a platform that
           empowers you with knowledge in the most intuitive and efficient way possible.
          </p>
          <h4>Our Values</h4>
          <p>
          At the heart of everything we do are our core values — transparency, user-centricity, and relentless improvement. 
          We believe in being transparent about how our platform operates, ensuring that every decision we make is in the best 
          interest of our users, and constantly striving to enhance your experience.
          </p>
          <h4>Journey So Far</h4>
          <p>
          We've come a long way since our inception. From being recognized with the 'Innovation in Technology' award to reaching 
          thousands of users, every milestone has been a testament to our dedication and your trust in us. We're immensely grateful 
          for your continued support.
          </p>
          <h4>Our Future Goals</h4>
          <p>
          Looking ahead, we're excited about what the future holds. Our vision is to expand the platform's capabilities, integrate 
          more languages, and implement AI-driven features that will revolutionize how you interact with information. We're committed 
          to staying at the forefront of technology to serve you better.
          </p>
          <h4>Get in Touch</h4>
          <p>
          If you have any questions, ideas, or just want to say hello, we'd love to hear from you! Please feel free to reach out to us
           at infoaskme@conti-engineering.com. Your thoughts and feedback are invaluable to us.
          </p>
          <p>
          Thank you for being a part of our journey towards a more informed and connected world!
          </p>
          <p>
          Warm regards,
          </p>
          <p>
          CES Porto X-Tech Team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default aboutusPage;

