---
---
(function($) {
    var pagelang = _pagelang;
    var $progress = $('#progress');
    var slots = document.getElementsByClassName("slot");
    var progressScaleMax = 1000;
    
    var useCarousel = {{ site.data.carousel.useCarousel }};
    var slotTime = {{ site.data.carousel.slotTime }};
    var rootPicturePath = "{{ site.data.carousel.picturePath }}";
    var defaultPicture = "{{ site.data.carousel.defaultPicture }}";
    var slotList = {{ site.data.carousel.slots | jsonify }};

    var car = {
        curProgress: 0,
        slotCount: slots.length,
        curSlot: 0,
        curSlotTime: slotTime / progressScaleMax,
        abortAnimation: false,
        writingFinished: false
    };
    if(slotList[car.curSlot].slotTime != "default")
        car.curSlotTime = parseInt(slotList[car.curSlot].slotTime) / progressScaleMax;

    //console.log("--> " + car.curSlotTime);
    function init() {
        if(!useCarousel) {
            $("#prev").hide();
            $("#next").hide();
            return;
        }

        $("#prev").on("click", function() {
            plusSlides(-1);
        });
        $("#next").on("click", function() {
            plusSlides(1);
        });

        writeHeaderContent();
        progressLoop();
    }

    function progressLoop() {
        if(car.curProgress < progressScaleMax && !car.abortAnimation) {
            car.curProgress++;
            $progress.css('width', car.curProgress/10+'%');
            setTimeout(progressLoop, car.curSlotTime);
        } else if(!car.abortAnimation){
            car.abortAnimation = true;
            slide1(1);
        }
    }

    function slide1(n) {
        car.curProgress = 0;
        $progress.css('width', car.curProgress/10+'%');

        var interval = (car.abortAnimation) ? 0 : 250;
        clearHeaderContent(interval, slide2, n);
    }

    function slide2(n) {

        var nextSlot = car.curSlot + n;
        var endSlot = slots.length-1;
        if (nextSlot > endSlot) {nextSlot = 0} 
        if (nextSlot < 0) {nextSlot = endSlot}
        var $curSlot = $("#slot-"+car.curSlot);
        var $nextSlot = $("#slot-"+nextSlot);

        $curSlot.toggleClass("visible");
        $nextSlot.toggleClass("visible");

        car.curSlot = nextSlot;
        if(slotList[car.curSlot].slotTime != "default") {
            car.curSlotTime = parseInt(slotList[car.curSlot].slotTime)/progressScaleMax;
        } else {
            car.curSlotTime = slotTime/progressScaleMax;
        }

        var timeout = (car.abortAnimation) ? 500 : 2000;
        setTimeout(function() {
            car.abortAnimation = false;
            writeHeaderContent();
            progressLoop();
        }, timeout);
    }

    function plusSlides(n) {
        if(car.curProgress < 1000 && !car.abortAnimation) {
            car.abortAnimation = true;
            slide1(n);
        }
    }

    String.prototype.replaceAt=function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }

    function clearHeaderContent(interval, callback, arg1) {
        var $curSlot = $("#slot-"+car.curSlot);
        var $headline = $curSlot.find("span.h1-content");
        var $category = $curSlot.find("span.h2-content");
        var $description = $curSlot.find("span.p-content");
        var $info = $curSlot.find("small.picture-info");
        var headlineStr = slotList[car.curSlot].headline[pagelang];
        var categoryStr = slotList[car.curSlot].category[pagelang];
        var descriptionStr = slotList[car.curSlot].description[pagelang];
        
        $info.text("");

        $description.removeClass("typing-p");
        
        setTimeout(function() {
            $description.text("");
            setTimeout(function() {
                $headline.text("");
                setTimeout(function() {
                    $category.text("");
                    if(typeof callback === "function") {
                        callback(arg1);
                        //callback.apply(car, [arg1]);
                    }
                }, interval);
            }, interval)
        }, interval); 
    }

    function writeHeaderContent() {
        car.writingFinished = false;

        var $curSlot = $("#slot-"+car.curSlot);
        var $headline = $curSlot.find("span.h1-content");
        var $category = $curSlot.find("span.h2-content");
        var $description = $curSlot.find("span.p-content");
        var $info = $curSlot.find("small.picture-info");
        var headlineStr = slotList[car.curSlot].headline[pagelang];
        var categoryStr = slotList[car.curSlot].category[pagelang];
        var descriptionStr = slotList[car.curSlot].description[pagelang];
        var infoStr = (slotList[car.curSlot].info) ? slotList[car.curSlot].info[pagelang] : "";

        $description.text("");
        $headline.text("");
        $category.text("");

        // print picture info
        $info.text(infoStr);
        
        var o = {
            categoryStr: categoryStr,
            category: $category
        }

        animationLoop(0, categoryStr.length, 10,
        function(i) {
            $category.append(categoryStr[i]);
            var ms = 10;
            return ms;
        },
        function() {
            if(car.abortAnimation) {
                $info.text("");
                $category.text("");
                return;
            }
            
            // print headline   
            $headline.addClass("typing-h1");
            animationLoop(0, headlineStr.length, 100,
            function(i) {
                $headline.append(headlineStr[i]);
                var ms = 100 + Math.random() * 50;
                return ms;
            },
            function() {
                $headline.removeClass("typing-h1");
                if(car.abortAnimation) {
                    $info.text("");
                    $headline.text("");
                    $category.text("");
                    return;
                }

                // print description
                $description.addClass("typing-p");
                animationLoop(0, descriptionStr.length, 50,
                function(i) {
                    $description.append(descriptionStr[i]);
                    var ms = 20 + Math.random() * 50;
                    return ms;
                },
                function() {
                    if(car.abortAnimation) {
                        $info.text("");
                        $description.removeClass("typing-p");
                        $description.text("");
                        $headline.text("");
                        $category.text("");
                        return;
                    }
                    car.writingFinished = true;
                });

            });
        });
    }

    function animationLoop(i, count, delay, work, callback) {
        setTimeout(function() {
            delay = work(i);
            i++;
            if(i < count && !car.abortAnimation) {
                //console.log("delay: " + delay + ", i: " + i + " count: " + count);
                animationLoop(i, count, delay, work, callback);
            } else {
                callback();
            }
        }, delay);
    }

    setTimeout(function() {
        init();
    }, 1500);

})(jQuery); // End of use strict

