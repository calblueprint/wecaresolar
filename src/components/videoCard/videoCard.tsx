import * as React from "react";
import "./videoStyle.scss";

const videos = ["https://uc6d51392a907535bc8af5b9eb36.previews.dropboxusercontent.com/p/thumb/AA83_qB7RCmNRmvPNaLFQXpsIfMHUEFKmwRRzx4fRSdF2hN4cJ4Ij08Wh4iULLCITdRQ7P0-9xcIbW24Rx0m3FEJGAO5s444xSAkY556KAyYeJIAL0oIQgZqwk3Md7NQNqxPUzbevHU-UzoZnRKVYKjACwxbOWWIhKncvhIymnGeYjQ0vpvQSDrM0OftXOFWOEPjnzG5fBRra9pJ2tCGPfPIYPYpkeofdJ7ruyhclHjaBhxhe7mu8flIiMH0zvbZXmc4lL8k5OYnoz9BDdKrO88p2t93vG9Fh5iYKOzHJfolqVNDAgEgjEfN_qgvaGWQVeKATiKxxjR_KoOEVgltnNde3V3l6uEwW3r54f6ios-MOQ/p.jpeg?fv_content=true&size_mode=5",
                "https://uceded637b4720272cab1141a6f2.previews.dropboxusercontent.com/p/thumb/AA_AhCMO_uQm9nMfRcvEcyCvopuxG2X3KIpj70hbJAIZMs8ieMkXRDZsRbmWYL3JclSOcdYHPGDgWR7VLao26_nkV0VkY8gMBHqbSwhDxw89fyyJj2KKf8PzeR0qDsPIz58XNord_srmSeCSG8vWrEY8_ICS1_2sdW-KxCVOr6c-zlK8aqpOy0bla8fVOT9UqUNYCNxrrWcSiWSDvsJPJ4sL4Db-gk_cc5cQQun6916U8f8g0ICPUmzjPAnHCYW966DJ_mJPMbYNRZVGo9Azn6Mv7iBZoNXqdLYKdoiu79lA5C3qIas0a9ZGMv8gkH-4RIcA0EgorIhTYa-8DNNw1_PmRKUPXg3r03sfPxt0JPX4iA/p.jpeg?fv_content=true&size_mode=5",
                "https://uca3ebab79aad91ab29db10d23df.previews.dropboxusercontent.com/p/thumb/AA8CGJrl8qIevIxAxgXvwPwJZoWNCHUdjftyo5N6wGxaxwO99ryfO5maT43xNWutyoTqxBTI0NXdybLCQ4jwkpweTxHnbSOqthf4pgCQmDSiiS1RKO6Zm8cZ2mpdVoXaf-1jutkRlF6OJHEFv0Q41GeTkX-R-au41dAw91-BjTwVcHrcdVTHhz_F3kRmx4GRNQR5L407diQyXLgBj-gjPzpjp5-Z3waEK0p3-sQloZFjctgjDWisZKQHwR0AXEHr5YsXHA6ScSJjz4UGPqW4kCw-fq-ksuvxH1IbGluMSVbeMPj8o5O0Q7Ia_f97uEXUFw5iriuW-wAr0Dl24wc2qAJ9WH12SxWBLRF8nHkYBjzNGA/p.jpeg?fv_content=true&size_mode=5",
               ];

const VideoCard = () => {
  return (
    <>
      <div className="video-container">
        {videos.map((src) => (
          <div
            key={src}
            className="video-card"
            style={{
              backgroundImage: `url(${src})`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default VideoCard;
