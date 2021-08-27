import { MouseEventHandler } from 'react';
import PortaModel from '../model/porta';
import styles from '../styles/components/Porta.module.css';
import { Presente } from './Presente';

interface PortaProps {
  value: PortaModel,
  onChange: (novaPorta: PortaModel) => void;
}

export function Porta({ value, onChange }: PortaProps) {

  const door = value.selecionada && !value.aberta ? styles.selecionada : '';

  const alternarSelecao = (e: any) => onChange(value.alternarSelecao());
  const abrir = (e: any) => {
    e.stopPropagation();
    onChange(value.abrir());
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${door}`}>
      { !value.aberta ? (
          <div className={styles.porta}>
            <div className={styles.numero}>{value.numero}</div>
            <div className={styles.macaneta} onClick={abrir} />
          </div>
      ) : value.temPresente ? <Presente /> : false }
      </div>
      <div className={styles.chao}>

      </div>
    </div>
  )
}