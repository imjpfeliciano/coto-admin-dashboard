export interface DropdownItemProps {
  id?: string;
  label: string;
  value: string;
}

export interface ButtonDropdownProps {
  label: string;
  iconName: string;
  options: DropdownItemProps[];
  onItemSelect: (item: string) => void;
}
