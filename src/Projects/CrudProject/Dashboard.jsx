import { useEffect, useState } from "react";
import "./Dashboard.module.css";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Button, EditableText, InputGroup } from "@blueprintjs/core";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const addUser = async () => {
    const username = name.trim();
    const useremail = email.trim();
    const userwebsite = website.trim();

    if (username && useremail && userwebsite) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify({ username, useremail, userwebsite }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await response.json();
        setUsers([...users, data]); // Update users with the new user added
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-auto border-separate border">
        <thead className="bg-primary">
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Id
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Name
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Email
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Website
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th className="border-t-3 px-6 align-middle border-l-0 border-r-0 ql-editing text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                <EditableText value={user.id.toString()} />
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <EditableText value={user.name} />
              </td>
              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <EditableText value={user.email} />
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <EditableText value={user.website} />
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Button intent="primary" text="Update" />
                &nbsp;&nbsp;&nbsp;
                <Button intent="danger" text="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <InputGroup
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </td>
            <td>
              <InputGroup
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </td>
            <td>
              <InputGroup
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter Website"
              />
            </td>
            <td className="flex justify-center">
              <Button intent="success" text="Add User" onClick={addUser} />
              {error && <div style={{ color: "red" }}>{error}</div>}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Dashboard;
