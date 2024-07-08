import React, { useRef } from 'react';
import Layout from '../Components/layout';
const About = () => {

    const imgF = "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png";
    const imgM = "https://cdn0.iconfinder.com/data/icons/standard-characters/101/mature_male_slicked3-1024.png";

    const aboutUsRef = useRef(null);
    const ourStoryRef = useRef(null);
    const ourTeamRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }



    return (
        <Layout>

            <div className="about">
                <div className="about-header-container">
                    <div className="about-header">
                        <section ref={aboutUsRef} className="aboutUs-section">
                            <div className="buttons-container">
                            <nav className="buttons">
                                <button className="button-style" onClick={() => { scrollToSection(aboutUsRef) }}>About Us</button>
                                <button className="button-style" onClick={() => { scrollToSection(ourStoryRef) }}>Our Story</button>
                                <button className="button-style" onClick={() => { scrollToSection(ourTeamRef) }}>Our Team</button>
                            </nav>
                            </div>

                            <div className="about-image-container_1">
                                <img className="about-image_1" src="https://images.pexels.com/photos/4252133/pexels-photo-4252133.jpeg" />
                                <div className="about-us-info">
                                    <h1 className="about_h1">About Us</h1>
                                    <p id="about_p">Welcome to <i><strong>yummyYard</strong></i>, your go-to source for delicious and easy-to-follow recipes. We're dedicated to giving you the very best of culinary inspiration, with a focus on simplicity, flavor, and fun in the kitchen.</p>
                                    <p>At yummyYard, we believe that cooking should be an enjoyable experience, whether you're a seasoned chef or just starting out. Our team of passionate food enthusiasts is here to guide you every step of the way, providing you with a diverse array of recipes that cater to all tastes and skill levels.</p>
                                    <p>We hope you enjoy our recipes as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                                </div>
                            </div>
                        </section>
                        <section ref={ourStoryRef} className="ourStory-section">
                            <div className="about-image-container_2">
                                <div className="our-story-info">
                                    <h2 className="about_h2">Our Story</h2>
                                    <p id="about_p_1"> We are a group of food enthusiasts who love to share delicious and easy-to-make recipes. Our mission is to help you create wonderful meals and enjoy the process of cooking. As our community grew, so did our commitment to quality and authenticity. We test every recipe in our kitchen, ensuring that each one meets our high standards.</p>
                                    <p>We also love exploring new flavors and techniques, and we’re always excited to share our discoveries with you.
                                        Happy cooking! </p>
                                </div>
                                <img className="about-image_2" src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                        </section>
                    </div>
                </div>
                <section ref={ourTeamRef} className="ourTeam-section">
                    <div className="about-content-container">
                        <div className="about-content">
                            <div>
                                <h2 className="about_h2">Meet the Team</h2>
                            </div>
                            <div className="team-members">
                                <div className="team-member">
                                    <img className="team-member-imageF" src={imgF} name="team-member" alt="team-member" />
                                    <div className="member-info">
                                        <h3>SAHELI</h3>
                                    </div>
                                </div>
                                <div className="team-member">
                                    <img className="team-member-imageF" src={imgF} name="team-member" alt="team-member" />
                                    <div className="member-info">
                                        <h3>SRISHA</h3>
                                    </div>
                                </div >
                                <div className="team-member">
                                    <img className="team-member-imageM" src={imgM} name="team-member" alt="team-member" />
                                    <div className="member-info">
                                        <h3>VEDANT</h3>
                                    </div>
                                </div>
                                <div className="team-member">
                                    <img className="team-member-imageM" src={imgM} name="team-member" alt="team-member" />
                                    <div className="member-info">
                                        <h3>  OM</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout >
    );
}

export default About;