import * as React from "react";
import "./topicStyle.scss";

const topics = [
  {
    topic: "Applicances",
    image: "https://uc743a967df22be55c30730eba4b.previews.dropboxusercontent.com/p/thumb/AA_1b6akaHkfSli7msQNw25XInSmHM94CpVSq4aIkgPI-7xT5JvnSOuwjCSl6HOI7ZAFkOX7DS5YezowwDRf4Z6XnfhPv0vLG2buDlzdqNDQkfSjat1u0XR-GxbjS3BwRhXP9tt8B0xj7gRCLbM0SxOERARFMhzfHyMWzd6jmeq8EJVbqRF43hVD_f0ptOmv-CL4Loyrk5mR28LfMIVvq76j6yuHeSSZsaoTsl3Oie0bEUds-RwnLjHQ8Yf5osaYkJhpzz3x8qG91gQmiOtCFgaEtpsB-8QkIfcHqXU8MgD5E1Ngw13xSO5eV-kd_DOw4AP4TXlFVdaBufKSPFCyh-ppSkulrFw8pxhLPvqjdxxjMiDPkRaksmQcCiVRVdmEQf8eJboyi2rggmE-B3N7gw6IzK0He71eG5TmfHU9WE41NQ/p.jpeg?fv_content=true&size_mode=5",
  },
  {
    topic: "Cables",
    image: "https://uc743a967df22be55c30730eba4b.previews.dropboxusercontent.com/p/thumb/AA_1b6akaHkfSli7msQNw25XInSmHM94CpVSq4aIkgPI-7xT5JvnSOuwjCSl6HOI7ZAFkOX7DS5YezowwDRf4Z6XnfhPv0vLG2buDlzdqNDQkfSjat1u0XR-GxbjS3BwRhXP9tt8B0xj7gRCLbM0SxOERARFMhzfHyMWzd6jmeq8EJVbqRF43hVD_f0ptOmv-CL4Loyrk5mR28LfMIVvq76j6yuHeSSZsaoTsl3Oie0bEUds-RwnLjHQ8Yf5osaYkJhpzz3x8qG91gQmiOtCFgaEtpsB-8QkIfcHqXU8MgD5E1Ngw13xSO5eV-kd_DOw4AP4TXlFVdaBufKSPFCyh-ppSkulrFw8pxhLPvqjdxxjMiDPkRaksmQcCiVRVdmEQf8eJboyi2rggmE-B3N7gw6IzK0He71eG5TmfHU9WE41NQ/p.jpeg?fv_content=true&size_mode=5",
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

const TopicCard = () => {
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

export default TopicCard;
