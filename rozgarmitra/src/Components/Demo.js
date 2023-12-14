
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Demo = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening} className='bg-green-200 m-2' >Start</button>
      <button onClick={SpeechRecognition.stopListening} className='bg-sky-200 m-2' >Stop</button>
      <button onClick={resetTranscript} className='bg-blue-200 m-2'>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Demo;