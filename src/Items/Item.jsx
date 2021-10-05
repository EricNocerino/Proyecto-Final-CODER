import React from "react";
import "./Item.css";

//components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = ({ product }) => {
	return (
		<div className="content">
			<Card className="card" sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						width="200"
						margin="10"
						image={product.img}
						alt="img"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{product.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<p>En stock:{product.stock}</p>
							<p>${product.price}</p>
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default Item;
