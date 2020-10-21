import * as React from "react";
import { render } from "react-dom";
import "./components/topicCard/topicStyle.scss";

const topics = [
  {
    topic: "Applicances",
    image: "https://uccefbd6a9e62c26c2e918e72e47.previews.dropboxusercontent.com/p/thumb/AA_Y0y2XIOvJOKT4YahdNDbtQoSL0POnCb3poOhKVIa3A5GYgpc5q0NLW9WFwscMTnkGeP9DJV3C7esazVyrOI6lk-dG3eowBC03cI2zlqf2j6pqthf-Vr8Sc9xihKqlib5t-rUlQzheoE7lbuXlukXYIEuU3C4qsS5SP7A2HKDZi2nK8b4uvMMvitMN1b_YQpkqxlgxsWJIOcnl1y1czYzJPQMlk_-1gswsdjIEChgpw3hyu5TpbENUiDnIveuE8UBg4BhYsydqp2PT1ZlIUeJ6wgqjJxxeqGdMtfe-UFU6hjySDA6foD94ejUNPxlP4-plYlrFyJJAk58ASfFnxmM5JuMNSRuMBSoqrmeJkOdK8CnZqU6UdPpI-3bIzIzoOARRDORD6S0sYV6-7Vr9FtJVErhny4kl5_K8GvFy-DPw-w/p.jpeg?size=2048x1536&size_mode=3",
  },
  {
    topic: "Cables",
    image: "https://uc0aabfdee7fd2843c08c823bdf9.previews.dropboxusercontent.com/p/thumb/AA-LbnhTHkZVl2nG_qhG0FcOEr3N05DGKwbnV_85Uv2vD-gv2m2Gj7ERPfQDS1Iug-cvEujZsKmUBk18VWPcFP-iAwaJN_lkdo1uD14B63GDXJfgF4FRYbIBZ1aVEPq96AwkWBugPggbkm5xZbHUQmFi022jBFiJGVebwvcgt_WESXtGcOUUOfVdjkQ0HP9l3raMrziIm6Rjm63GDw3tUpGLqJuQR2s2JACyiHk_k91404EZPgEn1H2Q2tMei4DSCxuNTk1jizW37Sv6Gt3t0Du5tUp6ebWCazWVLSdwAiD_ziYrwMJZ8jMLzD0TlpeAWu134W5PBFz8pMlIgjAmhHS1UOofvvHN8r6fEUv2nn0zvwgw3WQ1HYwMKYbadYlDZohIWWT7NmqMmLwRMTkOmHhXdsJDY-sj7PhrExEJEd4LNw/p.png?size=2048x1536&size_mode=3",
  },
  {
    topic: "LCD Screen",
    image: "https://uccd38ce9684712d1e26982c345a.previews.dropboxusercontent.com/p/thumb/AA-xUTVOt2jyEoAP2IdrGDpqc-NTVxS3Umq8whT9InOKmJ2OPHooLp7tsEr5ZEWUWQ61pADCGjS_v5sC7ExH6NNyJJIC3c7663oS03GvLKsl6lPWMM6ngrbu4LtdfPNMX01lB3sSZWPWQSmxj3cTSUqWQ6-O_CFWFMUUqnw8KpVB5zvUke6AkTdfd4N4uNDjir6UpSjIJrBeeoZNqXWpOPLQ4-EDV2GzvPYmplAHyMOKHGKTbS30pnww8vfn2GsHNJxKECUiGV3TlBX-QWOrOraGUsHY6WhOTIIwmRpxvzoBsRBMeU-qrwo3VhdJlI6jFH0lCI-sg2Mt0orG033vp9a6bPrlwA7Z2eH9hO8PUTRKoWZlXt85TfDUH1aw1vkIkfUwyr2juvr1tTCuR3ZtBrJeinvib61QjC3_r-c651xqApjeSZUvARjgkMH7oZZed1DNEBJMl6OTKJhjgC3pUaf7cc5Cn1iJ9bh4ZIUCUcg70g/p.jpeg?size=2048x1536&size_mode=3",
  },
  {
    topic: "Main Battery",
    image: "https://uc5c91f8b68ce3aec2e8663ae0c0.previews.dropboxusercontent.com/p/thumb/AA_QPR3Rrcryps4a9ZJrWxneukpa0yEJ7bI_dvTmT-twYzBnnEpVRW4ji5iFLqujGYjOK2TJKuRtFAPoht3N_G21ktS2N6idr9B-Z6lf-ZsFmvnkDnCL3k4MRot1v93tXuq5vXWCg-sWDHj_Tp2sGmhf3jeTXOQhapO8orGE3fAzrG8c473JLUME46amUxvZdrVTD-SP269b15ex1NtDTfb2RNc3ZuvaSUMBH540UCsYAr-UTRToMje_FfJ_-2Rpfo24Hdq-ZpCGUYZNSQvvvrGkUExSyphyBZ7w9ihxvL6D2TnGhw8mIOlrKQ1Hc9e_hhcNLzN41hbAcYfhQUOGrWNgXiQaOk_fOPeRg8DPXG-zfA/p.jpeg?size=2048x1536&size_mode=3",
  },
  {
    topic: "Side Panel",
    image: "https://uc35aa27da7b07beb365234df3fc.previews.dropboxusercontent.com/p/thumb/AA-vw9NFjMRcYVN-4yJZQZ7XB3Uu-nUIwkbQF_ZQKXtDaVqDCO1biYBC1ibB1fNG_rTvr1zIKvG0G5-ViudYloMDf9eT9Ydj2ZhHIgniX8tqXW2ItBwQQR47IQyyZ1_qWy7blZkNGnav3HBFWsil4QGF4KAa74Tdv2BXBYjf6IgdoXwXHwC1kzjVcpfBlYwWzj8Z7XRoBme1ja5bett9Bm34E0Y4TBw6STy5u-GQ2B6ukETo-TXkq3xxrl-6cmEb3ZdnJsHp2OXsfqJK5HCCegpq3PInL6QhgR-h9WVXzV8VIggP0DOMva8R8V_Yemf4uzSm6PN4qJzGwQWr6FX7pp_qr8A_bLG4PVnlel6Q60zf75UIuAH74_HlUKtKgnabL09PZpqIQMK73HJNP-effqO78bP3Z9_HDABirh8CWk3-XQ/p.jpeg?fv_content=true&size_mode=5",
  }
]

const App = () => {
  return (
    <>
      <div className="container">
        {topics.map((src) => (
          <div 
          className="card"
          style={{ 
            backgroundImage:`url(${src.image})` 
        }}
          >
            <p className="topic">{src.topic}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;