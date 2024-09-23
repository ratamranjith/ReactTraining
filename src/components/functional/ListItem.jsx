const ListItem = ({ numbers }) => {
  return (
    <div>
      <ul>
        {numbers().map((number, index) => (
          <li key={index}>
            {index} - {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
