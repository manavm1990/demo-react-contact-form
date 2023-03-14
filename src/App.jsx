import Input from "./components/input";
import { validateEmail, validatePassword } from "./utils";

const inputs = [
  { id: "name", type: "text" },
  {
    id: "email",
    type: "email",
    validation: {
      validate: validateEmail,
      message: "Please enter a valid email address",
    },
  },
  {
    id: "password",
    type: "password",
    validation: {
      validate: validatePassword,
      message: "Please enter a valid password",
    },
  },
];

function App() {
  return (
    <form
      className="mt-8 flex flex-col items-center gap-y-4"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.target;
        console.log("Submitted");
        console.log({
          name: form.name.value,
          email: form.email.value,
          password: form.password.value,
        });

        console.log("Now what? Maybe a `useMutation` hook?");
        console.log("Resetting form");
        form.reset();
      }}
    >
      {inputs.map(({ id, type, validation }) => (
        <Input key={id} id={id} type={type} validation={validation} />
      ))}{" "}
      <button
        type="submit"
        className="mt-2 rounded bg-green-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default App;
