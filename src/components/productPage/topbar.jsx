import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="products-top-bar">
      <div>
        <Link to={`/`}>
          <img src="/back-icon.svg" alt="back icon" />
        </Link>
      </div>
      <div>Detail</div>
      <div>
        <Link to={`/products}`}>
          <img src="/icon-dots.svg" alt="dots" />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
