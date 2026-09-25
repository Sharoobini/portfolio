import React, { useState } from 'react';
import { Code2 } from 'lucide-react';

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  if (didError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/60 via-slate-900 to-fuchsia-950/60 border border-purple-500/20 text-purple-300 ${className ?? ''}`}
        style={style}
      >
        <Code2 className="w-8 h-8 text-fuchsia-400 opacity-60 mb-1" />
        <span className="text-[11px] text-purple-300/60 font-mono font-medium truncate max-w-[80%]">{alt || 'Project Preview'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}
