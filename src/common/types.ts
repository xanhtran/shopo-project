//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: M A K E   R E Q U E S T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

export interface MakeRequestPropsType {
  url: string;
  method: string;
  data?: {};
}

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: P R O D U C T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

export interface ProductType {
  id?: string;
  title: string;
  price: string;
  image: string;
  description?: string;
  rating?: {
    rate: number;
    count: number;
  };
}
