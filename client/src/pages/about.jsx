import React from 'react';
import Layout from '../Components/layout';
const About = () => {

    const imgF = "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png";
    const imgM = "https://cdn0.iconfinder.com/data/icons/standard-characters/101/mature_male_slicked3-1024.png";

    return (
        <Layout>
            <div className="about">
                <div className="about-header">
                    <div className="about-image-container_1">
                        <img className="about-image_1" src="https://images.pexels.com/photos/4252133/pexels-photo-4252133.jpeg" />
                        <div className="about-us">
                            <h1 className="about_h1">About Us</h1>
                            <p id="about_p">Welcome to <i><strong>yummyYard</strong></i>, your go-to source for delicious and easy-to-follow recipes. We're dedicated to giving you the very best of culinary inspiration, with a focus on simplicity, flavor, and fun in the kitchen</p>
                            <p>We hope you enjoy our recipes as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                        </div>
                    </div>
                    <div className="about-image-container_2">
                        <img className="about-image_2" src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <div className="our-story">
                            <h2 className="about_h2">Our Story</h2>
                            <p id = "about_p_1"> We are a group of food enthusiasts who love to share delicious and easy-to-make recipes. Our mission is to help you create wonderful meals and enjoy the process of cooking. As our community grew, so did our commitment to quality and authenticity. We test every recipe in our kitchen, ensuring that each one meets our high standards.</p>
                            <p>We also love exploring new flavors and techniques, and we’re always excited to share our discoveries with you.
                                Happy cooking! </p>
                        </div>
                    </div>
                </div>

                <div className="about-content">

                    <h2 className="about_h2">Meet the Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img className="team-member-image" src={imgF} name="team-member" alt="team-member" />
                            <div className="member-info">
                                <h3>SAHELI</h3>
                            </div>
                        </div>
                        <div className="team-member">
                            <img className="team-member-image" src={imgF} name="team-member" alt="team-member" />
                            <div className="member-info">
                                <h3>SRISHA</h3>
                            </div>
                        </div >
                        <div className="team-member">
                            <img className="team-member-image" src={imgM} name="team-member" alt="team-member" />
                            <div className="member-info">
                                <h3>VEDANT</h3>
                            </div>
                        </div>
                        <div className="team-member">
                            <img className="team-member-image" src={imgM} name="team-member" alt="team-member" />
                            <div className="member-info">
                                <h3>  OM</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </Layout >
    );

}

export default About;