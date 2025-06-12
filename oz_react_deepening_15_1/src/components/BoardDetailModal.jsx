const BoardDetailModal = ({ item, onClose }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
        <h2 className="text-xl font-semibold mb-4 whitespace-break-spaces">{item.title}</h2>
        <p>{item.desc}</p>
        <button
          onClick={onClose}
          className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default BoardDetailModal;
