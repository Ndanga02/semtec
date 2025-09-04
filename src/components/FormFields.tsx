import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from '@/lib/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError | undefined;
  helpText?: string
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: FieldError | undefined;
  helpText?: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: FieldError | undefined;
  helpText?: string
  options: Array<{ value: string; label: string }>
}

// Input Field
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helpText,
  className,
  id,
  ...props
}, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const errorId = error ? `${inputId}-error` : undefined
  const helpId = helpText ? `${inputId}-help` : undefined

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-semtex-ink"
        >
          {label}
        </label>
      )}
      
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'input-base',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={cn(errorId, helpId)}
        {...props}
      />

      {error && (
        <p id={errorId} className="text-sm text-red-400" role="alert">
          {error.message}
        </p>
      )}

      {helpText && !error && (
        <p id={helpId} className="text-sm text-semtex-muted-ink">
          {helpText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

// TextArea Field
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  error,
  helpText,
  className,
  id,
  rows = 4,
  ...props
}, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const errorId = error ? `${inputId}-error` : undefined
  const helpId = helpText ? `${inputId}-help` : undefined

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-semtex-ink"
        >
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        className={cn(
          'input-base resize-y min-h-[80px]',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={cn(errorId, helpId)}
        {...props}
      />

      {error && (
        <p id={errorId} className="text-sm text-red-400" role="alert">
          {error.message}
        </p>
      )}

      {helpText && !error && (
        <p id={helpId} className="text-sm text-semtex-muted-ink">
          {helpText}
        </p>
      )}
    </div>
  )
})

TextArea.displayName = 'TextArea'

// Select Field
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helpText,
  options,
  className,
  id,
  ...props
}, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const errorId = error ? `${inputId}-error` : undefined
  const helpId = helpText ? `${inputId}-help` : undefined

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-semtex-ink"
        >
          {label}
        </label>
      )}
      
      <select
        ref={ref}
        id={inputId}
        className={cn(
          'input-base cursor-pointer',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={cn(errorId, helpId)}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p id={errorId} className="text-sm text-red-400" role="alert">
          {error.message}
        </p>
      )}

      {helpText && !error && (
        <p id={helpId} className="text-sm text-semtex-muted-ink">
          {helpText}
        </p>
      )}
    </div>
  )
})

Select.displayName = 'Select'

// Checkbox Field
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError | undefined
  helpText?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error,
  helpText,
  className,
  id,
  ...props
}, ref) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  const errorId = error ? `${inputId}-error` : undefined
  const helpId = helpText ? `${inputId}-help` : undefined

  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-3">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={cn(
            'mt-1 h-4 w-4 rounded border border-semtex-hairline bg-semtex-panel/50',
            'text-semtex-focus focus:ring-semtex-focus focus:ring-offset-0 focus:ring-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={cn(errorId, helpId)}
          {...props}
        />
        
        <div className="flex-1">
          <label 
            htmlFor={inputId}
            className="text-sm font-medium text-semtex-ink cursor-pointer"
          >
            {label}
          </label>
          
          {helpText && !error && (
            <p id={helpId} className="text-sm text-semtex-muted-ink mt-1">
              {helpText}
            </p>
          )}
        </div>
      </div>

      {error && (
        <p id={errorId} className="text-sm text-red-400 ml-7" role="alert">
          {error.message}
        </p>
      )}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'