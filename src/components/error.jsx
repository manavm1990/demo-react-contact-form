import PropTypes from "prop-types";

export default function Error({ message }) {
  return (
    <p
      className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">U fudged 🤬 up!</strong>&nbsp;
      {message}
    </p>
  );
}

Error.defaultProps = {
  message: "Some other error❗",
};

Error.propTypes = {
  message: PropTypes.string,
};
