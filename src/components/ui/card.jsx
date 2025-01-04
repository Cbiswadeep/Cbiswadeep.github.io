import React from 'react';

export const Card = ({ className = '', children, ...props }) => (
  <div 
    className={`rounded-lg border bg-white shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = ({ className = '', children, ...props }) => (
  <div 
    className={`p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ className = '', children, ...props }) => (
  <div 
    className={`p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardTitle = ({ className = '', children, ...props }) => (
  <h3 
    className={`text-2xl font-semibold ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription = ({ className = '', children, ...props }) => (
  <p 
    className={`text-sm text-gray-600 ${className}`}
    {...props}
  >
    {children}
  </p>
);

