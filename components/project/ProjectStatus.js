const ProjectStatus = ({ data }) => {
  return (
    <div className="row container">
      <div className="space-16" />
      <div className="bar gray padding-8 center">Status</div>
      <table className="table striped border">
        {data != undefined ? (
          <tbody>
            <tr>
              <td>Start</td>
              <td>{data.start ? data.start : "0"}</td>
            </tr>
            <tr>
              <td>Script</td>
              <td>{data.script ? data.script : "0"}</td>
            </tr>
            <tr>
              <td>Plans</td>
              <td>{data.plans ? data.plans : "0"}</td>
            </tr>
            <tr>
              <td>Payment systems</td>
              <td>{data.paymentSystems ? data.paymentSystems : "0"}</td>
            </tr>
            <tr>
              <td>Minimal deposit</td>
              <td>{data.minimalDeposit ? data.minimalDeposit : "0"}</td>
            </tr>
            <tr>
              <td>Type of payment</td>
              <td>{data.typeOfPayment ? data.typeOfPayment : "0"}</td>
            </tr>
            <tr>
              <td>Referral program</td>
              <td>{data.referralProgram ? data.referralProgram : "0"}</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>Start</td>
              <td>Default value</td>
            </tr>
            <tr>
              <td>Script</td>
              <td>Default value</td>
            </tr>
            <tr>
              <td>Plans</td>
              <td>Default value</td>
            </tr>
            <tr>
              <td>Payment systems</td>
              <td>Default value</td>
            </tr>
            <tr>
              <td>Minimal deposit</td>
              <td>Default value</td>
            </tr>
            <tr>
              <td>Type of payment</td>
              <td>Default value</td>
            </tr>
            <tr>
              <td>Referral program</td>
              <td>Default value</td>
            </tr>
          </tbody>
        )}
      </table>
      <div className="space-16" />
      <div className="bar gray padding-8 center">Whois and technical data</div>
      <table className="table striped border">
        {data != undefined ? (
          <tbody>
            <tr>
              <td>Last check</td>
              <td>{data.lastCheck ? data.lastCheck : "0"}</td>
            </tr>
            <tr>
              <td>Server location country</td>
              <td>
                {data.serverLocationCountry ? data.serverLocationCountry : "0"}
              </td>
            </tr>
            <tr>
              <td>NS server</td>
              <td>{data.nsServer ? data.nsServer : "0"}</td>
            </tr>
            <tr>
              <td>Domain Registrar</td>
              <td>{data.domainRegistrar ? data.domainRegistrar : "0"}</td>
            </tr>
            <tr>
              <td>Website IP address</td>
              <td>{data.websiteIpAddress ? data.websiteIpAddress : "0"}</td>
            </tr>
            <tr>
              <td>SSL</td>
              <td>{data.Ssl ? data.Ssl : "0"}</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>Last check</td>
              <td>2022-05-24 17:35:06</td>
            </tr>
            <tr>
              <td>Server location country</td>
              <td>United Kingdom</td>
            </tr>
            <tr>
              <td>NS server</td>
              <td>
                185.136.96.181, 185.136.97.181, 185.136.98.181, 185.136.99.181
              </td>
            </tr>
            <tr>
              <td>Domain Registrar</td>
              <td>NEULEVEL</td>
            </tr>
            <tr>
              <td>Website IP address</td>
              <td>185.186.54.67</td>
            </tr>
            <tr>
              <td>SSL</td>
              <td>Sectigo Limited</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ProjectStatus;
