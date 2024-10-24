import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //Api call ko simulate karte h
    await new Promise(resolve=>setTimeout(resolve,500))
    console.log("form submitted", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 2, message: "min length at most 2" },
            maxLength: { value: 6, message: "max length at most 6" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Middle name:</label>
        <input 
        className={errors.middleName ? "input-error" : ""}
        {...register("middleName")} />

      </div>
      <br />
      <div>
        <label>Last name:</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name is not as per the rules",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
      <br />
      <input type="submit" disable={isSubmitting}
      value={isSubmitting ? "Submitting":"Submit" }/>
    </form>
  );
}

export default App;
