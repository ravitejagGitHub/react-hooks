export const Login = (props) => {
  const { setUsername } = props;
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};
