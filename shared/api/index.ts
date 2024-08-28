// 后台地址
const GATE_WAY_PATH: string | undefined = process.env.BASE_URL
export const BASE_URL: string = GATE_WAY_PATH || `http:xxxx/api`
// const BASE_URL_OTHER: string = `http:xxx2.api` // 多个后台地址
