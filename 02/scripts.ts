type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

/* type novoCarrinho= {
    item: Item;
    qtd: number;
    desconto: number;
    frete: number;
    endereco: Endereco;
    tipoTransacao: Lowercase<"credito" | "Debito">;
    cartao: Cartao;
  }; */

type novoCarrinho = Omit<Carrinho, "tipoTransacao"> & {
  endereco: Endereco;
  tipoTransacao: Lowercase<"credito" | "Debito">;
};

const venda: novoCarrinho = {
  item: {
    descricao: "alalal",
    nome: "TV",
    valor: 1300,
  },
  cartao: {
    cvv: 123,
    nome: "Thiago",
    numero: 11,
    validade: "12-12-12",
  },
  desconto: 0,
  endereco: {
    bairro: "sla",
    cep: "123123123",
    cidade: "todas",
    estado: "Foz",
    rua: "Ca",
  },
  frete: 1200,
  qtd: 2,
  tipoTransacao: "credito",
};
