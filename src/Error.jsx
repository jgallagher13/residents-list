import "./Error.css";
export default function Error({ error }) {
  return <div>{error && <div className="error-msg">{error}</div>}</div>;
}
