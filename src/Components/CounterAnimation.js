import React from 'react';
import {gsap,TweenMax, TimelineMax} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CounterAnimation = () =>{

    gsap.registerPlugin(ScrollTrigger);

    let Section = document.getElementsByClassName('section');


            [].forEach.call(Section, function(item) {

                const timeline = gsap.timeline({ paused: true });

                var counterClass = item.querySelectorAll('.coun-anim');

                console.log(counterClass);
                

                timeline.from(counterClass, {
                    textContent: 0,
                    duration: 4,
                    ease: "power1.in",
                    snap: { textContent: 1 },
                    stagger: {
                      each: 1.0,
                      onUpdate: function() {
                        this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
                      },
                    }
                });
                  
                  
                  function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }
                        

                ScrollTrigger.create({
                    trigger: item,
                    onEnter: function() {
                        timeline.play();
                    }, 
                });

            });


        }

export default CounterAnimation;