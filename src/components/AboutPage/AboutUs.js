import React from 'react';
import { Link } from 'react-router-dom';
export default function AboutUs() {
	return (
		<div className="about-us">
			<img
				src={window.location.origin + '/static_images/aboutBcg.jpeg'}
				alt="logo"
				style={{ width: '250px', height: '200px', padding: '30px' }}
			/>
			<div>
				<h1>About Us</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque rerum ipsa, nam soluta molestias
					libero explicabo consequuntur a error quis vitae nostrum delectus accusantium harum!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat accusantium illum magni
					expedita aperiam obcaecati rem veritatis. Libero, recusandae?
				</p>
				<Link to="" className="main-link" style={{ margin: '20px' }}>
					more info
				</Link>
			</div>
		</div>
	);
}
