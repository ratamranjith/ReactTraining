import SoftwareList from "../utils/SoftwareList";

const ListInComponents = () => {
  const companyDetails = SoftwareList;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Software List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companyDetails.map((keys, index) => (
          <li
            key={keys.name}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-lg font-semibold text-gray-800">
              {index + 1}. {keys.company}
            </div>
            <div className="text-gray-600">Product: {keys.name}</div>
            <div className="text-gray-500">Version: {keys.version}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInComponents;
