import { Box, Heading } from '@chakra-ui/react';

import ItemCard from './ItemCard';
import { lineItems, BLUE } from '../config/variables';
export default function Cart() {
	console.log(lineItems);

	return (
		<div>
			<Box>
				<Heading color={BLUE}>Your Cart</Heading>
			</Box>
			{lineItems.map((item, i) => (
				<ItemCard key={i} item={item} />
			))}
		</div>
	);
}
