import * as React from "react";
import { render } from "react-dom";
import "./components/videoCard/videoStyle.scss";

const videos = ["https://ucbdba3a62ba74a9d284204d77ab.previews.dropboxusercontent.com/p/thumb/AA8s5hCTfQR05Tp_G16DJX0iaqmHx9JB4N5Iyz7ANKhhnu6q4LL08iorLIcZI6GdbSIRixb7CejrJDPPZuoHuXc-KYdVzelIOylhvajYKFksi9iILcGu9eui3gNKuRfoyrtMtZuQaH9moJTKCRV5Ytqrw5bD0PWO7-ppZUTLlMQxjCFp0hpxg4NHJaVJPcXtXCqnJZ1Z0328fM1foPefj-JbKzXraIliBlSNXxfamrY1SVKXhgx0MEE_my6czs-_-lnl4JodBOnj3OQMUyysHG_gXuv5EyTiZzFrfDdgJ3efO00UQqMFH3gfpqNTGEVOhmsn5DBkgDPazF-lVy4riXLdvGpipC1EJ2V6Bjv8ETgVPA/p.jpeg?fv_content=true&size_mode=5",
                "https://uc07d37f58a2ae68e11171f24973.previews.dropboxusercontent.com/p/thumb/AA8ZVoO9hAZTjpkitKmC41OQYJpGzcfwQD6LteVQ-3sHv536YM6B9Xu2azgMJBM8WpSfjZSlRiHW4ebWjaupjj70OTdtSDoa_VUgZkSKfyCl0iFK_7Ouyl_cmV3YwYatCUVtXGLsHuhTCGQ8bB857PxOJL8pe8R3uuXv7aHyhKgULIKggAT3RM9q4JIj7Y5DmqkV0clFaYthvOq0fTza15XoXfzRfhXq3GKvIiMQ7cAY9tpJwJ5QoGeP78TRpfZ70FJh-js6W-pXdTuiavv29-JXLhMA7JuPn4r2nN2wNYKc7mzm_AJuAbHemNHJ6hc-gL5RlUlI_VWRTwuWsL3WW-zVJLOl1XC_wECmadiBk5fQsA/p.jpeg?fv_content=true&size_mode=5",
                "https://uc2f3457c017d243a71639a7443f.previews.dropboxusercontent.com/p/thumb/AA8cK5xgHEBOMdSxXDRY1RonCtwTlYAFkoZy-NpDsZNlqTRoOmmthh4dq6eoDqUzcj8m3q3bbd7VV3YtEdc37v1L41h0p75WHhS-szdfOhtxXg_CpWvoBs9wOoLpih2zaeVUAwZ-Qit-oTBPyCBECWStd3hU3ZMA6ViX1-DfXgaYIye84bSETg7dNDA3U2Gnb9-1UWwF7YPk0AXhBNs5p3-nAf2eCUhQc_ELfvWUuuOsLHHBo4xZUM9SseG5E_4Ee0iDKTTNcup6NZO-aQqlNp4Py_uACkbM8nR76eQ-Y05YwBv9LLMU3wumh2TUY7NEJ6IeqJMzSH_z7l-bv_WMTTKOp1dE0CUOPo-XqeBH8iRGFQ/p.jpeg?fv_content=true&size_mode=5",
               ];

const App = () => {
  return (
    <>
      <div className="container">
        {videos.map((src) => (
          <div
            key={src}
            className="card"
            style={{
              backgroundImage: `url(${src})`
            }}
          />
        ))}
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;