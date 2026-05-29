import { useRef, useEffect } from 'react';

// FocusableInput uses a ref to access the underlying DOM input element. On mount
// (empty dependency array), the effect calls .focus() on it, so the input is
// focused automatically as soon as the component renders. The button also lets
// you re-focus the input on demand via the same ref.
function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I focus on mount" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

export default FocusableInput;
