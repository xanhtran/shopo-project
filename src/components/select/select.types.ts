export interface SelectOptionType {
  id: number;
  name: string;
  label: string;
}

export interface SelectPropsType {
  data: Array<SelectOptionType>;
  name: string;
  selected?: string;
  onChange: (e: onChangeSelectType) => void;
}

export interface onChangeSelectType {
  target: {
    name: string;
    value: string;
  };
}
