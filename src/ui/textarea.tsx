import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ ...props }) => {
  return (
    <textarea
      {...props}
      className="w-full p-2 border border-gray-300 rounded shadow-sm resize-none"
    />
  );
};
