import { useEffect, useState } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

import { BLUE, SUBTOTAL, HST, ESTIMATED_DELIVERY, TOTAL } from '../config/variables';
export default function TotalComponent({ items }) {
	const [fees, setFees] = useState({});
	const calculateFees = () => {
		const subtotal = items.reduce((acc, cur) => {
			acc += cur.price;
			return acc;
		}, 0);

		const hst = subtotal * 0.13;
		const shippingRate = 15;

		const total = subtotal + hst + shippingRate;

		return setFees({ subtotal, hst, shippingRate, total });
	};

	useEffect(() => {
		calculateFees();
		console.log(fees);
	}, [items]);

	return (
		<Box>
			<Flex justifyContent="space-between">
				<Heading>Subtotal:</Heading>
				<Heading>{fees.subtotal}$</Heading>
			</Flex>
			<Flex justifyContent="space-between">
				<Heading>Taxes(estimated):</Heading>
				<Heading>{fees.hst}$</Heading>
			</Flex>
			<Flex justifyContent="space-between">
				<Heading>Shipping:</Heading>
				<Heading>{ESTIMATED_DELIVERY}$</Heading>
			</Flex>
			<Flex justifyContent="space-between" color={BLUE}>
				<Heading>Total:</Heading>
				<Heading>{fees.total}$</Heading>
			</Flex>
		</Box>
	);
}
