import { type ElementType, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { WatermarkProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const DEFAULTS = {
  angle: -30,
  darkFontColor: 'rgba(255, 255, 255, 0.15)',
  fontSize: 16,
  gapX: 150,
  gapY: 150,
  lightFontColor: 'rgba(0, 0, 0, 0.15)',
  offsetX: 0,
  offsetY: 0,
  opacity: 0.4,
  zIndex: 9999,
};

const Watermark = <T extends ElementType = 'div'>(props: WatermarkProps<T>) => {
  const {
    angle = DEFAULTS.angle,
    as: Component = 'div' as ElementType,
    children,
    className,
    dropOldClass,
    fontColor,
    fontSize = DEFAULTS.fontSize,
    gapX = DEFAULTS.gapX,
    gapY = DEFAULTS.gapY,
    imageUrl,
    isDarkMode,
    offsetX = DEFAULTS.offsetX,
    offsetY = DEFAULTS.offsetY,
    opacity = DEFAULTS.opacity,
    style,
    text,
    variables,
    zIndex = DEFAULTS.zIndex,
    ...rest
  } = props;

  const [detectedDarkMode, setDetectedDarkMode] = useState(false);
  const watermark = useRef<HTMLDivElement>(null);
  const watermarkCache = useRef<null | string>(null);
  const currentFontColorValue = useRef<null | string>(null);

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'position-relative overflow-hidden', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const setupMutationObserver = useCallback(() => {
    const watermarkElement = watermark.current;
    const currentCache = watermarkCache.current;
    if (!watermarkElement || !currentCache) {
      return;
    }

    const originalStyle = {
      backgroundImage: `url("${currentCache}")`,
      backgroundPosition: `${offsetX}px ${offsetY}px`,
      backgroundRepeat: 'repeat',
      bottom: '0',
      left: '0',
      pointerEvents: 'none',
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: zIndex.toString(),
    };

    const restoreStyle = () => {
      Object.entries(originalStyle).forEach(([key, value]) => {
        watermarkElement.style[key as any] = value;
      });
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const isTampered = Object.entries(originalStyle).some(
            ([key, value]) => watermarkElement.style[key as any] !== value,
          );

          if (isTampered) {
            const isDark = isDarkMode ?? detectedDarkMode;
            if (
              currentFontColorValue.current &&
              (isDark
                ? currentFontColorValue.current === DEFAULTS.lightFontColor
                : currentFontColorValue.current === DEFAULTS.darkFontColor)
            ) {
              return;
            }

            restoreStyle();
          }
        }
      });
    });

    observer.observe(watermarkElement, {
      attributeFilter: ['style'],
      attributes: true,
    });

    return () => observer.disconnect();
  }, [detectedDarkMode, isDarkMode, offsetX, offsetY, zIndex]);

  useEffect(() => {
    if (isDarkMode === undefined) {
      const mediaQuery = matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => setDetectedDarkMode(e.matches);

      setDetectedDarkMode(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [isDarkMode]);

  useEffect(() => {
    const watermarkElement = watermark.current;
    if (!watermarkElement) {
      return;
    }

    const isDark = isDarkMode ?? detectedDarkMode;

    if (watermarkCache.current) {
      if (
        !currentFontColorValue.current ||
        (isDark
          ? currentFontColorValue.current === DEFAULTS.darkFontColor
          : currentFontColorValue.current === DEFAULTS.lightFontColor)
      ) {
        watermarkElement.style.backgroundImage = `url("${watermarkCache.current}")`;
        return;
      }
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.warn('Canvas context is not supported.');
      return;
    }

    const currentFontColor = fontColor || (isDark ? DEFAULTS.darkFontColor : DEFAULTS.lightFontColor);
    if (!fontColor) {
      currentFontColorValue.current = currentFontColor;
    }

    const dpr = devicePixelRatio || 1;
    canvas.width = gapX * dpr;
    canvas.height = gapY * dpr;
    ctx.scale(dpr, dpr);

    ctx.globalAlpha = opacity;
    ctx.translate(gapX / 2, gapY / 2);
    ctx.rotate((angle * Math.PI) / 180);

    if (text) {
      const lines = Array.isArray(text) ? text : text.split('\n');
      const lineHeight = fontSize * 1.2;
      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = currentFontColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const textOffsetY = -((lines.length - 1) * lineHeight) / 2;
      lines.forEach((line, index) => {
        ctx.fillText(line, 0, textOffsetY + index * lineHeight);
      });

      const dataUrl = canvas.toDataURL('image/png');
      watermarkCache.current = dataUrl;
      watermarkElement.style.backgroundImage = `url("${dataUrl}")`;
    } else if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, -img.width / 4, -img.height / 4, img.width / 2, img.height / 2);
        const dataUrl = canvas.toDataURL('image/png');
        watermarkCache.current = dataUrl;

        if (watermark.current) {
          watermark.current.style.backgroundImage = `url("${dataUrl}")`;
        }
      };
      img.onerror = () => {
        console.error('Failed to load watermark image.');
      };
    }
  }, [angle, detectedDarkMode, fontColor, fontSize, gapX, gapY, imageUrl, isDarkMode, opacity, text]);

  useEffect(() => {
    const cleanupObserver = setupMutationObserver();
    return () => cleanupObserver?.();
  }, [setupMutationObserver]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
      <div
        ref={watermark}
        style={{
          backgroundPosition: `${offsetX}px ${offsetY}px`,
          backgroundRepeat: 'repeat',
          bottom: 0,
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex,
        }}
      />
    </Component>
  );
};

Watermark.displayName = 'BRL.Watermark';

export default Watermark;
