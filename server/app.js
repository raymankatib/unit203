const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ITEMS } = require('./data');
const { DELIVERY_DATES } = require('./data');

const app = express();

app.use(cors());

app.use(bodyParser());

app.get('/allItems', function (req, res) {
	res.send(ITEMS);
});

app.post('/postal-code', (req, res) => {
	const postalCode = req.body.postalCode.toUpperCase();
	const itemIds = req.body.itemIds;

	DELIVERY_DATES.map((date) => {
		if (postalCode === date.postal && date.ids.some((item) => itemIds.includes(item))) {
			res.send(date.estimatedDeliveryDate);
		}
	});
});

app.listen(4001, () => console.log('Listening on port 4001'));
