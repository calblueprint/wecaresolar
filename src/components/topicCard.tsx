import * as React from 'react';
import './topicStyle.scss';

const topics = [
  {
    topic: 'Applicances',
    image:
      'https://uc04385edfd6ebec877a96c18e8e.previews.dropboxusercontent.com/p/thumb/AA8w4cp9zS6iErxEs7Ynse2iiQuMAwRq51QhLRqQLRJj2lKMEeKq5qXLEYw2VRzRr3n7gSZFTSuQw_43RS6XyyTQtbL3L_wyaI9vTcVGTXW6Z2YhQf0o0oTFyEEMcjPMXEj3-eBq99038gzMnCVhyH_zjmQcFrmeV-db5SZ6EOYUNSJGmqfudRQwMUIyK6v4Q5LxRceLfpMA8f0xfScm7hUysuVyV_xyw4S4Ce7LmvHfHcr43BQ47ux6U_opT3rZHnInn3pmdBnEnJa832DmS7I9w9Ew7sEGFv9g3eUbdr_7eMhAJTItfeCfYmL2Y2O5RfzUkH6QiOpl33_a4mJmTVeFZxSQG9xGbq9CLmpfyqUKiWdN-5b_vauwaxacy-LDgO-lVM4u41XQVSmVCuiN1VAO93tkeEcmsw42VEeS_EOnUg/p.jpeg?size=2048x1536&size_mode=3'
  },
  {
    topic: 'Cables',
    image:
      'https://uc4f636e4e164e5a19ed9d0c3f4a.previews.dropboxusercontent.com/p/thumb/AA_WqOqKpm1EUCKFFxR8EAgc4YPeK-y1O5qZ5h1UX9x1_G20d81bCYuzpDCoBRgqIK2-zabqhsHEk3xlJc4dhAbiJtHLX1OM9roc4ggOUtu2-4c3l0Zut7UjV52X5OZKJpHAO2iuv7kiGuMRR5fda280XaLSutHhLK4A4suwoMD5vhD1dK8xcXVWWLJ9m_dxlc4FIl0NE5tIbugQzDRRUVze4GBi6_X6OIC5oMPWYFLcjp0bKps4qr2kQ8uqKzuI6tNimQ0hOLg-LtnZ_a7o9wrux4VHEFwlpyCap9qDS80oqpLXoef0U0dPDEIMZbvLyvwKl2FRkdA_0kcc4GG3houQnoxBOsAcRFcVa86h7ViOCQbNRWndbgDAsHqPuZJHTt56CH-NBJfcAZgaW6r6BGGgTi1r4cJEjNGfjY35etNOEw/p.png?size=2048x1536&size_mode=3'
  },
  {
    topic: 'LCD Screen',
    image:
      'https://uc9392e33c22be6a823389485400.previews.dropboxusercontent.com/p/thumb/AA_75MDsx8ViDVsIJkq_P8SO_v5kKp6gwxtclOPD88U-Ct2VM3icjzAmsmCCxvKpPTePVNObb1lShHs-8MvE-ug462BRuiOMUv1LmEWahottcNzIVATmK73j2iAMt70mGYzgBufaDmtuc573f1xqh1nXd74rx3OjnpQ19tUUYiL4nX5DDdoEiYtineAm1uglQTTm320dZbq0UKax-rKEcd7k9pJDSVXVNbwtZ_yF4Qj1HVnKdzi_JsOoMMy0hP4mqadfe6CRndpL-MN2ZYvdRK59FmmlTPzF_VckQxO2kG88mykfdgmw7pVzSw6Hdhs3JhiGlt-Upk80fWRr2Ib_VzYYJAXVdUM0ydKIrZB0wyM4IWVw3Nn0f53aaZO2grm9d14MNH-yOwdlCbultQe0HCklD9vWL9aqRPYWozCWALaj8lAkYXiXZQ-PvaDzXL9XrXGUX3mX0tkOaDFS8nN84DTrruy-Slq0FfUnwYaEdmyx_g/p.jpeg?size=2048x1536&size_mode=3'
  },
  {
    topic: 'Main Battery',
    image:
      'https://ucba4df7854032ce3c44b14edcd1.previews.dropboxusercontent.com/p/thumb/AA_Nc-9ZSI4ro-hETv-zQOyNCWTH5BLY4TuamJz4_MsegDxZmCly-PVuUm5mhu4XP6OkFegSAxiFOVO_YFb4304Oegngb6IZ7qjMfDJk2Ae2sHIrt-5Gy909A1WdUpHhsL_s6j8ByK_PRwtwufEeqlnDNNDghUbl-eyNfeesa15Qvrrv4vmHN87Km4XLvvLRVc-QWLB46InHHd85tre7Atos0Um7aoBtkZkMdOdjNvKjgdmQK4eR6U3jaViJLaOIXdOmKCma6u-Jv0FyWS_mmPwUA8_pmPcg1NACb45OOb2wN3QooVGLD5suq6mrG3ZmqRNdIfaHHvbfUvR5GuakynBDNcTK0Xyf4YLfSWK2RDst7g/p.jpeg?fv_content=true&size_mode=5'
  },
  {
    topic: 'Side Panel',
    image:
      'https://uc0c740200565870274c27d46209.previews.dropboxusercontent.com/p/thumb/AA_toy33QFKPzXMtbIm7i0Qzz5e2TCYa5li3CgZjPP3axud979VEWbi5a2-x3yl3WkAhjBl2oARIX00E1FtcPdpwaVBkdTJDz1Px7PvnbG7vxWi_KEvuBqy1EqIGl7JJIU3yPJboLXpMQBRBEnJB2ta96qgdXloh1mKAxPwK_RJPQ3FH1iV1DE6VgwfIqjGZcSl5OQmjswp1w9XPr6Qb48E3rBAwhO61jzHp0zjfFYyT7I9G8VDwd53qOoYke7G3BnwQSXfFXq2cQImaWyUgotwZLH6TEMDkdrOgNgbDDTodDPQvJUUilIaszoZwH_y7bd1T0oqq-gzHNZLaUiNyMEUjEU7J3c1eu3nCD8D3R6rfzctZPeWGr66qDpbvTfRv2gmCdgpLLcBvsxnOhOElC7puq-671vSkbA-sEicTPvJOcQ/p.jpeg?fv_content=true&size_mode=5'
  },
  {
    topic: 'Solar Panel',
    image:
      'https://uc244066d453b6fe94ba4a0dfba2.previews.dropboxusercontent.com/p/thumb/AA-y8DUZ8WWf3WW9FkEJEefx271bps2QwYfOUdVJ52xu6vBCPjdyrVJbRftj0pdLf6zh5Al2oqSjLO6xPCMRCoQqZigQqfUOJCTKFquZq0a8CygVRbQh9EJO0GmwcyHSvGl01aORUS-pQ-PTnf4YZgkPgNmE-fFLEBFa-WyRL2iCo2FAt1I4_9t4DVsLtH_Z5T5wJEnstehqzrrkgwWGTWuVtwxpOga9kAmg2V3bof8wxcf62jzeL2ciFzNwTlorcRTXq-m_H_eN5Ow5BlBYMaMwIbASaAvFG7SvWpOsemD53fmqlU-vXcaFsNQBJyf6M-bq-QMNFE8djaDbG6vhVvNm0CIZdhQAYhSts0gHfS8fbw/p.jpeg?fv_content=true&size_mode=5'
  },
  {
    topic: 'Fetal Doppler',
    image:
      'https://uce72b88e033b1894a6bd4a6893b.previews.dropboxusercontent.com/p/thumb/AA-VALtZ50Wlxc8KjAP_HrFUjfRQGn3XDl23bB8fKh0L_vWoVs0of8hzmp_3jpjSnCjBSD6pJvCH2fiDJ1_OjG7nBJ-0so-dUFgm0HlYzF1tyEPftOMkuHfJUiCuVzuth-jWJenQB5TUWTfX1xaG7NXAbuM7aZl48yKSsJC3tssAxPqcN3onDGxwTgCGDCNppvIX5mGaX9A4XhfpIFLpJidwRke8tgW0xEML4Cf2nJjMIezUpOWBIA-PCd96m4v6jtbNHzm-8k5uFr3xw8vIrfvIVpzvSY7STDl17Sks7ZO9778UEp0elfzQUXQnBYRzYiQnHyVfr0FHd32YvomNjvm7D2WjOJwgmcddPpBZoW5sEFqT04mJHHnLG7kg9JbnfAlV3HLQ6Vmru6Je_iMN-VWoEp3xfjfZzyuPJlsJJyunzg/p.png?size=2048x1536&size_mode=3'
  }
];

const TopicCard = () => {
  return (
    <>
      <div className="topic-container">
        {topics.map((src) => (
          <div
            className="topic-card"
            style={{
              backgroundImage: `url(${src.image})`
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
