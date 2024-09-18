import { useState } from "react";

const FormManagement = () => {
  const [userData, setUserData] = useState({});

  const printData = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">
          User Information Form
        </h1>
        <form className="space-y-4" onSubmit={printData}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-2"
              placeholder="John Doe"
              required=""
              onChange={handleChange}
            />
          </div>
          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-2"
              placeholder={25}
              required=""
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-2"
              placeholder="email@example.com"
              required=""
              onChange={handleChange}
            />
          </div>
          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-2"
              placeholder="123-456-7890"
              required=""
              onChange={handleChange}
            />
          </div>
          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-2"
              rows={3}
              placeholder="123 Street Name, City"
              required=""
              onChange={handleChange}
              defaultValue={""}
            />
          </div>
          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-2"
              required=""
              onChange={handleChange}
            >
              <option value="" disabled="">
                Select your country
              </option>
              <option value="US">United States</option>
              <option value="IN">India</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          {/* Pincode */}
          <div>
            <label
              htmlFor="pincode"
              className="block text-sm font-medium text-gray-700"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-2"
              placeholder={123456}
              required=""
              onChange={handleChange}
            />
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormManagement;
