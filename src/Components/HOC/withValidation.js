import { useEffect, useRef, useState } from "react";

const withValidation = (WrappedComponent) => {
  class Validation {
    constructor(value, fieldName) {
      this.value = value ?? "";
      this.fieldName = fieldName;
      this.error = null;
    }

    _guard() {
      return this.error !== null;
    }

    isEmpty() {
      if (this._guard()) return this;
      if (this.value.trim().length === 0) {
        this.error = `Sorry, but ${this.fieldName} cannot be empty.`;
      }
      return this;
    }

    isLatin() {
      if (this._guard()) return this;
      const regex = /^[a-zA-Z0-9 ]+$/;
      if (!regex.test(this.value)) {
        this.error = `Oops, ${this.fieldName} must contain only Latin characters.`;
      }
      return this;
    }

    isLength(max = 24, min = 3) {
      if (this._guard()) return this;
      const len = this.value.trim().length;
      if (len < min || len > max) {
        this.error = `Sorry, but ${this.fieldName} must contain from ${min} to ${max} characters.`;
      }
      return this;
    }

    isEmail() {
      if (this._guard()) return this;
      // чуть более адекватный email regex, чем \w + .{2,3}
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!regex.test(this.value.trim())) {
        this.error = "This email format is invalid.";
      }
      return this;
    }

    getError() {
      return this.error;
    }
  }

  const initial = {
    errors: { username: null, email: null, message: null },
    values: { username: "", email: "", message: "" },
    touched: { username: false, email: false, message: false },
  };

  return function WithValidation(props) {
    const [errors, setErrors] = useState(initial.errors);
    const [values, setValues] = useState(initial.values);
    const [touched, setTouched] = useState(initial.touched);
    const [isFormValid, setIsFormValid] = useState(false);

    const timersRef = useRef({}); // per-field debounce timers

    const runValidation = (value, name) => {
      if (name === "username") {
        return new Validation(value, name)
          .isEmpty()
          .isLength()
          .isLatin()
          .getError();
      }
      if (name === "email") {
        return new Validation(value, name).isEmpty().isEmail().getError();
      }
      if (name === "message") {
        return new Validation(value, name)
          .isEmpty()
          .isLength(500, 10)
          .getError();
      }
      return null;
    };

    const setFieldValue = (name, value) => {
      setValues((prev) => ({ ...prev, [name]: value }));
    };

    const setFieldTouched = (name, val = true) => {
      setTouched((prev) => ({ ...prev, [name]: val }));
    };

    const validateNow = (value, name) => {
      const err = runValidation(value, name);
      setErrors((prev) => ({ ...prev, [name]: err }));
      return err;
    };

    const validateDebounced = (value, name, delay = 350) => {
      if (timersRef.current[name]) clearTimeout(timersRef.current[name]);
      timersRef.current[name] = setTimeout(() => {
        validateNow(value, name);
      }, delay);
    };

    // API для формы
    const onChangeField = (name, value) => {
      setFieldValue(name, value);
      setFieldTouched(name, false);
      validateDebounced(value, name);
    };

    const onBlurField = (name, value) => {
      setFieldTouched(name, true);
      // на blur — сразу
      if (timersRef.current[name]) clearTimeout(timersRef.current[name]);
      validateNow(value, name);
    };

    const resetValues = () => {
      setErrors(initial.errors);
      setValues(initial.values);
      setTouched(initial.touched);
    };

    // Пересчёт валидности: валидные значения без обязательного blur
    useEffect(() => {
      const allFilled = Object.values(values).every((v) => v.trim().length > 0);
      const hasErrors = Object.entries(values).some(([name, value]) =>
        runValidation(value, name)
      );

      setIsFormValid(allFilled && !hasErrors);
    }, [values]);

    return (
      <WrappedComponent
        {...props}
        errors={errors}
        values={values}
        touched={touched}
        isFormValid={isFormValid}
        onChangeField={onChangeField}
        onBlurField={onBlurField}
        resetValues={resetValues}
      />
    );
  };
};

export default withValidation;
