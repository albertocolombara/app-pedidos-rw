const App = () => {
  return (
    <>
      <header className="py-10">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="https://www.realwines.com.br">
            <img src="../public/logo.png" alt="Logo Realwines" width={220} height={70}></img>
          </a>  
          <ul className="flex gap-4 text-red-7 font-semibold">
            <li><a href="https://www.realwines.com.br">Página Inicial</a></li>
            <li><a href="https://www.catalogo.realwines.com.br">Catálogo Online</a></li>
            <li><a href="#pedido">Faça seu pedido</a></li>
          </ul>
        </nav>
      </header>  

      <div className="container mx-auto bg-red-1/40 backdrop-blur-sm p-5 px-9 rounded-xl shadow-[0_-15px_18px_3px_rgba(0,0,0,0.025)]">
        <h1 className="text-6xl text-red-6 text-center font-semibold my-[80px]">Faça seus pedidos de forma fácil e rápida!</h1>
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
    </>
  )
}

export default App
