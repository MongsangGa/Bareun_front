import React, { useState, useEffect } from 'react';
import GoogleTTS from '../../GoogleTTS';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const Learning = () => {
  const [data, setData] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  // fetch로 파일 가져온 후 data에 저장
  useEffect(() => {
    fetch('/modified_output_daily_1st.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h1>TTS Test</h1>
      {data ? (
        <List>
          {data.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => setClickedItem(item)}
            >
              <strong>{item.index}번 :</strong>
              <p><strong>A:</strong> {item.user_utterance}</p>
              <p><strong>B:</strong> {item.system_utterance}</p>
              {clickedItem === item && (
                <GoogleTTS texts={[item.user_utterance, item.system_utterance]} />
              )}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>로딩중...</p>
      )}
    </Container>
  );
};

export default Learning;
