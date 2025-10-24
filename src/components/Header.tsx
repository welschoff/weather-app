import logo from '../assets/images/logo.svg';
import units from '../assets/images/icon-units.svg';
import dropdown from '../assets/images/icon-dropdown.svg';

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="grid grid-flow-col items-center gap-2 px-5 py-3 bg-[#25253F] rounded-lg">
        <img src={units} alt="" />
        <span>Units</span>
        <img className="w-4" src={dropdown} alt="" />
      </div>
    </div>
  );
}

export default Header;
