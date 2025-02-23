'use client';

const Button = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-400 text-white rounded mt-4"
    >
      Clique Aqui
    </button>
  );
};

export default Button;