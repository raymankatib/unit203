import { useEffect, useState, useRef } from 'react';
import { Box, Heading, Flex, Input } from '@chakra-ui/react';
import axios from 'axios';

import { BLUE, ESTIMATED_DELIVERY } from '../config/variables';
export default function TotalComponent({ items }) {
	const postalRef = useRef();
	const [fees, setFees] = useState({});
	const [estimateDelivery, setEstimateDelivery] = useState('');
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
	}, [items]);

	const handelSubmit = async (e) => {
		e.preventDefault();
		const userPostal = postalRef.current.value;
		const { data: _estimateDelivery } = await axios.post('http://localhost:4001/postal-code', {
			postalCode: userPostal,
			itemIds: items.reduce((acc, cur) => {
				acc = [...acc, cur.id];
				return acc;
			}, [])
		});
		setEstimateDelivery(_estimateDelivery);

		postalRef.current.value = '';
	};

	return (
		<Box>
			<form onSubmit={(e) => handelSubmit(e)}>
				<Input ref={postalRef} w="50%" type="text" placeholder="Enter your postal code (V, M, K)" />
			</form>
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
				<Heading>{estimateDelivery}</Heading>
			</Flex>
			<Flex justifyContent="space-between" color={BLUE}>
				<Heading>Total:</Heading>
				<Heading>{fees.total}$</Heading>
			</Flex>
		</Box>
	);
}
