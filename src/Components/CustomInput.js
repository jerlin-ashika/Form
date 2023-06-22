const CustomInput = (props) => {
  return (
    <div className="m-3   ">
      <input
        className="w-50 rounded"
        id="name"
        name={props.name}
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        max={props.max}
        formik={props.formik}
      />
      {props.formik?.touched[props.name] && props.formik?.errors[props.name] ? (
        <p className="errorMsg  w-75 d-flex justify-content-center">
          {props.formik.errors[props.name]}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
export default CustomInput;
