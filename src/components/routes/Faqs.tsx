import LeftColumnMenu from '../LeftColumnMenu';
import '../styles/Faqs.css';
import FAQ from 'react-faq-component';

const faqData = {
  title: "",
  rows: [
    {
      title: "▪  How do I upload a document file?",
      content: "Uploading a document is easier than making a peanut butter sandwich! Just hit the 'Upload File' button on 'Ask a Question' window, pick your document, and voila! No bread crumbs involved.",
    },
    {
      title: "▪  What types of document files are supported?",
      content: "We're document format enthusiasts! You can upload PDFs, Word docs (DOC and DOCX), and even those humble TXT files.",
    },
    {
      title: "▪  How do I ask questions about the document?",
      content: "Think of it like talking to a really well-read but virtual friend. Just type your question in the 'Ask a Question' box, and our language wizard will do its thing!",
    },
    {
      title: "▪  Is there a limit on the size of the document I can upload?",
      content: "We like big documents, but we cannot lie! However, for optimal magic, we recommend keeping files under 100MB. It's like trying to juggle bowling balls - impressive, but not recommended.",
    },
    {
      title: "▪  Can I ask multiple questions about the same document?",
      content: "Absolutely! It's like having a never-ending conversation with your favorite book. Ask away, and we'll keep the literary banter going.",
    },
    {
      title: "▪  How accurate are the answers provided by the language model?",
      content: "We're not fortune tellers, but we aim for Gandalf-level accuracy. The more precise your question, the more magical the answer!",
    },
    {
      title: "▪  Are my uploaded documents stored or shared with others?",
      content: "Your documents are as private as a cat's secret nap spot. We guard them with the determination of a squirrel hiding its acorns.",
    },
    {
      title: "▪  Can I save or bookmark questions and answers?",
      content: "We're like your favorite bookshelf, just not as physical. While we can't save questions for you, feel free to jot down the gems our model conjures.",
    },
    {
      title: "▪  How can I review or edit my previously asked questions?",
      content: "Once you've asked a question, it's like sending a message in a bottle—you can't take it back. However, you can always reminisce by checking your 'History'.",
    },
    {
      title: "▪  What should I do if I encounter an issue with the platform?",
      content: "Oopsie-doodle! If you encounter a hiccup, let us know pronto! Our tech-savvy elves are ready to sprinkle some digital fairy dust and fix things up.",
    },
    {
      title: "▪  Is the platform available in multiple languages?",
      content: "Currently, we speak fluent English, but we're learning other languages faster than a kid in a candy store. More languages are on the way!",
    },
    {
      title: "▪  Is there a cost associated with using the platform?",
      content: "Ah, the unavoidable financial talk! Yes, we have subscription plans, but we also offer a free version for those on a tight budget. It's like having a taste before committing to the whole pie.",
    },
    {
      title: "▪  How can I improve the accuracy of the generated answers?",
      content: "Be as clear as a window on a chilly morning! The clearer your question, the more accurate and less foggy the answer.",
    },
    {
      title: "▪  Can I integrate this platform with other applications or services?",
      content: "Absolutely! We play well with others. If you're a tech wizard and want to integrate, just wave your magic wand (or contact our API team).",
    },
    {
      title: "▪  How frequently is the platform updated or improved?",
      content: "We're like the Dumbledore of updates, constantly tweaking and enhancing. Expect new features and improvements - but no phoenix feathers.",
    },
    {
      title: "▪  What is the package version",
      content: "<p>current version is 1.0.1</p>",
    }
  ],
};

const faqStyle = {
  bgColor: "faq-component",
  titleTextColor: "black",
  rowTitleColor: "Black",
  rowContentColor: 'black',
  arrowColor: "black",
  timingFunc: "1s",
  titleTextSize: "30px",
  rowContentPaddingTop: "15px",
  rowContentPaddingRight: "500px",
};

const faqConfig = {
  animate: true,
  tabFocus: true,
  openOnload: true,
  expandIcon: true,
};

function faqsPage() {
  return (
    <div className="appFAQ">
      <LeftColumnMenu />
      <div className="contentFaq">
        <div className='faq-title'>
          <h2>
          FAQs (How it works)
          </h2>
        </div>
        <div className='faqList'>
          <FAQ
            data={faqData}
            styles={faqStyle}
            config={faqConfig}
          />
        </div>
      </div>
    </div>
  );
}

export default faqsPage;




