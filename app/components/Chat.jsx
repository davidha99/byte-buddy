"use client";
import React, { useCallback } from "react";
import InputForm from "./InputForm";
import Conversations from "./Conversations";
import openai from "../utils/openai";
import styled from "styled-components";

export default function Chat() {
  const [conversations, setConversations] = React.useState([]);
  const [aiMessage, setAiMessage] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault(); //To prevent the default form submission behaviour

      // Storing the user message to the state
      setConversations((prev) => {
        return [
          ...prev,
          {
            message: userMessage,
            isHuman: true,
          },
        ];
      });
      setUserMessage(""); // Emptying the input field

      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
        stream: true, // This is required to stream the response
      });

      let streamedMessage = "";

      // The stream will be read till its closed
      for await (const part of stream) {
        setAiMessage((prev) => prev + part.choices[0].delta.content);

        // Once the entire message is received, the stream will receive the finish_reason as 'stop;
        if (part.choices[0].finish_reason === "stop") {
          setConversations((prev) => {
            return [
              ...prev,
              {
                message: streamedMessage,
                isHuman: false,
              },
            ];
          });

          setAiMessage("");
          break;
        } else {
          streamedMessage += part.choices[0].delta.content;
        }
      }
    },
    [userMessage]
  );

  return (
    <Wrapper>
      <Conversations conversations={conversations} aiMessage={aiMessage} />
      <InputForm
        userMessage={userMessage}
        setUserMessage={setUserMessage}
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--slate-950);
`;
