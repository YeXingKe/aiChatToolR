export interface LLMModelProvider {
  id: string
  providerName: string
  providerType: string
  sorted: number
}

export interface LLMModel {
  name: string
  displayName?: string
  available: boolean
  provider: LLMModelProvider
  sorted: number
}
