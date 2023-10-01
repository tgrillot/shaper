export default function ActionButton({ text, onButtonClick }) {
    return (
      <button className="bg-gray-600 text-white p-1 w-36" onClick={onButtonClick}>{text}</button>
    )
  }