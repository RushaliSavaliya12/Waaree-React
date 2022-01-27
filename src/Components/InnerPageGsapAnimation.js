import React from 'react';
import {gsap,TweenMax, TimelineMax} from 'gsap';
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

const InnerPageGsapAnimation = () =>{
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    // gsap.registerPlugin(ScrollTrigger);

    setTimeout(function() {

    var noFullpagePage = document.getElementsByClassName('no-fullpage');
    if (noFullpagePage.length) {
        const timelineSettings = {
            staggerValue: 0.2,
    }
        var controller = new ScrollMagic.Controller();
        let Section = document.getElementsByClassName('section');
        
        [].forEach.call(Section, function(item) {


            const timeline = gsap.timeline({ paused: true });

            var title = item.querySelectorAll('.inner-banner-content h1, .year-content, .section-title, .help-sec-row.row > div.help-col-single h3');
            var paragraph = item.querySelectorAll('.contact-footer-row h4, .banner-text, .content-text, .subtitle-wrap, .team-content-text, .case-study-text');
            var readMoreLink =  item.querySelectorAll('.read-more-link');
            var img = item.querySelectorAll('.video-grid-right,.case-study-single .featured-image, .case-study-image,.suitanable-image-column .image-wrap');
            var staggerElement = item.querySelectorAll('.form-inner-row > div, .textarea-col .form-col, .form-inner .recaptcha-col, .location-sec-row .location-col-single ,.case-study-single,.core-value-row .core-value-single, .value-boxes-row .boxes-single, .board-director-slider .slide-single, .image-column-wrap .image-wrap, .company-logo-slider .slick-slide');
            var buttonLink = item.querySelectorAll('.btn-wrap');

            timeline

                    .set(title, {
                        y: '40px',
                        opacity: 0,
                    })
                    
                    // Stagger the animation of the  section title
                    .staggerTo(title, 1, {
                        // ease: 'Power3.easeOut',
                        y: '0',
                        opacity: 1
                    }, timelineSettings.staggerValue, "+=0.1")
                    .staggerTo(img, 1, { opacity: 1 }, 0.3, "-=0.5")
                    .staggerTo(paragraph, 1, { opacity: 1 }, 0.2, "-=0.5")
                    .staggerTo(staggerElement, 0.5, { opacity: 1 }, 0.3, "-=1.5")
                    .staggerTo(readMoreLink, 1, { opacity: 1 }, 0.2, "-=0.5")
                    .staggerTo(buttonLink, 1, { opacity: 1 }, 0.2, "-=1")
                    var windowHeight = window.innerHeight;
                    var scene = new ScrollMagic.Scene({
                        triggerElement: item,
                        reverse: false,
                        offset:  -windowHeight*0.65,
                        triggerHook: 0,
                    })
                    .setTween(timeline.play())
                    // .addIndicators({
                    // 	colorTrigger: "red",
                    // 	colorStart: "blue",
                    // 	colorEnd: "green",
                    // 	indent: 40
                    // 	})
                    .addTo(controller);

        });
        
        // footer Animation
        let durationTime = 1.5;
        var footerAnimation = gsap.timeline();
        footerAnimation.to(".newsletter-section .form-wrap",{ durationTime, scale: 1,opacity: 1,});
        footerAnimation.to(".footer-top .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
        footerAnimation.to(".footer-bottom .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
        footerAnimation.to(".footer-note .row",{ durationTime, scale: 1,opacity: 1,});
        footerAnimation.pause();

        var fixedSocialBtn = document.getElementById('FixedSocialIcon');

        var ctrlFooter = new ScrollMagic.Controller();
        var windowHeight = window.innerHeight;
        var sceneFooter = new ScrollMagic.Scene({

            triggerElement: ".site-footer",
            reverse: true,
            offset:  -windowHeight*0.5,
        })
            .setTween(footerAnimation.play())
            .addTo(ctrlFooter);
            sceneFooter.on("start", function (event) {
                console.log(fixedSocialBtn);
                fixedSocialBtn.classList.toggle("remove");
            });
        // footer Animation End


        // CoreValue Round Animation
        var roundAnimation = gsap.timeline();
                roundAnimation.to('.green-round, .yellow-round', 1, { autoAlpha: 1,scale:1 }, 0.5).pause();
                var ctrlRound = new ScrollMagic.Controller();
                var sceneRound = new ScrollMagic.Scene({
        
                    triggerElement: ".core-value-boxes",
                })
                    .setTween(roundAnimation.play())
                    // .addIndicators()
                    .addTo(ctrlRound);

        // CoreValue Round Animation End

    }   
    }, 100);
}


export default InnerPageGsapAnimation;