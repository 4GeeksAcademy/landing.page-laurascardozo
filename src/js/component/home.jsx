import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";


//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div style={{ padding: "20px", marginInline: "40px", }}>
				<div className="row">
					<div className="col-xl-3 col-md-4 col-lg-3 mb-2" >
						<Card
							urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcxMoAlkjVvRSW85QjYQfh0y8RSURCN-dug&s"
							cardTitle="Card Title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
							buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3 mb-2" >
						<Card
							urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0jIGbHolxMuAegBtZZQquMD8ULCN_1PgYQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcnlNUqGuhazk-aeikEVVpS335iCtknTRuA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9Dqr9ZMuIG6AbRFVc-mqNRKsg243eBC5SA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tojAgtojwMbGq6Pxgjyxmm1rHqwEKuUFaw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXEea4EG-xobr6P9cn8MzEB7dVWg4NsQkNQ&s"
							cardTitle="Card Title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
							buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3 mb-2" >
						<Card
							urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmqKLt81vu2sONUjPTtsfV8yhwsuNVBycfNA&s"
							cardTitle="Card Title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
							buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3 mb-2" >
						<Card
							urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsWp1vjI2suvpGvn3KsVjyGOLtnHUgoF05A&s"
							cardTitle="Card Title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
							buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
							buttonLabel="Find out more!"
						/>
					</div>


				</div>
			</div>
			<footer className="bg-dark">
				<p className="text-center text-white pt-5 pb-5">copyright, website with react 2023</p>

			</footer>
		</div>

	);
};

export default Home;
