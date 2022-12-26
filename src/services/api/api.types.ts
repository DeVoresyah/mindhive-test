import type { ApiResponse } from 'apisauce'

export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

export interface Rating {
  rate: number
  count: number
}

export interface ProductResponse {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}
