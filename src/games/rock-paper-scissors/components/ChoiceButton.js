export default function ChoiceButton({ children, onChoice, value }) {
  return (
    <button className="rps__choice-button" onClick={() => onChoice(value)}>
      {children}
    </button>
  );
}
