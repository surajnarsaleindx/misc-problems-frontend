import { Link } from 'react-router-dom';
import { formatDistance, subDays } from 'date-fns';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="text-white text-lg font-semibold" to="/">
            LOGO:
          </Link>
          <div className="space-x-4">
            <Link className="text-white" to="/counter">
              Redux-Toolkit
            </Link>
            <Link className="text-white" to="/posts">
              React-Query
            </Link>
            <Link className="text-white" to="/todos">
              Immer
            </Link>
            <Link to="/">
              {formatDistance(subDays(new Date(), 3), new Date(), {
                addSuffix: true,
              })}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
