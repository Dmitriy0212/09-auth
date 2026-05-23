'use client';

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  return <p>Something went wrong.</p>;
};

export default Error;
