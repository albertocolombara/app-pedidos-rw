const ItemProduto = ({ produto, adicionarAoCarrinho }) => {
    const handleClick = () => {
        adicionarAoCarrinho(produto)
    }

    return (
        <div className="bg-red-2/50 text-red-7 flex flex-col gap-3 items-center rounded p-3 text-center select-none relative">
            <img src={produto.img} alt={produto.nome} />
            <div className="text-sm mt-2 uppercase flex justify-center items-center">
                {produto.tipo === "Tinto" && (
                    <span className="2 h-2 w-4 bg-red-6 rounded-full"></span>
                )}
                {produto.tipo === "Branco" && (
                    <span className=" h-2 w-4 bg-yellow-1 rounded-full"></span>
                )}
                {produto.tipo === "Rosé" && (
                    <span className=" h-2 w-4 bg-red-3 rounded-full"></span>
                )}
                <span className="ml-2">{produto.tipo}</span>
            </div>
            <span className="font-bold">{produto.nome}</span>
            <span className="font-light">{produto.denom}</span>
            <span className="uppercase mb-9">{produto.marca}</span>
            <button onClick={handleClick} className="mt-auto py-2 bg-gradient-to-r from-red-6 to-red-7 text-red-1 w-full absolute bottom-0 rounded-b hover:to-red-6">Adicionar</button>
        </div>
    )
}

export default ItemProduto;