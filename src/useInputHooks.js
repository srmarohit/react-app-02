import { useState } from "react";

const useInputHooks = initValue => {
  const [value, setValue] = useState(initValue);

  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value);
    }
  };

  const reset = () => {
    setValue(initValue);
  };

  return [value, bind, reset];
};

export default useInputHooks;
