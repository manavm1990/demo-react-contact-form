import PropTypes from "prop-types";
import { useState } from "react";
import { capitalizeFirstLetter } from "../utils";
import Error from "./error";

export default function Input({ id, type, validation }) {
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="flex flex-col justify-center gap-y-3">
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        id={id}
        type={type}
        placeholder={capitalizeFirstLetter(id)}
        className="rounded border-2 border-gray-300 px-4 py-2 focus:border-0 focus:outline-0 focus:drop-shadow-md"
        onBlur={(e) => {
          if (!validation.validate(e.target.value))
            setErrorMsg(validation.message);
        }}
        onFocus={() => setErrorMsg("")}
      />
      {errorMsg && <Error message={errorMsg} />}
    </div>
  );
}

Input.defaultProps = {
  validation: {
    validate: () => true,
    message: "",
  },
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validation: PropTypes.exact({
    validate: PropTypes.func,
    message: PropTypes.string,
  }),
};
