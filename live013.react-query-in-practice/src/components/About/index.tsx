export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center fit-h-screen p-4">
      <h1 className="text-4xl font-bold text-gray-500 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-6">
        Welcome to our website! We are dedicated to providing the best services and ensuring customer satisfaction. All our products are made with love and care, and we hope you enjoy them.
        Thank you for visiting!
      </p>
      <img
        src="https://images.unsplash.com/photo-1555249226-ecdb0f629165?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="About Us"
        className="w-72 h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};
