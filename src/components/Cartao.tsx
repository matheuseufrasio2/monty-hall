import { ReactNode } from "react";
import styles from "../styles/components/Cartao.module.css";

interface CartaoProps {
  bgColor?: string;
  withoutPadding?: boolean;
  children: ReactNode;
}

export function Cartao({ bgColor, withoutPadding, children }: CartaoProps) {
  return (
    <div
      className={styles.cartao}
      style={{
        background: bgColor ?? "#fff",
        padding: withoutPadding ? "" : "20px"
      }}
    >
      {children}
    </div>
  )
}