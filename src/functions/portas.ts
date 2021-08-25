import PortaModel from "../model/porta";

export function criarPortas(quant: number, portaComPresente: number): PortaModel[] {
  return Array.from({ length: quant }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaComPresente;
    return new PortaModel(numero, temPresente);
  })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
  const portasRetorno = portas.map(portaAtual => {
    const igualAModificada = portaAtual.numero === portaModificada.numero;

    if(igualAModificada)  {
      return portaModificada
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
    }
  })
  
  return portasRetorno;
}