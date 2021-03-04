import React from 'react'

const Hooks = () => {

    const [ativo, setAtivo] = React.useState(true)
    /* aqui temos uma desestruturação:
        * [ativo] é o estado controlado
        * [setAtivo] a função capaz de setar/alterar os dados/estado de [ativo]
    */

    return (<>
        <h1>Hooks:</h1>
        <p>Os Hooks são funções especiais do React que permitem controlarmos o <b>estado</b> e <b>lifecycle</b> de componentes.</p>
        <p>Veja agora como fica o botão ativo/inativo utilizando os hooks:</p>

        <fieldset>
            <div>Clique para mudar: (Ativo / Inativo)</div>
            <button onClick={() => setAtivo(!ativo)}>
                Botão {ativo ? 'ativo' : 'inativo'}
            </button>
        </fieldset>

        <p>Acima estamos utilizando da função useState(), e ela é especial para controlar o estado de componentes. lembrando: O React possui vários hooks, veremos mais ao longo do tempo..</p>

    </>)
}

export default Hooks