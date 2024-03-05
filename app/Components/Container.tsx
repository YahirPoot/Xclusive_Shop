import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div
      className="mx-auto
        max-w-[1920px]
        px-4
        md:px-2
        xl:px-20
        "
    >
      {children}
    </div>
  );
};

export default Container;