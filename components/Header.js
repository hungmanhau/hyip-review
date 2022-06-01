import Link from "next/link";

function Header() {
  return (
    <div className="top">
      <div className="row large light-grey">
        <div className="topbar">
          <div className="col">
            <Link href="/" className="button block align-left">
              Hyip-Review.com
            </Link>
          </div>
          {/* <div className="col s3">
            <a href="/all" className="button block">
              All project
            </a>
          </div>
          <div className="col s3">
            <a href="/" className="button block">
              About us
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
