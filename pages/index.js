import Head from "next/head";
// import Header from "../components/Header";
// import JoinButton from "../components/button/ButtonElasticity";
// import FooterInformation from "../components/FooterInformation";
// import ProjectName from "../components/project/ProjectTitle";
// import ProjectImages from "../components/project/ProjectImages";
// import ProjectStatus from "../components/project/ProjectStatus";
// import ProjectOverView from "../components/project/ProjectOverView";
// import ProjectList from "../components/project/ProjectList";

export default function Home() {
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
          <p>Home page</p>
          <hr />
          <h1>COMING SOON</h1>
        </div>
        <div className="display-bottomleft">
          <p>Make your investment easier</p>
        </div>
      </div>
      {/* <Head>
        <title>Hyip Review</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="content">
        <ProjectName projectName={projectName} href={reff} />
        <ProjectImages projectName={projectName} href={reff} />
        <ProjectStatus />
        <JoinButton href={reff} content={projectName} />
        <ProjectOverView />
        <ProjectList />
      </div>
      <FooterInformation /> */}
    </>
  );
}
