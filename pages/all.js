import Head from "next/head";
import Header from "../components/Header";
import FooterInformation from "../components/FooterInformation";
import ProjectList from "../components/project/ProjectList";

const all = () => {
  return (
    <>
      <Head>
        <title>Hyip Review</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="content">
        <ProjectList />
      </div>
      <FooterInformation />
    </>
  );
};

export default all;
