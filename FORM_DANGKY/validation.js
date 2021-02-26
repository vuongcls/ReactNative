import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().max(10, 'Too Long!').required('Required'),
  lastName: Yup.string().max(10, 'Too Long!').required('Required'),
  phoneNumber: Yup.string()
    .min(9, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  emailAddress: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
  passwordConfirm: Yup.string().min(6, 'Too Short!').required('Required'),
});
