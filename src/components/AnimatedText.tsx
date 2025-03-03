
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = true,
  delay = 0,
  duration = 25,
  tag: Tag = 'span',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={cn('inline-block', className)}>
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span
              key={`char-${charIndex}`}
              className={cn(
                'inline-block transition-all',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[0.5em]'
              )}
              style={{
                transitionDelay: `${delay + (wordIndex * 100) + (charIndex * duration)}ms`,
                transitionDuration: '500ms',
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
