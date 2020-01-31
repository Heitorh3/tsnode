enum sexo {Masculino, Feminino};

export interface UserInterface {
  email: string;
  firstName?: string;
  lastName?: string;
  sexo?: sexo;
}
