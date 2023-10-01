export default function CSVInput({ onFileChange }) {
    return (
        <input
            onChange={onFileChange}
            accept=".csv"
            type="File"
            className="file:bg-gray-600 file:text-white file:p-1 file:w-36 file:border-none"
        />
    );
};