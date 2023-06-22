import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();
  const data = localStorage.getItem("Form values");
  let model = JSON.parse(data);
  console.log("empy data in local storage", model);
  const [del, setDel] = useState(false);
  useEffect(() => {}, [del]);
  const handleDelete = () => {
    localStorage.removeItem("Form values");
    setDel(true);
  };
  return (
    <>
      <div className="mt-3 d-flex justify-content-end mx-5 ">
        <button
          className="rounded bg-dark text-white px-4 py-2"
          onClick={() => navigate("/form")}
        >
          New
        </button>
      </div>
      <div className="tableDiv m-3  ">
        <table>
          <tr className="bg-dark text-white">
            <th>sl.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date Of Birth</th>
            <th>Sex</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Pin code</th>
            <th>Action</th>
          </tr>
          {/* 
          {data &&
            data?.map((model, index) => {
              return ( */}
          <>
            {model !== null ? (
              <tr>
                {" "}
                <td>{1}</td>
                <td>{model?.name}</td>
                <td>{model?.age}</td>
                <td>{model?.DOB}</td>
                <td>{model?.sex}</td>
                <td>{model?.phoneNo}</td>
                <td>{model?.address}</td>
                <td>{model?.pinCode}</td>
                <td>
                  <button
                    className="rounded bg-dark text-white px-1 py-1 mx-1"
                    onClick={() => navigate("/form/edit")}
                  >
                    Update
                  </button>
                  <button
                    className="rounded bg-dark text-white px-2 py-1"
                    onClick={() => navigate("/view")}
                  >
                    view
                  </button>
                  <button
                    className="rounded bg-dark text-white px-2 py-1"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ) : (
              <tr>
                <td colspan="9">No Data Found</td>
              </tr>
            )}
          </>
          {/* );
            })} */}
        </table>
      </div>
    </>
  );
}
export default Table;
