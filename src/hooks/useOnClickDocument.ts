import { useEffect } from 'react';
export const useOnClickDocument = (
  ref: React.MutableRefObject<any>,
  handler: (event: any) => void,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // Do not execute if ref doesn't exist or clicks inside of ref
      // <=> Do execute if ref exists and clicks outside of ref
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !(
          document.getElementsByClassName('modal-container').length &&
          document
            .getElementsByClassName('modal-container')[0]
            .contains(event.target)
        ) &&
        handler
      )
        handler(event);
    };

    document.addEventListener('mouseup', listener);

    return () => {
      document.removeEventListener('mouseup', listener);
    };
  }, [ref, handler]);
};
