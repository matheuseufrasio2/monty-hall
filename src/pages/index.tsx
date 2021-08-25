import Link from "next/link";
import Head from 'next/head';
import { useState } from "react";
import { Cartao } from "../components/Cartao";
import { EntradaNumerica } from "../components/EntradaNumerica";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [quantPortas, setQuantPortas] = useState(3);
  const [portaComPresente, setPortaComPresente] = useState(1);

  const validarQuantPortas = (novaQuantidade: number) => {
    if (novaQuantidade > 100) {
      toast.error('Quantidade máxima de portas é 100.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if(novaQuantidade < portaComPresente) {
      toast.error('Número de portas deve ser maior que o número da porta com presente.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setQuantPortas(novaQuantidade);
  }

  const validarPortaComPresente = (novaPortaComPresente: number) => {
    if (novaPortaComPresente > quantPortas) {
      toast.error('Porta com presente precisa estar entre a quantidade de portas.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (novaPortaComPresente < 1) {
      toast.error('É  necessário ter uma porta com presente!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setPortaComPresente(novaPortaComPresente);
  }

  return (
    <>
    <Head>
      <title>Início | Monty Hall</title>
    </Head>
    <ToastContainer />
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Quantidade de Portas?"
            value={quantPortas}
            onChange={novaQuantidade => validarQuantPortas(novaQuantidade)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com presente?"
            value={portaComPresente}
            onChange={novaPortaComPresente => validarPortaComPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao withoutPadding bgColor="#28a085">
          <Link href={`/jogo/${quantPortas}/${portaComPresente}`} passHref>
            <h2
              className={styles.link}
            >
              Iniciar
            </h2>
          </Link>
        </Cartao>
      </div>
    </div>
    </>
  )
}

