interface SelectOptionType {
  id: number;
  name: string;
  label: string;
}

export interface SelectPropsType {
  data: Array<SelectOptionType>;
}
