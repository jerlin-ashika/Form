import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import CustomInput from "../Components/CustomInput";
import moment from "moment";
import { useEffect } from "react";

function FormPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const pinError = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
  const formValidation = () => {
    return Yup.object({
      name: Yup.string().required("Required!"),
      age: Yup.string().required("Required!"),
      DOB: Yup.string().required("Required!"),
      sex: Yup.string().required("Required!"),
      phoneNo: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "Phone number is not valid")
        .max(10, "Phone number is not valid"),
      address: Yup.string().required("Required!"),
      pinCode: Yup.string()
        .matches(pinError, "pinCode  is not valid")
        .required("Required!"),
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      DOB: "",
      sex: "",
      phoneNo: "",
      address: "",
      pinCode: "",
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      if (type === "edit") {
        localStorage.setItem("Form values", JSON.stringify(values));
        console.log(values);
        navigate("/");
      } else {
        localStorage.setItem("Form values", JSON.stringify(values));
        console.log(values);
        navigate("/");
      }
    },
  });
  console.log(formik);
  let options = [];
  for (let i = 1; i <= 100; i++) {
    options.push(i);
  }
  useEffect(() => {
    if (type === "edit") {
      const data = localStorage.getItem("Form values");
      const model = JSON.parse(data);
      formik.setFieldValue("name", model?.name);
      formik.setFieldValue("age", model?.age);
      formik.setFieldValue("DOB", model?.DOB);
      formik.setFieldValue("pinCode", model?.pinCode);
      formik.setFieldValue("address", model?.address);
      formik.setFieldValue("phoneNo", model?.phoneNo);
      formik.setFieldValue("sex", model?.sex);
    }
  }, []);
  const date = moment().format("YYYY-MM-DD");
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="mt-5">
        {type === "edit" ? <h5> EDIT FORM </h5> : <h5>NEW FORM </h5>}
        <div className="mt-2">
          <CustomInput
            className="w-50"
            id="name"
            name="name"
            placeholder="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            formik={formik}
          />
        </div>
        <div className="m-3 ">
          <select
            className="w-50"
            id="age"
            name="age"
            placeholder="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          >
            {options.map((data, index) => (
              <>
                {/* {formik.values.age === "" ? (
                  <option value="" disabled selected>
                    Enter your age
                  </option>
                ) : ( */}
                <option value={data}>{data}</option>
                {/* )} */}
              </>
            ))}
          </select>
          {formik.touched.age && formik?.errors.age ? (
            <p className="errorMsg  w-75 d-flex justify-content-center">
              {formik.errors.age}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <CustomInput
            className="w-50"
            id="DOB"
            name="DOB"
            type="date"
            max={date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.DOB}
            formik={formik}
          />
        </div>
        <div className="m-3  d-flex justify-content-center">
          <div className=" w-50  d-flex align-items-start">
            <label>sex:</label>
            <label className="mx-5">
              <input
                type="radio"
                name="sex"
                value="female"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              Male
            </label>
            {formik.touched.sex && formik.errors.sex ? (
              <p className="errorMsg  w-75 d-flex justify-content-center">
                {formik.errors.sex}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <CustomInput
            id="phoneNo"
            name="phoneNo"
            placeholder="phoneNo"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNo}
            formik={formik}
          />
        </div>
        <div>
          <CustomInput
            id="address"
            name="address"
            placeholder="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            formik={formik}
          />
        </div>
        <div>
          <CustomInput
            id="pinCode"
            name="pinCode"
            placeholder="pinCode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pinCode}
            formik={formik}
          />
        </div>
        <div className="m-3 ">
          <button
            className="rounded bg-dark text-white px-4 py-2 w-50"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default FormPage;
