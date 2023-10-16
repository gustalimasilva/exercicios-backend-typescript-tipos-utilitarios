type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

type UsuarioNoRg = Omit<Usuario, "rg">;

const cadastrarUsuário = (info: Usuario): Usuario => {
  return info;
};