import { useState } from "react";
import axios from "axios";

const setup = () => {
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const uploadData = async (e) => {
    e.preventDefault();
    var value = document.querySelector("#fname").value;

    // check key
    if (value == process.env.SECRET) {
      var isUploadDataDone = false;
      var projectName = document.querySelector("#projectName").value;
      var start = document.querySelector("#start").value;
      var script = document.querySelector("#script").value;
      var plans = document.querySelector("#plans").value;
      var paymentSystems = document.querySelector("#paymentSystems").value;
      var minimalDeposit = document.querySelector("#minimalDeposit").value;
      var typeOfPayment = document.querySelector("#typeOfPayment").value;
      var referralProgram = document.querySelector("#referralProgram").value;
      var lastCheck = document.querySelector("#lastCheck").value;
      var serverLocationCountry = document.querySelector(
        "#serverLocationCountry"
      ).value;
      var nsServer = document.querySelector("#nsServer").value;
      var domainRegistrar = document.querySelector("#domainRegistrar").value;
      var websiteIpAddress = document.querySelector("#websiteIpAddress").value;
      var Ssl = document.querySelector("#Ssl").value;
      var overView = document.querySelector("#overView").value;
      var referralLink = document.querySelector("#referralLink").value;

      const newProject = {
        projectName,
        start,
        script,
        plans,
        paymentSystems,
        minimalDeposit,
        typeOfPayment,
        referralProgram,
        lastCheck,
        serverLocationCountry,
        nsServer,
        domainRegistrar,
        websiteIpAddress,
        Ssl,
        overView,
        referralLink,
      };

      try {
        await axios.post("/api/upload/data", newProject).then((res) => {
          isUploadDataDone = true;
        });
      } catch (err) {
        alert(err.message);
      }

      if (isUploadDataDone === true) {
        const data = new FormData();
        data.append("projectName", projectName);
        data.append("index", "1");
        data.append("image", image1);
        try {
          axios.post("/api/upload/image", data).then((res) => {
            data = new FormData();
            data.append("projectName", projectName);
            data.append("index", "2");
            data.append("image", image2);
            try {
              axios.post("/api/upload/image", data).then((res) => {
                data = new FormData();
                data.append("projectName", projectName);
                data.append("index", "3");
                data.append("image", image3);
                try {
                  axios.post("/api/upload/image", data).then((res) => {
                    alert("Upload data success");
                  });
                } catch (err) {
                  alert(err.message);
                }
              });
            } catch {
              alert(err.message);
            }
          });
        } catch (err) {
          alert(err.message);
        }
      }
    } else {
      alert("get out....");
    }
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    var value = document.querySelector("#fname").value;
    if (value == process.env.SECRET) {
      var form = document.getElementById("form");
      form.style.display = "block";
    }
  };

  return (
    <div>
      <form onSubmit={onLoginSubmit}>
        <input
          type="password"
          id="fname"
          name="firstname"
          placeholder="Secret key.."
        />
        <input type="submit" value="Login" />
      </form>
      <form id="form" className="display-none" onSubmit={uploadData}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setImage1(e.target.files[0])}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setImage2(e.target.files[0])}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setImage3(e.target.files[0])}
        />

        <input type="text" id="projectName" placeholder="project name" />
        <input type="text" id="start" placeholder="start" />
        <input type="text" id="script" placeholder="script" />
        <input type="text" id="plans" placeholder="plans" />
        <input type="text" id="paymentSystems" placeholder="payment Systems" />
        <input type="text" id="minimalDeposit" placeholder="minimal Deposit" />
        <input type="text" id="typeOfPayment" placeholder="type Of Payment" />
        <input
          type="text"
          id="referralProgram"
          placeholder="referral Program"
        />
        <input type="text" id="lastCheck" placeholder="last Check" />
        <input
          type="text"
          id="serverLocationCountry"
          placeholder="server Location Country"
        />
        <input type="text" id="nsServer" placeholder="ns Server" />
        <input
          type="text"
          id="domainRegistrar"
          placeholder="domain Registrar"
        />
        <input
          type="text"
          id="websiteIpAddress"
          placeholder="website Ip Address"
        />
        <input type="text" id="Ssl" placeholder="Ssl" />
        <input type="text" id="overView" placeholder="over view" />
        <input type="text" id="referralLink" placeholder="referral link" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default setup;
