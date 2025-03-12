export default function Button({ onClick, children }) {
  return (
    <button className="btn--start" onClick={onClick}>
      {children}
    </button>
  );
}
