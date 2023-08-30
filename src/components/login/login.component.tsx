import { useForm } from "react-hook-form";

const LogInComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((formData) => {
    console.log("formData", formData);
  });

  return (
    <form onSubmit={onSubmit}>
      <label>نام کاربری</label>
      <input type="text" {...register("username")} />
      <label>رمز عبور</label>
      <input type="password" {...register("password")} />
      <button>ورود</button>
    </form>
  );
};

export default LogInComponent;
