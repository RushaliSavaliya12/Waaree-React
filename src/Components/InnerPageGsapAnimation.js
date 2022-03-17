import React from 'react';
import {gsap,TweenMax, TimelineMax} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const InnerPageGsapAnimation = () =>{
    gsap.registerPlugin(ScrollTrigger);

    let Section = document.getElementsByClassName('section');
    

        setTimeout(function() {
        var noFullpagePage = document.getElementsByClassName('no-fullpage');
        if (noFullpagePage.length) {

            const timelineSettings = {
                staggerValue: 0.2,
            };

            [].forEach.call(Section, function(item) {

                const timeline = gsap.timeline({ paused: true });

                var title = item.querySelectorAll('.inner-banner-content h1, .year-content, .section-title, .help-sec-row.row > div.help-col-single h3');
                var paragraph = item.querySelectorAll('.team-member-title > span ,.company-logo-section .title-small, .contact-footer-row h4, .banner-text, .content-text, .subtitle-wrap, .team-content-text, .case-study-text');
                var readMoreLink =  item.querySelectorAll('.read-more-link');
                var img = item.querySelectorAll('.reveal-fade.content-bg, .map-col, .apply-now-banner, section.case-study-section .section-inner, .video-section .video-player,.video-grid-right,.case-study-single .featured-image, .case-study-image,.suitanable-image-column .image-wrap');
                var staggerElement = item.querySelectorAll('.radial-chart-wrapper>div, .team-thought-slider .slick-slide,.video-gallary-slider .slick-slide, .stagger-animation, .slick-arrow, .slick-dots, .csr-award-row > div, .team-slider-main .row > div, .news-single, .blog-right-col, .blog-wrap > div,.blog-row .reveal-fade, .video-gallary-row .reveal-fade, .custom-dropdown-wrapper, .location-info-wrapper, .service-list-row > div, .service-col-single, .green-box-row .service-green-col, .award-grid-single, .accordion > .accordion-item, .image-gallary-row .reveal-fade, .two-col-section .reveal-fade, .form-inner-row > div, .textarea-col .form-col, .form-inner .recaptcha-col, .location-sec-row .location-col-single ,.case-study-single,.core-value-row .core-value-single, .value-boxes-row .boxes-single, .board-director-slider .slide-single, .image-column-wrap .image-wrap, .company-logo-slider .slick-slide');
                var buttonLink = item.querySelectorAll('.view-all-btn, .btn-wrap');
                var greenRound = item.querySelectorAll('.big-round-shape, .big-round-shape .inner-round-shape');

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
                        .staggerTo(greenRound, 1, { scale: 1 }, 0.2, "-=1")
                        .staggerTo(img, 1, { opacity: 1 }, 0.3, "-=0.5")
                        .staggerTo(paragraph, 1, { opacity: 1 }, 0.2, "-=0.5")
                        .staggerTo(staggerElement, 0.5, { opacity: 1 }, 0.3, "-=1.5")
                        .staggerTo(readMoreLink, 1, { opacity: 1 }, 0.2, "-=0.5")
                        .staggerTo(buttonLink, 1, { opacity: 1 }, 0.2, "-=1")

                ScrollTrigger.create({
                    trigger: item,
                    onEnter: function() {
                        timeline.play();
                    }, 
                });

            });


            // footer Animation
            let durationTime = 2.5;
            var footerAnimation = gsap.timeline();
            footerAnimation.to(".newsletter-section .form-wrap",{ durationTime, scale: 1,opacity: 1,});
            footerAnimation.to(".footer-top .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.1");
            footerAnimation.to(".footer-bottom .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.1");
            footerAnimation.to(".footer-note .row",{ durationTime, scale: 1,opacity: 1,});
            footerAnimation.pause();


            ScrollTrigger.create({
                trigger: '.site-footer',
                start: () => "top 50%",
                onEnter: function() {
                    footerAnimation.play();
                },
            });


            // footer Animation

            var roundAnimation = gsap.timeline();
            roundAnimation.to('.green-round, .yellow-round, .section-inner-round', 1, { autoAlpha: 1,scale:1 }, 0.5).pause();


            ScrollTrigger.create({
                trigger: '.core-value-boxes',
                start: () => "top 50%",
                onEnter: function() {
                    roundAnimation.play();
                }, 
            });
        }

    }, 100);
        
}


export default InnerPageGsapAnimation;