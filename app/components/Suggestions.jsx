import React from "react";
import styled from "styled-components";
import { byteBuddyQnA } from "../utils/byteBuddyQ&A";

function Suggestions({ setSelectedSuggestion }, submitRef) {
  const [suggestions, setSuggestions] = React.useState([]);

  React.useEffect(() => {
    const numberOfSuggestions = 2;
    const questions = byteBuddyQnA.map((qna) => qna.question);
    setSuggestions(
      questions.sort(() => 0.5 - Math.random()).slice(0, numberOfSuggestions)
    );
  }, []);

  return (
    <Wrapper>
      <SuggestionPrompt>
        <Label>Suggestions:</Label>
        <SuggestionList>
          {suggestions.map((suggestion, index) => {
            return (
              <SuggestionItem
                key={index}
                onClick={async () => {
                  await setSelectedSuggestion(suggestion);
                  submitRef.current.click();
                }}
              >
                <SuggestionButton>{suggestion}</SuggestionButton>
              </SuggestionItem>
            );
          })}
        </SuggestionList>
      </SuggestionPrompt>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const SuggestionPrompt = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SuggestionList = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  overflow: auto;
  flex: 1;
`;

const SuggestionItem = styled.li`
  color: var(--slate-100);
  max-width: 350px;
  list-style-type: none;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--slate-600);
  cursor: pointer;
`;

const SuggestionButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--slate-100);
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  width: 100%;
  cursor: pointer;
  padding: 0;
`;

const Label = styled.p`
  color: var(--slate-700);
`;

export default React.forwardRef(Suggestions);
