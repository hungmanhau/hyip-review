import Head from "next/head";
// import Header from "../../components/Header";
// import FooterInformation from "../../components/FooterInformation";
// import ProjectList from "../../components/project/ProjectList";

export default function Home() {
  const reff = "https://hungba.blog";
  const projectName = "Stalink";
  return (
    <>
      <Head>
        <title>Hyip Review</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bgimg">
        <div className="display-topleft">
          <p>Hyip-review.com</p>
        </div>
        <div className="display-middle">
          <p>Project List</p>
          <hr />
          <h1>COMING SOON</h1>
        </div>
        <div className="display-bottomleft">
          <p>Make your investment easier</p>
        </div>
      </div>

      {/* <Header />
      <div className="content">
        <ProjectList />
      </div>

      <FooterInformation /> */}
    </>
  );
}
