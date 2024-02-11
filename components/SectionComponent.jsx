const SectionComponent = ({ title, text }) => {
  // Function to render text based on its type
  const renderText = (text) => {
    // If text is an array, it's assumed to be a list with bold parts
    if (Array.isArray(text)) {
      return text.map((item, index) => (
        <p key={index} className="mb-4">
          <strong className="text-indigo-600">{item.bold}</strong> {item.normal}
        </p>
      ));
    }
    // If text is a string, render it as a paragraph
    return <p className="mb-4">{text}</p>;
  };

  return (
    <div className="max-w-4xl mx-auto my-16 p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-4xl font-bold text-indigo-600 text-center mb-6">
        {title}
      </h2>
      <div className="text-gray-700 text-lg space-y-4">{renderText(text)}</div>
    </div>
  );
};

export default SectionComponent;
