export const handleFormChange = <T>(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  form: T,
  setForm: (values: T) => void
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
