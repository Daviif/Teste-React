import React, {useState} from "react";
import "../styles/btnfilter.css";


interface FiltroComponentsProps {
    onFiltroChance: (filtro: string) => void;
}

const FiltroComponent: React.FC<FiltroComponentsProps> = ({ onFiltroChance }) => {
    const [filtro, setFiltro] = useState<string>('');

    const selecionarFiltro = (novoFiltro: string) => {
        setFiltro(novoFiltro);
        onFiltroChance(novoFiltro);
    }

    return(
        <div>
            <button onClick={() => selecionarFiltro('Todos')}>Todos</button>
            <button onClick={() => selecionarFiltro('Maior Preço')}>Maior Preço</button>
            <button onClick={() => selecionarFiltro('Menor Preço')}>Menor Preço</button>
            <button onClick={() => selecionarFiltro('Casa')}>Casa</button>
            <button onClick={() => selecionarFiltro('Apartamento')}>Apartamento</button>
            <button onClick={() => selecionarFiltro('Lote')}>Lote</button>
        </div>
    )

}

export default FiltroComponent