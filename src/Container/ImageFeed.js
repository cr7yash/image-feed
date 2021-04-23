import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Images from '../components/Images/Images';
import Loader from '../components/Loader/Loader';

import './ImageFeed.css';

export default function ImageFeed() {
	const [image, setImage] = useState([]);
	const [error, setError] = useState('');
	const [imageList, setImageList] = useState([]);
	useEffect(() => {
		fetchImages();
	}, []);

	const fetchImages = (count = 10) => {
		const apiRoot = 'https://api.unsplash.com';
		const accessKey = 'xKPd-ca-OM64AUngVU5hYDv3I6B1EOHecqElS547_dM'; // Hide the api key through dotenv

		axios
			.get(
				`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}&orientation=portrait`
			)
			.then((res) => {
				setImage([...image, ...res.data]);
				setImageList(res.data);
			})
			.catch((err) => {
				setError(err);
			});
	};
	if (error) {
		return <p>Sorry there is a problem </p>;
	}

	return (
		<div>
			<div className='container'>
				<InfiniteScroll
					dataLength={image.length}
					next={fetchImages}
					hasMore={true}
					loader={<Loader />}
					style={{ overflow: 'hidden' }}
				>
					<div className='imgContainer'>
						{image.map((image) => (
							<Images
								imageList={imageList}
								url={image}
								key={image.id}
							/>
						))}
					</div>
				</InfiniteScroll>
			</div>
		</div>
	);
}
