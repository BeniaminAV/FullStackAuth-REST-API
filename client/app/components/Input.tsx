import React, { ChangeEvent } from "react"
import clsx from "clsx"

interface InputProps {
  label: string
  id: string
  type?: string
  required?: boolean
  disabled?: boolean
  value?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  disabled,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          value={value}
          onChange={onChange}
          required={required}
          className={clsx(
            "p-2 form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  )
}

export default Input
