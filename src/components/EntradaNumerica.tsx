import styles from "../styles/components/EntradaNumerica.module.css";

interface EntradaNumericaProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function EntradaNumerica({ text, value, onChange }: EntradaNumericaProps) {

  const decrementar = () => onChange(value - 1);

  const incrementar = () => onChange(value + 1);
  
  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.botoes}>
        <button className={styles.btn} onClick={decrementar}>-</button>
        <button className={styles.btn} onClick={incrementar}>+</button>
      </div>
    </div>
  )
}