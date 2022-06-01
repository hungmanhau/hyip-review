import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import ButtonElasticity from "../../components/button/ButtonElasticity";
import FooterInformation from "../../components/FooterInformation";
import ProjectTitle from "../../components/project/ProjectTitle";
import ProjectImages from "../../components/project/ProjectImages";
import ProjectStatus from "../../components/project/ProjectStatus";
import ProjectOverView from "../../components/project/ProjectOverView";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonRainbowBorder from "../../components/button/ButtonRainbowBorder";

const Project = (props) => {
  const router = useRouter();
  let projectName = router.query.projectName;
  const reff = "https://hungba.blog";

  const [data, setData] = useState();

  useEffect(() => {
    if (projectName != undefined) {
      axios.get(`/api/fetch/${projectName}`).then((res) => {
        setData(res.data[0]);
      });
    }
  }, [projectName]);

  return (
    <>
      <Head>
        <title>Hyip Review</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="content">
        <ProjectTitle
          projectName={projectName}
          href={data != undefined ? data.referralLink : reff}
        />
        <ProjectImages
          projectName={projectName}
          href={data != undefined ? data.referralLink : reff}
        />
        <div className="pc-hide">
          <ButtonRainbowBorder
            href={data != undefined ? data.referralLink : reff}
            content={"Discovery website"}
          />
        </div>
        <ProjectStatus data={data} />
        <ButtonElasticity
          href={data != undefined ? data.referralLink : reff}
          content={projectName}
        />
        <ProjectOverView data={data} />
        <ButtonRainbowBorder
          href={data != undefined ? data.referralLink : reff}
          content={"Check by yourself"}
        />
      </div>
      <FooterInformation />
    </>
  );
};

export default Project;
