import React, { useState } from "react";
import axios from "axios";
import cx from "classnames/bind";
import style from "./Form.module.css";
import withValidation from "../../HOC/withValidation";
import Preloader from "../Preloader/Preloader";

function Form(props) {
  const {
    values,
    errors,
    touched,
    isFormValid,
    onChangeField,
    onBlurField,
    resetValues,
  } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState(false);

  const show = (setter, time = 5000) => {
    setter(true);
    setTimeout(() => setter(false), time);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeField(name, value); // не показываем ошибку во время ввода (сбрасываем touched)
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    onBlurField(name, value); // тут можно выставлять touched + финальная валидация
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isFetching) return;

    setIsFetching(true);
    setServerError(false);

    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/send-message`, {
        username: values.username,
        email: values.email,
        message: values.message,
      });

      setIsFetching(false);
      resetValues();
      show(setSuccess);
    } catch (err) {
      setIsFetching(false);
      show(setServerError);
      console.log(err);
    }
  };

  return (
    <div className={style.Form}>
      <h2>Open to new opportunities.</h2>
      <h3>Frontend / Full-stack roles</h3>
      <span>Feel free to reach out.</span>

      <label htmlFor="username">Your name</label>
      <span
        className={
          touched?.username && errors?.username
            ? cx(style.Error_username, style.err_display)
            : style.Error_username
        }
      >
        {touched?.username ? errors?.username : ""}
      </span>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Company or recruiter name"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor="email">Your email</label>
      <span
        className={
          touched?.email && errors?.email
            ? cx(style.Error_email, style.err_display)
            : style.Error_email
        }
      >
        {touched?.email ? errors?.email : ""}
      </span>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@company.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor="message">Your message</label>
      <span
        className={
          touched?.message && errors?.message
            ? cx(style.Error_message, style.err_display)
            : style.Error_message
        }
      >
        {touched?.message ? errors?.message : ""}
      </span>
      <textarea
        id="message"
        name="message"
        rows="2"
        placeholder="Tell me a bit about your project or role"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className={!isFormValid || isFetching ? style.disabled : ""}
        disabled={!isFormValid || isFetching}
      >
        {isFetching ? <Preloader /> : "Send message"}
      </button>

      <div
        className={
          success ? cx(style.Form_finish, style.visible) : style.Form_finish
        }
      >
        <div className={style.success}></div>
        <h2>Thank you — I’ll get back to you shortly.</h2>
        <p>Thanks for reaching out.</p>
      </div>

      <div
        className={
          serverError
            ? cx(style.Form_finish_error, style.visible)
            : style.Form_finish_error
        }
      >
        <span className={style.error}>X</span>
        <h2>Message not sent.</h2>
        <p>Please try again later.</p>
      </div>
    </div>
  );
}

export default withValidation(Form);
