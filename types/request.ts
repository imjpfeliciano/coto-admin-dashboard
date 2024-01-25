export interface paginationQuery {
  limit?: number
  page?: number
}

export interface UserPaginationQuery extends paginationQuery {
  status?: string
}
