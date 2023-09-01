import { useForm } from "react-hook-form";
import InputComponent from "../../features/input/input.component";

const LogInComponent = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = handleSubmit((formData) => {
    console.log("formData", formData);
  });

  return (
    <form onSubmit={onSubmit}>
      <InputComponent
        control={control}
        label="نام کاربری"
        name="username"
        type="text"
      />
    </form>
  );
};

export default LogInComponent;
