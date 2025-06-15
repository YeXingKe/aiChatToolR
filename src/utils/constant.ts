export const DEFAULT_SIDEBAR_WIDTH = 300
export const MAX_SIDEBAR_WIDTH = 500
export const MIN_SIDEBAR_WIDTH = 230
export const NARROW_SIDEBAR_WIDTH = 100

export const DEFAULT_TTS_ENGINE = 'OpenAI-TTS'
export const DEFAULT_TTS_ENGINES = ['OpenAI-TTS', 'Edge-TTS']
export const DEFAULT_TTS_MODEL = 'tts-1'
export const DEFAULT_TTS_VOICE = 'alloy'
export const DEFAULT_TTS_MODELS = ['tts-1', 'tts-1-hd']
export const DEFAULT_TTS_VOICES = [
  'alloy',
  'echo',
  'fable',
  'onyx',
  'nova',
  'shimmer',
]
export const SAAS_CHAT_URL = 'https://nextchat.club'
export const SAAS_CHAT_UTM_URL = 'https://nextchat.club?utm=github'
export enum StoreKey {
  Chat = 'chat-next-web-store',
  Plugin = 'chat-next-web-plugin',
  Access = 'access-control',
  Config = 'app-config',
  Mask = 'mask-store',
  Prompt = 'prompt-store',
  Update = 'chat-update',
  Sync = 'sync',
  SdList = 'sd-list',
  Mcp = 'mcp-store',
}

export enum ServiceProvider {
  OpenAI = 'OpenAI',
  Azure = 'Azure',
  Google = 'Google',
  Anthropic = 'Anthropic',
  Baidu = 'Baidu',
  ByteDance = 'ByteDance',
  Alibaba = 'Alibaba',
  Tencent = 'Tencent',
  Moonshot = 'Moonshot',
  Stability = 'Stability',
  Iflytek = 'Iflytek',
  XAI = 'XAI',
  ChatGLM = 'ChatGLM',
  DeepSeek = 'DeepSeek',
  SiliconFlow = 'SiliconFlow',
}

const openaiModels = [
  // As of July 2024, gpt-4o-mini should be used in place of gpt-3.5-turbo,
  // as it is cheaper, more capable, multimodal, and just as fast. gpt-3.5-turbo is still available for use in the API.
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-1106',
  'gpt-3.5-turbo-0125',
  'gpt-4',
  'gpt-4-0613',
  'gpt-4-32k',
  'gpt-4-32k-0613',
  'gpt-4-turbo',
  'gpt-4-turbo-preview',
  'gpt-4.1',
  'gpt-4.1-2025-04-14',
  'gpt-4.1-mini',
  'gpt-4.1-mini-2025-04-14',
  'gpt-4.1-nano',
  'gpt-4.1-nano-2025-04-14',
  'gpt-4.5-preview',
  'gpt-4.5-preview-2025-02-27',
  'gpt-4o',
  'gpt-4o-2024-05-13',
  'gpt-4o-2024-08-06',
  'gpt-4o-2024-11-20',
  'chatgpt-4o-latest',
  'gpt-4o-mini',
  'gpt-4o-mini-2024-07-18',
  'gpt-4-vision-preview',
  'gpt-4-turbo-2024-04-09',
  'gpt-4-1106-preview',
  'dall-e-3',
  'o1-mini',
  'o1-preview',
  'o3-mini',
  'o3',
  'o4-mini',
]

const googleModels = [
  'gemini-1.5-pro-latest',
  'gemini-1.5-pro',
  'gemini-1.5-pro-002',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash-8b-latest',
  'gemini-1.5-flash',
  'gemini-1.5-flash-8b',
  'gemini-1.5-flash-002',
  'learnlm-1.5-pro-experimental',
  'gemini-exp-1206',
  'gemini-2.0-flash',
  'gemini-2.0-flash-exp',
  'gemini-2.0-flash-lite-preview-02-05',
  'gemini-2.0-flash-thinking-exp',
  'gemini-2.0-flash-thinking-exp-1219',
  'gemini-2.0-flash-thinking-exp-01-21',
  'gemini-2.0-pro-exp',
  'gemini-2.0-pro-exp-02-05',
  'gemini-2.5-pro-preview-06-05',
]

const anthropicModels = [
  'claude-instant-1.2',
  'claude-2.0',
  'claude-2.1',
  'claude-3-sonnet-20240229',
  'claude-3-opus-20240229',
  'claude-3-opus-latest',
  'claude-3-haiku-20240307',
  'claude-3-5-haiku-20241022',
  'claude-3-5-haiku-latest',
  'claude-3-5-sonnet-20240620',
  'claude-3-5-sonnet-20241022',
  'claude-3-5-sonnet-latest',
  'claude-3-7-sonnet-20250219',
  'claude-3-7-sonnet-latest',
]

const baiduModels = [
  'ernie-4.0-turbo-8k',
  'ernie-4.0-8k',
  'ernie-4.0-8k-preview',
  'ernie-4.0-8k-preview-0518',
  'ernie-4.0-8k-latest',
  'ernie-3.5-8k',
  'ernie-3.5-8k-0205',
  'ernie-speed-128k',
  'ernie-speed-8k',
  'ernie-lite-8k',
  'ernie-tiny-8k',
]

const bytedanceModels = [
  'Doubao-lite-4k',
  'Doubao-lite-32k',
  'Doubao-lite-128k',
  'Doubao-pro-4k',
  'Doubao-pro-32k',
  'Doubao-pro-128k',
]

const alibabaModes = [
  'qwen-turbo',
  'qwen-plus',
  'qwen-max',
  'qwen-max-0428',
  'qwen-max-0403',
  'qwen-max-0107',
  'qwen-max-longcontext',
  'qwen-omni-turbo',
  'qwen-vl-plus',
  'qwen-vl-max',
]

const tencentModels = [
  'hunyuan-pro',
  'hunyuan-standard',
  'hunyuan-lite',
  'hunyuan-role',
  'hunyuan-functioncall',
  'hunyuan-code',
  'hunyuan-vision',
]

const moonshotModes = ['moonshot-v1-8k', 'moonshot-v1-32k', 'moonshot-v1-128k']

const iflytekModels = [
  'general',
  'generalv3',
  'pro-128k',
  'generalv3.5',
  '4.0Ultra',
]

const deepseekModels = ['deepseek-chat', 'deepseek-coder', 'deepseek-reasoner']

const xAIModes = [
  'grok-beta',
  'grok-2',
  'grok-2-1212',
  'grok-2-latest',
  'grok-vision-beta',
  'grok-2-vision-1212',
  'grok-2-vision',
  'grok-2-vision-latest',
  'grok-3-mini-fast-beta',
  'grok-3-mini-fast',
  'grok-3-mini-fast-latest',
  'grok-3-mini-beta',
  'grok-3-mini',
  'grok-3-mini-latest',
  'grok-3-fast-beta',
  'grok-3-fast',
  'grok-3-fast-latest',
  'grok-3-beta',
  'grok-3',
  'grok-3-latest',
]

const chatglmModels = [
  'glm-4-plus',
  'glm-4-0520',
  'glm-4',
  'glm-4-air',
  'glm-4-airx',
  'glm-4-long',
  'glm-4-flashx',
  'glm-4-flash',
  'glm-4v-plus',
  'glm-4v',
  'glm-4v-flash', // free
  'cogview-3-plus',
  'cogview-3',
  'cogview-3-flash', // free
  // 目前无法适配轮询任务
  //   "cogvideox",
  //   "cogvideox-flash", // free
]

const siliconflowModels = [
  'Qwen/Qwen2.5-7B-Instruct',
  'Qwen/Qwen2.5-72B-Instruct',
  'deepseek-ai/DeepSeek-R1',
  'deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
  'deepseek-ai/DeepSeek-R1-Distill-Llama-8B',
  'deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B',
  'deepseek-ai/DeepSeek-R1-Distill-Qwen-14B',
  'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
  'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
  'deepseek-ai/DeepSeek-V3',
  'meta-llama/Llama-3.3-70B-Instruct',
  'THUDM/glm-4-9b-chat',
  'Pro/deepseek-ai/DeepSeek-R1',
  'Pro/deepseek-ai/DeepSeek-V3',
]
let seq = 1000 // 内置的模型序号生成器从1000开始
export const DEFAULT_MODELS = [
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: 'openai',
      providerName: 'OpenAI',
      providerType: 'openai',
      sorted: 1, // 这里是固定的，确保顺序与之前内置的版本一致
    },
  })),
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'azure',
      providerName: 'Azure',
      providerType: 'azure',
      sorted: 2,
    },
  })),
  ...googleModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'google',
      providerName: 'Google',
      providerType: 'google',
      sorted: 3,
    },
  })),
  ...anthropicModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'anthropic',
      providerName: 'Anthropic',
      providerType: 'anthropic',
      sorted: 4,
    },
  })),
  ...baiduModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'baidu',
      providerName: 'Baidu',
      providerType: 'baidu',
      sorted: 5,
    },
  })),
  ...bytedanceModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'bytedance',
      providerName: 'ByteDance',
      providerType: 'bytedance',
      sorted: 6,
    },
  })),
  ...alibabaModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'alibaba',
      providerName: 'Alibaba',
      providerType: 'alibaba',
      sorted: 7,
    },
  })),
  ...tencentModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'tencent',
      providerName: 'Tencent',
      providerType: 'tencent',
      sorted: 8,
    },
  })),
  ...moonshotModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'moonshot',
      providerName: 'Moonshot',
      providerType: 'moonshot',
      sorted: 9,
    },
  })),
  ...iflytekModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'iflytek',
      providerName: 'Iflytek',
      providerType: 'iflytek',
      sorted: 10,
    },
  })),
  ...xAIModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'xai',
      providerName: 'XAI',
      providerType: 'xai',
      sorted: 11,
    },
  })),
  ...chatglmModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'chatglm',
      providerName: 'ChatGLM',
      providerType: 'chatglm',
      sorted: 12,
    },
  })),
  ...deepseekModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'deepseek',
      providerName: 'DeepSeek',
      providerType: 'deepseek',
      sorted: 13,
    },
  })),
  ...siliconflowModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: 'siliconflow',
      providerName: 'SiliconFlow',
      providerType: 'siliconflow',
      sorted: 14,
    },
  })),
] as const

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`

export enum RoutePath {
  Home = '/',
  Chat = '/chat',
  Settings = '/setting',
  NewChat = '/new-chat',
  Masks = 'masks',
}
