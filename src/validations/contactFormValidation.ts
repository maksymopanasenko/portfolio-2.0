import { object, string, boolean } from 'yup';

export const contactValidationSchema = object().shape({
  name: string().required(),
  email: string().email().required(),
  message: string(),
  policy: boolean().oneOf([true]).required(),
});
