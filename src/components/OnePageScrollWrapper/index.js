import React, { useEffect } from "react";
import { debounce } from "lodash";
import smoothscroll from "smoothscroll-polyfill";

function OnePageScrollWrapper({ children, pageLim }) {
    let pageNum = 0;
    useEffect(() => {
        smoothscroll.polyfill();
        var supportsPassive = false;
        try {
            window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", {
                    get: function () {
                        supportsPassive = true;
                    },
                }),
            );
        } catch (e) {}
        var wheelOpt = supportsPassive ? { passive: false } : false;
        var wheelEvent =
            "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener(wheelEvent, handleWheel, wheelOpt); // modern desktop
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener("DOMMouseScroll", preventDefault, false);

        // window.addEventListener("touchmove", handleTouchMove, false);
        // window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
        // window.addEventListener("touchmove", handleTouchMove, wheelOpt); // mobile
        // window.addEventListener("touchstart", handleTouchStart, wheelOpt);

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener(wheelEvent, handleWheel, wheelOpt); // modern desktop
            window.removeEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
            window.removeEventListener("DOMMouseScroll", preventDefault, false);
            // window.removeEventListener("touchmove", preventDefault, wheelOpt); // mobile
            // window.removeEventListener("touchmove", handleTouchMove, wheelOpt); //
            // window.removeEventListener(
            //     "touchstart",
            //     handleTouchStart,
            //     wheelOpt,
            // );
        };
    }, []);

    const scrollUp = () => {
        if (pageNum > 0) pageNum--;
        window.scroll({
            top: window.innerHeight * pageNum,
            behavior: "smooth",
        });
    };

    const scrollDown = () => {
        if (pageNum < pageLim - 1) pageNum++;
        window.scroll({
            top: window.innerHeight * pageNum,
            behavior: "smooth",
        });
    };

    const preventDefault = (event) => {
        event.preventDefault();
    };

    const handleWheel = debounce(
        (event) => {
            // handleWheel(event);
            if (checkScrollDirectionIsUp(event)) {
                scrollUp();
            } else {
                scrollDown();
            }
        },
        400,
        { leading: true, trailing: false, maxWait: 400 },
    );

    //handlers
    const handleKeyUp = (event) => {
        console.log("A key was pressed", event.keyCode);
        if (event.keyCode === 38) scrollUp();
        if (event.keyCode === 40) scrollDown();
        console.log(pageNum);
    };

    const handleKeyDown = (event) => {
        if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
            event.preventDefault();
        }
    };

    const checkScrollDirectionIsUp = (event) => {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    };

    var xDown = null;
    var yDown = null;

    const handleTouchMove = debounce(
        (event) => {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = event.touches[0].clientX;
            var yUp = event.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    /* left swipe */
                } else {
                    /* right swipe */
                }
            } else {
                if (yDiff > 0) {
                    scrollDown();
                } else {
                    scrollUp();
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        },
        400,
        { leading: true, trailing: false, maxWait: 400 },
    );

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const getTouches = (evt) => {
        return evt.touches; // jQuery
    };

    return <div>{children}</div>;
}

export default OnePageScrollWrapper;
