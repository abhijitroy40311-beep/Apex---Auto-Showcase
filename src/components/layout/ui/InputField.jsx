import React from 'react';

const InputField = ({ 
  label, 
  id, 
  type = 'text', 
  required = false, 
  options = [], 
  className = '', 
  ...props 
}) => {
  const inputBaseStyles = "w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors";

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-xs uppercase tracking-widest text-text-secondary mb-2">
          {label} {required && '*'}
        </label>
      )}
      
      {type === 'textarea' ? (
        <textarea 
          id={id} 
          name={id}
          required={required} 
          className={`${inputBaseStyles} resize-none`} 
          {...props}
        />
      ) : type === 'select' ? (
        <select 
          id={id} 
          name={id}
          required={required} 
          className={`${inputBaseStyles} appearance-none`} 
          {...props}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input 
          type={type} 
          id={id} 
          name={id}
          required={required} 
          className={inputBaseStyles} 
          {...props}
        />
      )}
    </div>
  );
};

export default InputField;
