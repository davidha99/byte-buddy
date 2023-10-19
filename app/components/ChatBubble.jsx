import styled from "styled-components";

function ChatBubble({ isHuman, message }) {
  return (
    <Wrapper
      style={{ "--justify-content": isHuman ? "flex-end" : "flex-start" }}
    >
      <Bubble style={{ "--background": isHuman ? "lightblue" : "white" }}>
        {message}
      </Bubble>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: var(--justify-content);
`;

const Bubble = styled.div`
  width: fit-content;
  max-width: 600px;
  background: var(--background);
  padding: 10px;
  border-radius: 10px;
  margin: 14px;
  color: black;
  font-family: sans-serif;
  font-weight: 400;
`;

export default ChatBubble;
