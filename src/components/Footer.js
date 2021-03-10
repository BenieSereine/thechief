import React from 'react';

import '../components/Footer.css';

const Footer = () =>{
    return(
        <div>
            <footer>
                <div class="container">
                    
                    <h1>Subscribe</h1>
                    <p>Keep up with the most delicious and exotic recipes.</p>
                    <form>
                        <div class="row">
                            <div class="col-md-4 ">
                                
                                <div class="form-group">
                                    <input type="text" name="name" placeholder="Email" class="form-control" value="" required></input>
                                </div>  
                                
                            </div>
                            <div class="col-md-3 ">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary send" > Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            
                <div class="container">
                    <hr></hr>
                    <div class="row">
                        <div class="col-md-3 explore col1">
                            <h5 class="title">Explore</h5>
                            <li><a href="/#"> Recipe</a></li>
                            <li><a href="/#"> Services</a></li>


                        </div>
                        <div class="col-md-3 explore col2">
                            <h5 class="title">Explore</h5>
                            <li><a href="/#"> About Us</a></li>
                            <li><a href="/#"> Contact Us</a></li>
                        </div>
                        <div class="col-md-3 contact col3" >
                            <h5 class="title">Follow Us</h5>
                            <hr ></hr>
                            <li><a href="/#"><i class="fa fa-facebook" > </i></a></li>
                            <li><a href="/#"><i class="fa fa-twitter"> </i></a></li>
                            <li><a href="/#"><i class="fa fa-instagram"> </i></a></li>
                            <h4 class="title">Contacts</h4>
                            <hr ></hr>
                            <p><i class="fa fa-phone-square"> </i><a href="tel:123-456-7890">123-456-7890</a> </p>
                            <p><i class="fa fa-envelope" > </i><a href="mailto: TheChief@gmail.com">quichTechTeam@gmail.com</a> </p>
                        </div>

                        <div class="col-md-3 business col4">
                            <h4 class="title">Business</h4>
                            <li><a href="/#">Order Your Favorite Recipe</a></li>
                            <li><a href="/#">Visit your favarite Restaurants </a></li>
                        </div>
                    </div>
                    <hr></hr>
                    <div class="row ">
                        <div class="col-md-2 explore">
                            <li><a href="/#"> Pivacy Policy </a></li>
                        </div>
                        <div class="col-md-2 explore">
                            <li><a href="/#">Terms of Use </a></li>
                        </div>
                        <div class="col-md-2 explore">
                            <li><a href="/#">Cookie Settings </a></li>
                        </div>
                    </div>
                    <div class="row">
                    <li> Copyright © 2021 TheChief, Kigali, Rwanda - All rights reserved.</li>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer