import LeftColumnMenu from "./components/LeftColumnMenu";
import "./App.css";
import { useState } from "react";
import { useRef, ChangeEvent } from "react";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import UserAvatar from "./assets/icons/user-avatar.png";
import RadioButtonGroupCompnt from "./components/RadioButtonGroup";
import Popup from "./components/Popup";
import SettingsIcon from "./assets/icons/settings.png";
import "./components/styles/Popup.css";

const API_KEY = "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";
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

/* Messages in and out Management and processing*/
function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm askME chatbot! Ask me anything!",
      sentTime: "just now",
      sender: "askME",
      direction: "incoming",
      position: "single",
    },
  ]);
  const [, setIsTyping] = useState(false);

  const handleSend = async (message: string) => {
    const newMessage = {
      message,
      sentTime: "just now",
      sender: "user",
      direction: "outgoing",
      position: "single",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: any[]) {
    let apiMessages = chatMessages.map(
      (messageObject: { sender: string; message: any }) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
          role = "assistant";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message };
      }
    );
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "askME",
          },
        ]);
        setIsTyping(false);
      });
  }

/* Radio Buttons */
  const [radioButtonSelectedOption, setradioButtonSelectedOption] =
    useState<string>("Q&A");

  const handleSelectionChange = (selectedOption: string) => {
    setradioButtonSelectedOption(selectedOption);
    console.log("Selected option:", selectedOption);
  };

/* Handle User Settings popup showup */
  const [openPopup, setopenPopup] = useState(false);

/* File searching and filtering */
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<string | null>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  /* Get  File Size */
  const formatFileSize = (sizeInBytes: number): string => {
    const fileSizeInMB = sizeInBytes / (1024 * 1024); // Convert bytes to MB
    return fileSizeInMB.toFixed(2) + ' MB';
  };

  /* Filter Files by extension (only .pdf or .docx) */ 
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

      if (!allowedExtensions.includes(`.${fileExtension}`)) {
        alert('Please upload a .pdf, .doc or .docx file.');
        return;
      }

      const fileName = file.name;
      const fileSize = file.size; 

      const fileInfoString = `${fileName} (${formatFileSize(fileSize)})`;
      setFileInfo(fileInfoString);
    }
  };


  /* Rendering */
  return (
    <div className="Appv2">
      <LeftColumnMenu />
      <div className="content">
        <div className="main-header">
          <div className="main-header-input-file">
            <div className="main-header-input-file-textbox">
              <label style={{ color: "black" }} htmlFor="fileuploadnameTextbox">
                <strong>File Upload</strong>{" "}
              </label>
              <input
               type="file"
               ref={fileInputRef}
               style={{ display: 'none' }}
               onChange={handleFileChange}
              />
              <input className="fileNameTB"
                type="text"
                id="fileInfo"
                placeholder="File information will appear here"
                readOnly
                value={fileInfo || ' '}
              />
            </div>
            <div className="main-header-input-file-buttons">
              <button onClick={handleFileUpload} type="button">
                Choose File
              </button>
              <button style={{ marginLeft: 15, marginRight: 15 }}>
                Upload
              </button>
            </div>
          </div>
          <div className="main-header-radio-buttons">
            <RadioButtonGroupCompnt
              selectedOption={radioButtonSelectedOption}
              onSelectionChange={handleSelectionChange}
            />
          </div>
          <div className="main-header-user-settings">
            <div className="main-header-user-settings-avatar">
              <img style={{ height: 75, width: 75 }} src={UserAvatar}></img>
            </div>
            <div className="main-header-user-settings-details">
              <p>
                <strong>John Peter</strong>
              </p>
              <p>jptrgmail.com</p>
              <p>Local User</p>
            </div>
            <img
              style={{ cursor: "pointer", height: 28, width: 28 }}
              src={SettingsIcon}
              onClick={() => setopenPopup(true)}
            ></img>
          </div>
        </div>
        <div className="main-chat">
          <div className="main-chat-label">
            <label htmlFor="fileuploadnameTextbox">
              <strong>Ask a Question</strong>{" "}
            </label>
          </div>
          <div className="main-chat-window">
            <MainContainer
              style={{ height: 500, borderRadius: 15, width: "120vh" }}
            >
              <ChatContainer>
                <MessageList>
                  {messages.map((message, i) => {
                    return <Message key={i} model={message}></Message>;
                  })}
                </MessageList>
                <MessageInput
                  placeholder="Please type in what do you want to askMe!"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
            {openPopup ? (
              <Popup
                text="Hello there!"
                closePopup={() => setopenPopup(false)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
