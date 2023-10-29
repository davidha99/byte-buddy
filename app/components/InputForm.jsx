import styled from "styled-components";
import Icon from "./Icon";
import VisuallyHidden from "./VisuallyHidden";
import React from "react";

function InputForm({ userMessage, setUserMessage, handleSubmit }, ref) {
  React.useEffect(() => {
    ref.current.focus();
  }, [ref]);

  return (
    <MessageForm onSubmit={handleSubmit} style={{ "--space": 15 + "px" }}>
      <MessageArea>
        <MessageText
          ref={ref}
          placeholder="¿En qué puedo ayudarte?"
          id="message-input"
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
        />
        <Button
          disabled={!userMessage.trim()}
          type="submit"
          style={{ "--size": 40 + "px" }}
        >
          <IconWrapper id="send" size={24} strokeWidth={1.5} />
          <VisuallyHidden>Enviar</VisuallyHidden>
        </Button>
      </MessageArea>
    </MessageForm>
  );
}

const MessageForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
  border-top: 2px solid var(--slate-900);
`;

const MessageArea = styled.div`
  display: flex;
  min-width: min(700px, 100%);
  justify-content: center;
  gap: var(--space);
  padding: var(--space);
  background-color: var(--slate-900);
  border-radius: var(--space);
`;

const MessageText = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  background-color: var(--slate-900);
  color: var(--slate-100);

  &::placeholder {
    color: var(--slate-600);
  }
`;

const Button = styled.button`
  position: relative;
  margin-top: auto;
  border: none;
  border-radius: 10px;
  height: var(--size);
  width: var(--size);
  cursor: pointer;
  line-height: 0;
  padding: var(--space);
  background-color: var(--sky-800);
  color: var(--slate-100);

  &:enabled {
    transition: 0.3s ease-in-out;
  }

  &:disabled {
    pointer-events: none;
    background-color: transparent;
    transition: 0.2s ease-in-out;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  inset: 0;
  margin: auto;
`;

export default React.forwardRef(InputForm);
