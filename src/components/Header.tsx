import logo from '../assets/images/logo.svg';
import units from '../assets/images/icon-units.svg';
import dropdown from '../assets/images/icon-dropdown.svg';

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="w-35" src={logo} alt="" />
      </div>
      <div className="flex gap-2 px-3 py-2 bg-(--card-bg) rounded-lg">
        <img src={units} alt="Units Image" />
        <span className="text-sm">Units</span>
        <img className="w-4" src={dropdown} alt="" />
      </div>
    </div>
  );
}

export default Header;
