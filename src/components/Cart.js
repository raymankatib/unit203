import { useState } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

import ItemCard from './ItemCard';
import TotalComponent from './TotalComponent';
import { lineItems, BLUE } from '../config/variables';

export default function Cart() {
	console.log(lineItems);
	const [renderItems, setRenderItems] = useState(lineItems);

	const handelAddItem = () => {
		setRenderItems([
			...renderItems,
			{
				id: new Date(),
				title: 'Grey Sofa',
				price: 499.99,
				quantity: 1,
				image:
					'https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_DARK_GREY_OFF_OFF_SLOPE_17f0f115-11f8-4a78-b412-e9a2fea4748d.png%3Fv%3D1629310667&w=1920&q=75',
				swatchColor: '#959392',
				swatchTitle: 'Grey',
				details: 'DARK GRAY/ Without Ottoman/ 3',
				color: 'Dark grey'
			}
		]);
	};

	return (
		<Box p="5">
			<Box>
				<Heading color={BLUE}>Your Cart</Heading>
			</Box>
			<Button onClick={handelAddItem}>Add item</Button>
			{renderItems?.map((item, i) => (
				<ItemCard key={i} items={renderItems} item={item} setRenderItems={setRenderItems} />
			))}
			<TotalComponent items={renderItems} />
		</Box>
	);
}
