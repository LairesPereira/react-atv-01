import Header from './Header';
import Button from './Button';
import Footer from './Footer';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Button />
      <Footer />
    </div>
  );
};

export default Page;