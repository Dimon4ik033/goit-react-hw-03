import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

export default function ContactForm ({ onSubmit }) {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must not exceed 50 characters')
            .required('Name is required'),
        number: Yup.string()
            .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format must be 000-00-00')
            .required('Number is required'),
    });

    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className={css.form}>
                    <div className={css.container}>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                    </div>
                    <div className={css.container}>
                        <label htmlFor="number">Number</label>
                        <Field type="text" id="number" name="number" />
                        <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit" className={css.btn}>Add Contact</button>
                </Form>
            )}
        </Formik>
    );
};