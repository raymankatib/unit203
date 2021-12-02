import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';

import { BLUE } from '../config/variables';
export default function ItemCard({ item }) {
	return (
		<Flex m="10px" justifyContent="space-between">
			<Flex>
				<Box>
					<Image w="auto" h="300px" src={item.image} alt={item.title} />
				</Box>
				<Box>
					<Text fontWeight="bold" color={BLUE}>
						{item.details}
					</Text>
					<Flex mt="20px">
						<Box
							backgroundColor={item.swatchColor}
							w="30px"
							h="30px"
							border="1px"
							borderColor="lightgray"
							borderRadius="15px"
						></Box>
						<Text ml="10px" mt="2px">
							{item.color}
						</Text>
					</Flex>
				</Box>
			</Flex>
			<Box>
				<Text>$965.00</Text>
				<Flex mt="10" mb="10">
					<Text mr="5px" fontWeight="bold">
						Estimated delivery date:
					</Text>
					<Text fontSize="l" color={BLUE}>
						Dec 2 - Dec 15
					</Text>
				</Flex>
				<Text cursor="pointer" textDecor="underline">
					Remove
				</Text>
			</Box>
		</Flex>
	);
}
