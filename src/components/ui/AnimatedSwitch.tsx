
import React from 'react';

/**
 * AnimatedSwitch transitions its children in/out smoothly when the key changes.
 * It uses fade and scale with Tailwind's utilities. 
 */
const AnimatedSwitch: React.FC<{ children: React.ReactNode; animationKey: string }> = ({
  children,
  animationKey,
}) => {
  const [show, setShow] = React.useState(true);
  const [prev, setPrev] = React.useState<React.ReactNode>(children);

  React.useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => {
      setShow(true);
      setPrev(children);
    }, 150); // duration should match out animation
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [animationKey]);

  return (
    <div className="relative">
      <div
        className={`transition-all duration-200 ease-in-out ${
          show
            ? 'animate-fade-in animate-scale-in opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          willChange: 'opacity, transform',
        }}
        key={animationKey}
      >
        {show ? children : prev}
      </div>
    </div>
  );
};

export default AnimatedSwitch;
