const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

app.get('/allItems', function (req, res) {
	res.send([
		{
			id: 1,
			title: 'Grey Sofa',
			price: 499.99,
			quantity: 1,
			image:
				'https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_DARK_GREY_OFF_OFF_SLOPE_17f0f115-11f8-4a78-b412-e9a2fea4748d.png%3Fv%3D1629310667&w=1920&q=75',
			swatchColor: '#959392',
			swatchTitle: 'Grey',
			details: 'DARK GRAY/ Without Ottoman/ 3',
			color: 'Dark grey'
		},
		{
			id: 3,
			title: 'White Sofa',
			price: 599.99,
			quantity: 1,
			image:
				'https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_IVORY_OFF_OFF_SLOPE_5379af1f-9318-4e37-b514-962d33d1ce64.png%3Fv%3D1629231450&w=1920&q=75',
			swatchColor: '#F8F1EC',
			swatchTitle: 'White',
			details: 'IVORY/ Without Ottoman/ 3',
			color: 'Ivory'
		}
	]);
});

app.listen(4001, () => console.log('Listening on port 4001'));
