import useInputHooks from "./useInputHooks";

const Custom_Hooks = () => {
  const [user, bindUser, resetUser] = useInputHooks("");
  const [pass, bindPass, resetPass] = useInputHooks("");

  const submitHandler = e => {
    e.preventDefault();
    alert(`${user} and ${pass}`);
    resetUser();
    resetPass();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="user" {...bindUser} />
        <input type="text" name="pass" {...bindPass} />
        <button type="submit">Submit here</button>
      </form>
    </div>
  );
};

export default Custom_Hooks;
