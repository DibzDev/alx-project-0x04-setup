interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  const getBackgroundColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <button
      className={`${getBackgroundColorClass(buttonBackgroundColor)} text-white font-bold py-2 px-4 rounded transition duration-300`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;