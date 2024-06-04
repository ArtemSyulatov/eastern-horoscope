import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

export const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <>
      <input {...props} className={classes.input} />
    </>
  );
};
