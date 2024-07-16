import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
  background-color : yellow
`

const GoogleTTS = ({ texts }) => {
  useEffect(() => {
    const playAudio = (audioContent) => {
      return new Promise((resolve) => {
        const audio = new Audio('data:audio/mp3;base64,' + audioContent);
        audio.onended = resolve; //다음 텍스트로 넘어감
        audio.play();
      });
    };

    const fetchAudio = async (text, voice) => {
      try {
        const response = await axios.post(
          'https://texttospeech.googleapis.com/v1/text:synthesize?key=개인키',
          {
            input: { text: text },
            voice: voice,
            audioConfig: { audioEncoding: 'MP3' },
          }
        );
        const audioContent = response.data.audioContent;
        await playAudio(audioContent);
      } catch (error) {
        console.log(error);
      }
    };

    const textVoice = async () => {
      //구글 tts 목소리 설정
      const voices = [
        { languageCode: 'ko-KR', name: 'ko-KR-Standard-A' }, 
        { languageCode: 'ko-KR', name: 'ko-KR-Standard-C' } 
      ];

      //null이 아닌 경우만 음성 번갈아가며 출력
      for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        if (text && text !== "null") {
          await fetchAudio(text, voices[i % voices.length]);
        }
      }
    };

    if (texts && texts.length > 0) {
      textVoice();
    }
  }, [texts]);

  return (
    <Div>
      현재 선택된 지문입니다.
    </Div>
  );
};

export default GoogleTTS;
