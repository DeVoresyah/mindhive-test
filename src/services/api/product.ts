import { ApiService } from './config'
import { getGeneralApiProblem } from './apiProblem'

// Types
import type { ApiResponse } from 'apisauce'
import type { ProductResponse } from './api.types'
import type { GeneralApiProblem } from './apiProblem'

export class ProductApi extends ApiService {
  async getProduct(
    id: number
  ): Promise<{ kind: 'ok'; product: ProductResponse } | GeneralApiProblem> {
    const response: ApiResponse<ProductResponse> = await this.apisauce.get(
      `/products/${id}`
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      return { kind: 'ok', product: response.data! }
    } catch (e) {
      return { kind: 'bad-data' }
    }
  }
}
