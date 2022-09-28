window.Buffer = window.Buffer || require("buffer").Buffer

export const decodeGatewayResult = data => {
  let success = false
  let decodedGatewayResult = null

  try {
    decodedGatewayResult = Buffer.from(data, "base64").toString()
    decodedGatewayResult = JSON.parse(decodedGatewayResult)
    if (decodedGatewayResult.result.success) { success = true }
  } catch (error) {}

  return success ? { success, decodedGatewayResult } : { success }
}
