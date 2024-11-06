import React, { useEffect } from "react";
import $ from "jquery";
import "sticky-js";
import "bootstrap";

const CustomScripts = () => {
  useEffect(() => {
    // Your jQuery code here
    $(".navbar-collapse a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    $(".hero-slides").vegas({
      slides: [
        {
          src: "images/slides/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg",
        },
        {
          src: "images/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg",
        },
        {
          src: "images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg",
        },
      ],
      timer: false,
      animation: "kenburns",
    });

    $(".smoothscroll").click(function () {
      var el = $(this).attr("href");
      var elWrapped = $(el);
      var header_height = $(".navbar").height() + 60;

      scrollToDiv(elWrapped, header_height);
      return false;

      function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;

        $("body,html").animate(
          {
            scrollTop: totalScroll,
          },
          300
        );
      }
    });
  }, []);

  return null; // This component doesn't need to render anything
};

export default CustomScripts;
