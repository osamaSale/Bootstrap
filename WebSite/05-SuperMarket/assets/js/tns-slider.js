var slider;
 $(".productModal").length && (slider = tns({
    container: "#productModal",
    items: 1,
    startIndex: 0,
    navContainer: "#productModalThumbnails",
    navAsThumbnails: !0,
    autoplay: !1,
    autoplayTimeout: 1500,
    swipeAngle: !1,
    speed: 1500,
    controls: !1,
    autoplayButtonOutput: !1,
    loop: !1
})),
 $(".product").length && (slider = tns({
    container: "#product",
    items: 1,
    startIndex: 0,
    navContainer: "#productThumbnails",
    navAsThumbnails: !0,
    autoplay: !1,
    autoplayTimeout: 1500,
    swipeAngle: !1,
    speed: 1500,
    controls: !1,
    autoplayButtonOutput: !1
}));
