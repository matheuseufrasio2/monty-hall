import { useEffect, useState } from "react";
import Head from 'next/head';
import { Porta } from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from '../../../styles/pages/Jogo.module.css';
import PortaModel from "../../../model/porta";

export default function Jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState<PortaModel[]>([]);

  
  useEffect(() => {
    const portasRouter = Number(router.query.portas);
    const temPresenteRouter = Number(router.query.temPresente);

    setPortas(criarPortas(portasRouter, temPresenteRouter));
    
  }, [router?.query]);

  return (
    <>
    <Head>
      <title>Jogando | Monty Hall</title>
    </Head>
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {
          portas && portas.map(porta => (
            <Porta
              key={porta.numero}
              value={porta}
              onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
            />
          ))
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
    </>
  )
}