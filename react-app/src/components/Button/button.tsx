import styles from "./button.module.css";

interface props {
  children: string;
  color?: "primary" | "secondary";
  onclick: () => void;
}

function Button({ children, color = "secondary", onclick }: props) {
  return (
    <button
      type="button"
      onClick={onclick}
      className={[styles.btn, styles["btn-" + color]].join(" ")}
    >
      {children}
    </button>
  );
}
export default Button;
