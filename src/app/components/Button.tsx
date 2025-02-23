'use client';

const Button = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white px-4 py-2 rounded mt-4"
    >
      Clique Aqui
    </button>
  );
};

export default Button;