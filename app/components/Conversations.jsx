import ChatBubble from "./ChatBubble";
import styled from "styled-components";

function Conversations({ conversations, aiMessage }) {
  return (
    <Wrapper>
      <Chat>
        {conversations &&
          conversations.map((conversation, index) => {
            return (
              <ChatBubble
                isHuman={conversation.isHuman}
                message={conversation.message}
                key={index}
              />
            );
          })}
        {aiMessage && <ChatBubble isHuman={false} message={aiMessage} />}
      </Chat>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  background: #625a91;
`;

const Chat = styled.div`
  max-height: 800px;
  overflow-y: auto;
  padding: 30px;
`;

export default Conversations;
