function InventoryItem (props){
	return (
		<div>
			<h2>{props.name}</h2>
				<p>Type: {props.type}</p>
				<p>Quantity: {props.quantity}</p>
				<p>Price: ${props.price}</p>

				{props.quantity < 5 && <Message>⚠️ Low Stock!</Message>}
				{props.quantity*props.price > 1000 && <Message>Caution, high value item, may require extra security</Message>}
				{props.quantity === 0 && <Message>🚨Alert! We ran out, order ASAP🚨</Message>}
				{/* windows + . gives emoji */}

		</div>
	);
}

InventoryItem.defaultProps = {
	quantity: 0,
	price: 0
};