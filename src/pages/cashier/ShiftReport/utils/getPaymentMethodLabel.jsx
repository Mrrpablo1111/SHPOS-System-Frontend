
export const getPaymentMethodLabel = (method) => {
  switch (method) {
    case "CASH":
      return "Cash"
    case "CARD":
      return "Card"
    case "QR":
      return "QR"
    default:
      return "Unknown"
  }
}