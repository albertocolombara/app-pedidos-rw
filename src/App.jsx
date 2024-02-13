import { BackpackIcon, Cross1Icon, MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import ItemProduto from './components/ItemProduto';
import { produtos } from './data/produtos';
import { useState } from 'react'

const App = () => {
  const [carrinho, setCarrinho] = useState([])
  const [termoBusca, setTermoBusca] = useState('')
  const [nomeIdentificacao, setNomeIdentificacao] = useState('')

  const handleIdentificacao = (e) => {
    setNomeIdentificacao(e.target.value);
  }

  const handleBusca = (e) => {
    setTermoBusca(e.target.value)
  }

  const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) || produto.marca.toLowerCase().includes(termoBusca.toLowerCase()))

  const adicionarAoCarrinho = (produto) => {
    if (carrinho.find(item => item.nome === produto.nome) ) {
      return
    } else {
      produto.quantidade = 1 
      setCarrinho([...carrinho, produto])
    }
  }

  const aumentarQuantidadeCarrinho = (index) => {
    const novoCarrinho = [...carrinho]
    novoCarrinho[index].quantidade++
    setCarrinho(novoCarrinho)
  }

  const diminuirQuantidadeCarrinho = (index) => {
    const novoCarrinho = [...carrinho]
    if (novoCarrinho[index].quantidade > 1) {
      novoCarrinho[index].quantidade--
      setCarrinho(novoCarrinho)
    }
  }

  const removerItemCarrinho = (index) => {
    const novoCarrinho = [...carrinho]
    novoCarrinho.splice(index, 1)
    setCarrinho(novoCarrinho)
  } 

  const handlePedido = () => {
    const quantidadeTotal = carrinho.map(item => item.quantidade).reduce((total, i) => total + i, 0)
    if (quantidadeTotal > 7 && nomeIdentificacao.length > 2) {
      const textoIdentificacao = `Nome do cliente: ${nomeIdentificacao}\n`
      const textoPedido = carrinho.map(item => `${item.quantidade}x ${item.nome} `).join('\n')
      const textoNota = textoIdentificacao + textoPedido
      navigator.clipboard.writeText(textoNota)
        .then(
        alert(`Seu pedido foi copiado para sua area de transferência, envie para nosso WhatsApp para completar o pedido. \n \nResumo do pedido: \nNome do cliente: ${nomeIdentificacao} \n${textoPedido}
        `))
        .catch(error => console.error("Houve um erro", error)) 
    } else if (quantidadeTotal < 7){
      alert("Aceitamos pedidos com o mínimo de 8 garrafas. Caso queria comprar em menor quantidade, visite a loja parceira CityVinhos (www.cityvinhos.com.br)")
    } else if (nomeIdentificacao.length < 2) {
      alert("Por favor, se identifique com pelo menos 3 letras.")
    } else {
      alert("Houve um erro.")
    }
  }

  return (
    <>
      <header className="py-10">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="https://www.realwines.com.br">
            <img src="/logo.png" alt="Logo Realwines" width={220} height={70}></img>
          </a>  
          <ul className="flex gap-4 text-red-7 font-semibold">
            <li><a href="https://www.realwines.com.br">Página Inicial</a></li>
            <li><a href="https://www.catalogo.realwines.com.br">Catálogo Online</a></li>
            <li><a href="#pedido">Faça seu pedido</a></li>
          </ul>
        </nav>
      </header>  

      <div className="container mx-auto bg-red-1/50 backdrop-blur-sm p-5 px-9 rounded-xl shadow-[0_-15px_18px_3px_rgba(46,3,3,0.1)]">
        <h1 className="text-6xl text-red-6 text-center font-semibold my-20">Faça seus pedidos de forma fácil e rápida!</h1>
        <div className="grid grid-cols-3 items-center gap-3 text-red-1 h-full">
          <div className="col-span-2 bg-gradient-to-r from-red-6 to-red-7 rounded p-8 py-[52px] h-full shadow-md shadow-red-5">
            <h2 className="text-3xl font-bold text-center flex justify-center">Olha só como é fácil fazer o pedido!</h2>
            <div className="flex gap-7 mt-7">
              <div className="flex flex-col gap-1">
                <span className="font-light uppercase text-[12px] tracking-widest">Passo 1</span>
                <span className="font-bold">Escolha os produtos</span>
                <p>Selecione os produtos desejados, ajuste a quantidade e clique em Gerar Pedido.</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-light uppercase text-[12px] tracking-widest">Passo 2</span>
                <span className="font-bold">Nos envie o pedido</span>
                <p>Agora basta você mandar o pedido copiado para nosso WhatsApp!</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-light uppercase text-[12px] tracking-widest">Pronto!</span>
                <span className="font-bold">Agora é só aguardar</span>
                <p>Vamos te responder com as informações necessárias e a tabela de preços.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-gradient-to-r from-red-7 to-red-6 rounded p-8 pt-[52px] h-full shadow-md shadow-red-5">
            <span className="text-2xl font-bold">Qual o pedido mínimo?</span>
            <p className="mt-5 mb-6">Trabalhamos com pedidos com no mínimo 8 garrafas. Para adquirir garrafas em 
              menor quantidade, acesse a loja online parceira <strong>CityVinhos (www.cityvinhos.com.br).</strong>
            </p>
            <a className="bg-gradient-to-r text-sm from-red-1 to-red-3 text-red-6 py-3 px-5 rounded inline-block self-end mt-auto transition hover:shadow-lg hover:shadow-red-3/60 hover:to-red-1" href="https://www.cityvinhos.com.br">Ir para CityVinhos →</a>
          </div>
        </div>
      </div>

      <div id="pedido" className="container mx-auto my-20 grid grid-cols-3 w-full gap-4">
        <div className="col-span-2">
          <form>
            <input type="text" placeholder="Busque seus vinhos por nome ou cantina" onChange={handleBusca} value={termoBusca} className="text-red-4 bg-red-2 border border-red-3 rounded placeholder:text-red-4 p-4 w-full bg-[url('/icon_search.svg')] bg-no-repeat bg-[20px_20px] pl-11" />
          </form>
          <div className="grid grid-cols-4 w-full mt-4 gap-3 rounded">
            {produtosFiltrados.map((produto, index) =>
              <ItemProduto key={index} produto={produto} adicionarAoCarrinho={adicionarAoCarrinho}/>
            )}
          </div>
        </div>

        <div className="rounded p-6 h-[600px] flex flex-col bg-red-2 sticky top-10">
          <div className="flex text-red-7 items-center justify-center border-b-2 border-dashed border-red-4 mb-5 pb-5 gap-3">
            <BackpackIcon width={24} height={24} />
            <h2 className="text-3xl">Resumo do pedido</h2>
          </div>
          <div className="overflow-y-auto flex-1 mb-5">
            <ul>
              {carrinho.map((item, index) => (
                <li className="flex items-center mb-3 w-full" key={index}>
                  <div className="flex justify-between w-full mr-5 items-center text-red-5 border border-dashed border-red-5 rounded p-4">
                    {item.nome}
                    <div className='flex gap-2 items-center justify-center select-none'>
                      <PlusCircledIcon onClick={() => aumentarQuantidadeCarrinho(index)} className='cursor-pointer' />
                      {item.quantidade}
                      <MinusCircledIcon onClick={() => diminuirQuantidadeCarrinho(index)} className='cursor-pointer' />
                    </div>
                  </div>
                  <Cross1Icon onClick={() => removerItemCarrinho(index)} className='cursor-pointer text-red-5'/>
                </li>
              ))}
            </ul>
          </div>
          <form>
            <input type="text" onChange={handleIdentificacao} value={nomeIdentificacao} placeholder="Nome p/ identificação" className="text-red-4 bg-red-2 border border-red-3 rounded placeholder:text-red-4 p-4 w-full mb-4" />
          </form>
          <button onClick={handlePedido} className="block mx-auto mt-auto py-5 w-full bg-gradient-to-r from-red-6 to-red-7 rounded-b text-red-1 font-bold hover:to-red-6">Pedir cotação</button>
        </div>
      </div>
    </>
  )
}

export default App
