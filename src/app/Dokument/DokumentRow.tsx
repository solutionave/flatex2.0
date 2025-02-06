interface DokumentRowProps {
  id: number;
  name: string;
  date: string;
  buttonText: string;
  description: string;
  endDate: string;
  onButtonClick: () => void;
}

const DokumentRow: React.FC<DokumentRowProps> = ({ id, name, date, buttonText, description, endDate, onButtonClick }) => {
  return (
    <div className="grid grid-cols-10 gap-4 border-b p-2 items-start">
      <div className="col-span-1">{id}</div>
      <div className="col-span-3">{name}</div>
      <div className="col-span-1">{date}</div>
      <div className="col-span-2">
        <button onClick={onButtonClick} className="bg-blue-500 text-white px-3 py-1 rounded">
          {buttonText}
        </button>
      </div>
      <div className="col-span-3">{description}</div>
      <div className="col-span-1 text-end">{endDate}</div>
    </div>
  );
};

export default DokumentRow;
