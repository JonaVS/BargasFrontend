import React from "react"
import { toast } from "react-toastify"

export const ToastType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  CUSTOM: "custom",
}

export const toastDispatcher = (
  type = ToastType.SUCCESS,
  message = "Default text",
  className = "",
  bodyClassName = "defaultToastBody",
  progressClassName = "",
  theme = "dark",
  JSXElement = <h1>My custom toast</h1>,
) => {
  const options = { className, bodyClassName, progressClassName, theme }  
  switch (type) {
    case "success":
      toast.success(message, options)
      break
    case "error":
      toast.error(message, options)
      break
    case "warning":
      toast.warning(message, options)
      break
    case "custom":
      toast(JSXElement)
      break
    default:
      break
  }
}
