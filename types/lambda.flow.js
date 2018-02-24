type Json = string

declare type LambdaResponse = {
  statusCode: number,
}
declare type LambdaEvent = {
  body: Json,
}
declare type LambdaContext = Object
declare type LambdaCallback = (error: any, response?: LambdaResponse) => void
