import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import s from "./ValidationForm.module.scss";
import { PatternFormat } from "react-number-format";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  age: Yup.number().typeError('Invalid Age').required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});

function validatePhone(value) {
  let error;
  if (value[13] === "#") {
    error = "More numbers!";
  }
  return error;
}

const ValidationForm = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.products);
  const order = useSelector((state) => state.cart.qty);

  const removeFromCart = () => {
    return function (dispatch) {
      cartItems.forEach((element) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id: element } });
      });
    };
  };

  const createOrder = (prods, ord) => {
    const productsOrder = [];
    prods.forEach((el) => {
      if (Object.keys(ord).includes(el.id)) {
        const itemOrder = {
          product: el.name,
          price: el.price,
          qty: ord[el.id],
          sum: ord[el.id] * el.price,
        };
        productsOrder.push(itemOrder);
      }
    });
    console.log(productsOrder);
  };

  return (
    <div className={s.wrap}>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          age: "",
          address: "",
          phone: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values) => {
          console.log(values);
          createOrder(products, order);
          dispatch(removeFromCart());
          alert(
            "Thank you for your order, check your email for order details!"
          );
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.mainForm}>
            <div className={s.mainFormName}>
              <h4>Name: </h4>
              <Field name="name" />
              {touched.name && errors.name && <div>{errors.name}</div>}
            </div>
            <div className={s.mainFormSurname}>
              <h4>Surname: </h4>
              <Field name="surname" />
              {touched.surname && errors.surname && <div>{errors.surname}</div>}
            </div>
            <div className={s.mainFormAge}>
              <h4>Age: </h4>
              <Field name="age" />
              {touched.age && errors.age && <div>{errors.age}</div>}
            </div>
            <div className={s.mainFormAddress}>
              <h4>Address: </h4>
              <Field name="address" />
              {touched.address && errors.address && <div>{errors.address}</div>}
            </div>
            <div className={s.mainFormName}>
              <h4>Phone: </h4>
              <Field name="phone" validate={validatePhone}>
                {({ field }) => (
                  <div>
                    <PatternFormat
                      {...field}
                      format="(###)###-##-##"
                      allowEmptyFormatting
                      mask="#"
                    />
                    {errors.phone && touched.phone && (
                      <div className={s.errorMessage}>{errors.phone}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <button className={s.buttonForm} type="submit">
              Checkout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ValidationForm;
