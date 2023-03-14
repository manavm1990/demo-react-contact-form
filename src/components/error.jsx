import PropTypes from "prop-types";

export default function Error({ message }) {
  return (
    <p
      className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      // ♿ ARIA alert role
      // The alert role is for important, and usually time-sensitive, information.
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
      role="alert"
    >
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
