import React from 'react';
import Slider from 'react-slick';

const TeamThoughtSlider = () => {

    const TeamThoughtColSingle = [
        {
            id: 1,
            peopleImageSrc: "assets/images/adrien-feeney.jpg",
            teamQuotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            teamMemberName: "Adrien Feeney",
            teamPosition: "Waaree Prime",
        },
        {
            id: 1,
            peopleImageSrc: "assets/images/Marcelle-Zboncak.jpg",
            teamQuotes: "Nam sollicitudin efficitur massa id ornare. Duis ultrices quam non risus gravida blandit. ",
            teamMemberName: "Marcelle Zboncak",
            teamPosition: "Waaree Expert",
        },
        {
            id: 1,
            peopleImageSrc: "assets/images/Theodore-Renner.jpg",
            teamQuotes: "Donec congue, dolor non sagittis suscipit, risus massa lacinia justo, elit velit id leo.",
            teamMemberName: "Theodore Renner",
            teamPosition: "Waaree Sales",
        }
    ]

    var settingsTeamThought = {
        speed: 1000,
        arrows: true,
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
          ]
    };

    return (
        <>
            <Slider className="team-thought-slider" {...settingsTeamThought}>

                {TeamThoughtColSingle.map((val) =>

                    <div className="slide-inner">
                        <div className="people-image">
                            <img src={val.peopleImageSrc} alt="" />
                        </div>
                        <div class="team-quotes"><blockquote>{val.teamQuotes}</blockquote></div>
                        <div className="team-people-name">
                            <h5>
                                <a href={val.teamLink}>{val.teamMemberName}</a>
                            </h5>
                            <span className="team-position">{val.teamPosition}</span>
                        </div>
                    </div>
                )}
            </Slider>
        </>
    )
}

export default TeamThoughtSlider;