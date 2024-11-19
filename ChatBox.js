import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for the chat box
const ChatBoxContainer = styled.div`
  position: fixed;
  bottom: 80px;
  left: 20px;
  width: 300px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const Header = styled.div`
  background: #007bff;
  color: white;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: center;
`;

const MessagesContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
`;

const Message = styled.div`
  margin: 5px 0;
  padding: 8px;
  border-radius: 5px;
  background: ${({ isClient }) => (isClient ? '#dcf8c6' : '#f1f1f1')};
  text-align: ${({ isClient }) => (isClient ? 'right' : 'left')};
  font-size: 0.9em;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const ChatIcon = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: #007bff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [collectingName, setCollectingName] = useState(true);
  const [userDetails, setUserDetails] = useState({ name: '' });
  const [showPlanOptions, setShowPlanOptions] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: 'Hello, Welcome to WeStayClose', isClient: false }]);
    }
  }, [isOpen]);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isClient: true }]);
      if (collectingName) {
        setUserDetails({ name: inputValue });
        setMessages([
          ...messages,
          { text: inputValue, isClient: true },
          { text: `Thank you, ${inputValue}. Would you like to see the Plan details or Subscription details?`, isClient: false },
        ]);
        setCollectingName(false);
      }
      setInputValue('');
    }
  };

  const handleDefaultClick = (message) => {
    if (message === 'Plan details') {
      setShowPlanOptions(true);
      setMessages([...messages, { text: message, isClient: false }]);
    } else if (message === 'Subscription plan') {
      setMessages([
        ...messages,
        { text: message, isClient: false },
        { text: `Here are the details for the subscription plans: 
          - **Monthly Subscription**: Offers access to basic services and one consultation.
          - **Yearly Subscription**: Offers unlimited access to all services, including preventive care and follow-ups.`, isClient: false },
      ]);
      setShowPlanOptions(false);
    }
  };

  const handlePlanSelection = (plan) => {
    let planDetails = '';
    if (plan === 'PROXY PACK') {
      planDetails = `**PROXY PACK - 42$**
        - ✔ 24/7 Health care assistant
        - ✔ One home visit by field executive
        - ✔ Lab investigations: complete blood count, urine routine, TSH, HBA1C
        - ✔ One zoom session with general consultant (max 20 mins)`;
    } else if (plan === 'ELITE 360 PACK') {
      planDetails = `**ELITE 360 PACK - 199$**
        - ✔ 24/7 Health care assistant
        - ✔ One home visit by field executive
        - ✔ Lab investigations: complete blood count, urine routine, TSH, HBA1C, Random blood sugar, Renal function test, Liver function test, Serum Electrolyte, Serum VIT D, Urine PCR, Peripheral Smear
        - ✔ One zoom session with general consultant (max 20 mins)
        - ✔ One zoom session with preventive health physician specialist (20 mins)
        - ✔ Nutritionist advice with diet chart for 1 month`;
    } else if (plan === 'TAKE CARE PACK') {
      planDetails = `**TAKE CARE PACK**
        - ✔ 24/7 Health care assistant
        - ✔ One home visit by field executive
        - ✔ Lab investigations: complete blood count, urine routine, TSH, HBA1C`;
    }

    setMessages([...messages, { text: planDetails, isClient: false }]);
    setShowPlanOptions(false);
  };

  return (
    <>
      <ChatIcon onClick={toggleChatBox}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2c-5.5 0-10 4.5-10 10 0 1.7.4 3.4 1 5l-1 5 5-1c1.6.6 3.3 1 5 1 5.5 0 10-4.5 10-10s-4.5-10-10-10zm5.3 14.3c-.3 0-.7-.1-1.1-.3-.5-.2-.8-.5-1.1-.8-.3-.4-.4-.9-.4-1.3 0-.2 0-.4.1-.6l-.1-.1c-.3-.1-.8-.3-1.2-.5-.5-.2-.9-.5-1.3-.8l-.3-.2c-.6-.5-1-1.1-1.2-1.7-.1-.4-.2-.8-.2-1.1-.1-.2-.1-.3-.1-.5s.1-.3.1-.5c.3-.1.7-.2 1.1-.2.5 0 1 .1 1.4.3.3.2.5.4.7.6.3.2.6.4.9.6.2.1.5.2.7.3.3.2.5.4.6.5.1.2.2.3.2.5 0 .4-.2.7-.5.8-.3.1-.6.2-.9.2zm-3.7-3.5c-.2 0-.4 0-.6-.1-.4-.1-.9-.3-1.3-.6-.2-.1-.5-.2-.7-.3-.4-.2-.7-.5-1.1-.9-.2-.3-.3-.6-.3-.9 0-.2.1-.4.1-.5s.3-.2.5-.2c.4 0 .8.2 1.1.5.2.2.4.4.6.6.4.3.7.4.9.5.1.2.2.5.2.7.1.1.1.2.1.3s-.1.2-.2.3-.2.1-.3.1z" />
        </svg>
      </ChatIcon>

      <ChatBoxContainer isOpen={isOpen}>
        <Header>Chat Support</Header>
        <MessagesContainer>
          {messages.map((msg, index) => (
            <Message key={index} isClient={msg.isClient}>{msg.text}</Message>
          ))}
        </MessagesContainer>
        {collectingName ? (
          <InputContainer>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Please enter your name..."
            />
            <Button onClick={handleSend}>Submit</Button>
          </InputContainer>
        ) : (
          showPlanOptions ? (
            <div style={{ padding: '10px' }}>
              <Button onClick={() => handlePlanSelection('PROXY PACK')}>PROXY PACK</Button>
              <Button onClick={() => handlePlanSelection('ELITE 360 PACK')}>ELITE 360 PACK</Button>
              <Button onClick={() => handlePlanSelection('TAKE CARE PACK')}>TAKE CARE PACK</Button>
            </div>
          ) : (
            <div style={{ padding: '10px' }}>
              <Button onClick={() => handleDefaultClick('Plan details')}>Plan details</Button>
              <Button onClick={() => handleDefaultClick('Subscription plan')}>Subscription details</Button>
            </div>
          )
        )}
      </ChatBoxContainer>
    </>
  );
};

export default ChatBox;
