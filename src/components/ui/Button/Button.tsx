import classes from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};
