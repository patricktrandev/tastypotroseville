import React from "react";

export const Promotion = () => {
  return (
    <section className="tasty__promotion section-spacing">
      <div className="container">
        <div className="row tasty__promotion__row justify-content-center">
          <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__item ">
            <h3 className="tasty__promotion__title">
              Tasty Pot, Eat Well, Live Well.
            </h3>
            <p className="tasty__promotion__content mx-3">
              At <span>Tasty Pot</span> , we firmly believe that in order to
              live well, you must eat well. It is our mission to provide healthy
              dining in a comfortable, modern setting with excellent service. We
              want each and every customer to feel as though he or she is the
              most important to our restaurant. We offer boiling hot pot soups,
              along with a variety of authentic Taiwanese appetizers, boba milk
              teas, and desserts.
            </p>
          </div>
          <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__img">
            <img
              src="https://res.cloudinary.com/dctb1eocj/image/upload/v1701248540/tastypot_roseville/tasty_hotpot_menu_2_ihalb1.jpg"
              alt="rewardad"
            />
          </div>
        </div>
        <div className="row tasty__promotion__row justify-content-center">
          <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__img">
            <img
              src="https://res.cloudinary.com/dctb1eocj/image/upload/v1701248542/tastypot_roseville/tasty_hotpot_menu_1_ifke0q.jpg"
              alt="rewardad"
            />
          </div>
          <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__item">
            <h3 className="tasty__promotion__title">
              We just love the Tasty Pot!
            </h3>
            <p className="tasty__promotion__content mx-3">
              We are an authentic Taiwanese individual hotpot chain that seeks
              to provide healthy dining in a comfortable, modern setting. We
              believe that in order to live well, you must eat well, including
              when you eat out. You don't have to sacrifice health vs. taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
