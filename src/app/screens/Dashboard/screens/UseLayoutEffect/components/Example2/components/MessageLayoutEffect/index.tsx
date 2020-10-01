import React, { MutableRefObject, useLayoutEffect } from 'react';

import { Nullable } from '~utils/types';

interface Props {
  children: string;
  boxRef: MutableRefObject<Nullable<HTMLButtonElement>>;
}
function MessageLayoutEffect({ children, boxRef }: Props) {
  const msgRef = React.useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
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

export default MessageLayoutEffect;
