import SoftwareList from "../utils/SoftwareList";

const ListInComponents = () => {
  // Group products by company
  const groupedByCompany = SoftwareList.reduce((acc, curr) => {
    if (!acc[curr.company]) {
      acc[curr.company] = [];
    }
    acc[curr.company].push(curr);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Company and its products
      </h1>
      <div className="border-l-4 border-gray-300 pl-4">
        {Object.keys(groupedByCompany).map((company, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {company}
            </h2>
            <div className="ml-4">
              {groupedByCompany[company].map((product) => (
                <div
                  key={product.name}
                  className="pl-4 border-l-4 border-gray-200 relative"
                >
                  <div className="absolute -left-3 top-2 w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">- {product.name}</span>
                  <span className="text-gray-500 ml-2">
                    Version: {product.version}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInComponents;
