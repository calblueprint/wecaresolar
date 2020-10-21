import * as React from "react";
import "./topicStyle.scss";

const topics = [
  {
    topic: "Applicances",
    image: "https://uc743a967df22be55c30730eba4b.previews.dropboxusercontent.com/p/thumb/AA_1b6akaHkfSli7msQNw25XInSmHM94CpVSq4aIkgPI-7xT5JvnSOuwjCSl6HOI7ZAFkOX7DS5YezowwDRf4Z6XnfhPv0vLG2buDlzdqNDQkfSjat1u0XR-GxbjS3BwRhXP9tt8B0xj7gRCLbM0SxOERARFMhzfHyMWzd6jmeq8EJVbqRF43hVD_f0ptOmv-CL4Loyrk5mR28LfMIVvq76j6yuHeSSZsaoTsl3Oie0bEUds-RwnLjHQ8Yf5osaYkJhpzz3x8qG91gQmiOtCFgaEtpsB-8QkIfcHqXU8MgD5E1Ngw13xSO5eV-kd_DOw4AP4TXlFVdaBufKSPFCyh-ppSkulrFw8pxhLPvqjdxxjMiDPkRaksmQcCiVRVdmEQf8eJboyi2rggmE-B3N7gw6IzK0He71eG5TmfHU9WE41NQ/p.jpeg?fv_content=true&size_mode=5",
  },
  {
    topic: "Cables",
    image: "https://uc56d19823335625f08133507732.previews.dropboxusercontent.com/p/thumb/AA-PTiLuM4kO7FLP4lgJ30F1dIWtT12-3TC675rDU18WaUvVWR3mVyL-7fdSJn1lt48DZNBWS3gxGIji3HRhnkAQG1UjfUuac93cjY1m-Zo7h61e3KmaN_QpugaxcJZGlZuQSoS9MHQ_4Ooa4qHesNV91IXfF5ABItGFw7wbPGPhDmRq1gPIMa2N98feeMrOCAofHuilHhx0COE3-uUGnyAanKoeJ1vJpM34ElfBr0tP4ZSKJSXxrIPmCOpRVs-uabMUOyq3xUz6IEdXFjBKYJe03l4r_BjPulAgkMB75fncM1eoFXcTUsnofzH-iK_cZt6CxqS_pVhmh1AZZ33TqLYKtPagQuKnRYg-Dzf65S1cXjLUPL2RHGSZt9nv17skjKhpj_zVG1r90tJQTjAiP-yYC_ycihIpi9ZIzcLdDRB2Iw/p.png?size=2048x1536&size_mode=3",
  },
  {
    topic: "LCD Screen",
    image: "https://ucc00a4beaad5046acb1d603392c.previews.dropboxusercontent.com/p/thumb/AA-tUd20zeTL3VIzUfQxVv_oWXxRg3BtdrDP7C1q1b1qTGS1SlI06uu5qBWXcQ6dLZHg4eL3HxjBYFLw1IIjkOdy49LxIRyHFiZR6_hGjEYxyLLetHk43V6B0gVbArloM6SRKHYBqdQ2b06snuapJwUCnX98sxDxGZdxy6exUax2fPhX1ReddE8YLp20CiY0n90ZMON0i0oZzxR4aizhXHuu22jEsoR_3OayDyprqSNVIsoi3ZdKpn5MfhQiOnUuVUOsP4aWkhNTiHkZYBoXTOxtkNZuyJTU_qEsX-fibvi0wumNpkSNyOAuMzSc2MiI1hkWb-AYR6eNVi49-z5AsDPxHse2l_Wmr2hFLxoodNH9HzYm08SlsHoCJFHzWmVF6F2M_W8pXnbANpBfijO8xg0tqYqabP_2jUd2-9eRx6OLfOupUGPvxc8OCYq99dYtElJIA4L_3XLGJtKWZwfjKmX26lakaehq3lmXCnN0ny75kw/p.jpeg?fv_content=true&size_mode=5",
  },
  {
    topic: "Main Battery",
    image: "https://uce96c9d553a442f3c49e8c5eb8f.previews.dropboxusercontent.com/p/thumb/AA_OLClaaDap64NbFB89KC_bzifAFVWNRIaa9nsVzxbnFz_JelYHu7jjMkMRfnKpC_TaL123uYo85Dq94QZPkEx1GGAjXJQjx42Dtyd-NJoy9K8FVklr3xlv7Ws4HBe4-YOp_SWl5cIiDyOolFesh3LjNZr8lIdv_lZYZOz7RynuDB2VuH4hqwBjc0DySeTVwty_aT2mFxc_zfAuup42odahpeAC_HiZfEJHwAx0MRK5YhEwYN-EVpCgoE7sEkO6EFNrB9N6sRmnxaKSTim3fd-DJkXlaZ6WRGjZsucr-dOOWUsIl9ePEp7Kpqq_3Jf2htUSj1IA_lFw1oK5TQmByM-8TmO6MCSbLbAL1ROvrTuyhA/p.jpeg?size=2048x1536&size_mode=3",
  },
  {
    topic: "Side Panel",
    image: "https://ucb34ea3fc69c92dd36f12c94a22.previews.dropboxusercontent.com/p/thumb/AA8zpHC5Nu9beSU6qKFb2AcxLx5zj7NS3cRrJkaYX-YOH8nvTu2Bh89zrVt2H-Z8awIbP263sA3YBe59u6aUsSZrYkyMCU3ENg283aLvDqkVqnXzoBmKfBmrR0IHeVp86MFTxZm8b1fjWqZeRAxrrp74pnSJfOc1dng0Xo4rw5f8Mah9dUk698DeXcwBnJ47YcjZxiVyHTH7OTolJWBKGFKOkA4DnNM7ETjkiGM55KHOc9jkEAYBRsjKhg6PC0wXGLtssJWyDzBaebeYjh_Uz1s2kN9DQgftCY_U6fJ5l2BEPC5T9E0Xtloz2hMrWp81madYEKAr-pI701dMRwRRXcSudtHn4dBatmGoYq1XxPLgCnlXZrb5--PrKixdDgHZnY1RqdYv6yCmV_BrcSeUudBjRbywJaFUrN0hAvFn4J4NPg/p.jpeg?fv_content=true&size_mode=5",
  },
  {
    topic: "Solar Panel",
    image: "https://uc244066d453b6fe94ba4a0dfba2.previews.dropboxusercontent.com/p/thumb/AA-y8DUZ8WWf3WW9FkEJEefx271bps2QwYfOUdVJ52xu6vBCPjdyrVJbRftj0pdLf6zh5Al2oqSjLO6xPCMRCoQqZigQqfUOJCTKFquZq0a8CygVRbQh9EJO0GmwcyHSvGl01aORUS-pQ-PTnf4YZgkPgNmE-fFLEBFa-WyRL2iCo2FAt1I4_9t4DVsLtH_Z5T5wJEnstehqzrrkgwWGTWuVtwxpOga9kAmg2V3bof8wxcf62jzeL2ciFzNwTlorcRTXq-m_H_eN5Ow5BlBYMaMwIbASaAvFG7SvWpOsemD53fmqlU-vXcaFsNQBJyf6M-bq-QMNFE8djaDbG6vhVvNm0CIZdhQAYhSts0gHfS8fbw/p.jpeg?fv_content=true&size_mode=5",
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
