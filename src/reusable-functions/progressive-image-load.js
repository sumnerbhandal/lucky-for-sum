import React, { useState, useEffect } from 'react';

const ProgressiveImageHook = React.memo(({ src, placeholder, alt, tabIndex = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    }
  }, [src])

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        filter: loading ? 'blur(4px)' : 'blur(0)',
        transition: "all 0.3s ease, filter 1s ease-out"
      }}
      alt={alt}
      tabIndex={tabIndex}
    />
  )
});

export default ProgressiveImageHook;