export interface ICurrenci {
  id: string;
  name: string;
  min_size: string;
}

export interface ICurrencies {
  data: ICurrenci[];
}
