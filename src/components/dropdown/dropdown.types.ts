export interface DropdownOptionType {
  id: number;
  name: string;
  label: string;
}

export interface DropdownPropsType {
  data: Array<DropdownOptionType>;
}
