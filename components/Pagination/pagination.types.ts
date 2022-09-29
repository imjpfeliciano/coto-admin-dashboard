export interface PaginationItemProps {
  active?: boolean;
  onClick?: (page: number) => void;
}

export interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onItemClick: (page: number) => void;
}

export interface PagesListProps {
  pages: number;
  current: number;
  onItemClick: (page: number) => void;
}
