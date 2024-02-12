const ItemProduto = ({ produto }) => {
    return (
        <div className="bg-red-2/50 text-red-7 flex flex-col gap-3 items-center rounded p-3 text-center select-none cursor-pointer hover:border-slate-400 hover:border">
            <img src={produto.img} alt={produto.nome} />
            <span className="text-sm mt-2 uppercase">{produto.tipo}</span>
            <span className="font-bold">{produto.nome}</span>
            <span className="font-light">{produto.denom}</span>
            <span className="uppercase">{produto.marca}</span>
        </div>
    )
}

export default ItemProduto;