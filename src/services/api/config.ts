import { create } from 'apisauce'

// Types
import type { ApiConfig } from './api.types'
import type { ApisauceInstance } from 'apisauce'

const DEFAULT_API_CONFIG: ApiConfig = {
  url: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000,
}

export class ApiService {
  apisauce: ApisauceInstance
  config: ApiConfig

  constructor(config?: ApiConfig) {
    this.config = config ?? DEFAULT_API_CONFIG
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    })
  }
}
