import styled from "styled-components";

function InputForm({ userMessage, setUserMessage, handleSubmit }) {
  return (
    <MessageForm onSubmit={handleSubmit}>
      <MessageInput
        type="text"
        placeholder="¿En qué puedo ayudarte?"
        id="message-input"
        value={userMessage}
        onChange={(event) => setUserMessage(event.target.value)}
      />
      <Button type="submit">Send</Button>
    </MessageForm>
  );
}

const MessageForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: white;
  margin: auto;
`;

const MessageInput = styled.input`
  width: 90%;
  outline: none;
  padding: 20px;
  border: none;
`;

const Button = styled.button`
  width: 10%;
  outline: none;
  padding: 20px;
  border: none;
  background: mediumslateblue;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default InputForm;
