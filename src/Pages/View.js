import react from "react";

function View() {
  const data = localStorage.getItem("Form values");
  const model = JSON.parse(data);
  return (
    <>
      <ul>
        <li>name:{model.name}</li>
        <li>age:{model.age}</li>
        <li>phoneNo:{model.phoneNo}</li>
        <li>address:{model.address}</li>
        <li>DOB:{model.name}</li>
        <li>sex:{model.sex}</li>
        <li>pinCode:{model.pinCode}</li>
      </ul>
    </>
  );
}
export default View;
