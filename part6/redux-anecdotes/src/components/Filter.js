import { useDispatch, useSelector } from "react-redux";
const Filter = () => {
  const dispatch = { useDispatch };
  const selector = useSelector((state) => state);
  console.log(selector);
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
