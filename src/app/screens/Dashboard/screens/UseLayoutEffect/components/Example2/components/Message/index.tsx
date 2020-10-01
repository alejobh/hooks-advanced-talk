import React, { useEffect, MutableRefObject } from 'react';

import { Nullable } from '~utils/types';

interface Props {
  children: string;
  boxRef: MutableRefObject<Nullable<HTMLButtonElement>>;
}
function Message({ children, boxRef }: Props) {
  const msgRef = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (msgRef?.current && boxRef?.current && rect) {
      msgRef.current.style.top = `${rect.height}px`;
    }
  }, [boxRef]);

  return (
    <span ref={msgRef} className="message">
      {children}
    </span>
  );
}

export default Message;
