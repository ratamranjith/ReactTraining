import ProductCompaniesList from "../../utils/ProductCompaniesList";

const ListProductCompanies = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Product-Based Companies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
        {ProductCompaniesList.map((keys, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {keys.name}
            </h2>
            <p className="text-gray-600">{keys.industry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProductCompanies;
