type Props = {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
};

export const AlertMessage = (props: Props) => {
  const alertType =
    props.type === 'success'
      ? 'bg-green-500'
      : props.type === 'error'
        ? 'bg-red-500'
        : props.type === 'info'
          ? 'bg-blue-500'
          : props.type === 'warning'
            ? 'bg-orange-500'
            : 'bg-green-500';

  return (
    <div
      className={`font-regular relative mb-4 block w-full rounded-lg ${alertType} p-4 text-base leading-5 text-white opacity-100`}
    >
      {props.message}
    </div>
  );
};
