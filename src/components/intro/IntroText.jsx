import React from 'react';

function IntroText({ text }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
}

export default IntroText;