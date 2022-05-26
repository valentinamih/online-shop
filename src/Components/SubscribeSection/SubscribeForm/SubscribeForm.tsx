import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import style from './SubscribeForm.module.css'
import {useDispatch} from 'react-redux';
import {setSubscribe} from "../../../redux/cartSlice";
import {Button} from "../../common/Button/Button";

export const SubscribeForm:React.FunctionComponent<PropsType> = (props) => {
    let dispatch = useDispatch()
    return <div>
        <Formik
            initialValues={{
                email: '',
            }}
            onSubmit={(
                values: FormValues,
                {setSubmitting}: FormikHelpers<FormValues>
            ) => {
                console.log(values.email);
                values.email = ''
                setSubmitting(false);
                dispatch(setSubscribe());
            }}
        >
            <Form className={style.subscribeFormInput}>
                <Field
                    id="email"
                    name="email"
                    placeholder="john@acme.com"
                    type="email"
                />
                <Button type={'submit'} title={'Подписаться'} onClickFunction={() => {}}/>
            </Form>
        </Formik>
    </div>

}


type PropsType = {}
type FormValues = {
    email: string
}