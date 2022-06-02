import Link from "next/link";

function Header() {
  return (
    <div className="title">
      <div className="title-content">
        <ul className="nav">
          <li>
            <Link className="nav" href={"/"}>
              <a>Hyip-review.com</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
