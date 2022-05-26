import { useState } from 'react';

export default function ButtonChange({ text }) {
  const [buttonText, setButtonText] = useState('Press Me to Change');
  return <button onClick={() => setButtonText(text)}>{buttonText}</button>;
}

ButtonChange.defaultProps = {
  text: 'Changed Text',
};
