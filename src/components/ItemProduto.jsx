const ItemProduto = ({ produto }) => {
    return (
        <div className="bg-red-2/50 text-red-7 flex flex-col gap-3 items-center rounded p-3 text-center select-none cursor-pointer hover:border-slate-400 hover:border">
            <img src={produto.img} alt={produto.nome} />
            <div className="text-sm mt-2 uppercase flex justify-center items-center">
                {produto.tipo === "Tinto" && (
                    <span className="2 h-2 w-2 bg-red-6 rounded-full"></span>
                    )}
                {produto.tipo === "Branco" && (
                    <span className=" h-2 w-2 bg-yellow-1 rounded-full"></span>
                    )}
                <span className="ml-2">{produto.tipo}</span>
            </div>
            <span className="font-bold">{produto.nome}</span>
            <span className="font-light">{produto.denom}</span>
            <span className="uppercase">{produto.marca}</span>
        </div>
    )
}

export default ItemProduto;