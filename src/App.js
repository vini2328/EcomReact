  import React, { useState } from 'react';
  import Card from "@mui/material/Card";
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  import Button from "@mui/material/Button";
  import AppBar from "@mui/material/AppBar";
  import Box from "@mui/material/Box";
  import Toolbar from "@mui/material/Toolbar";
  import Typography from "@mui/material/Typography";
  import IconButton from "@mui/material/IconButton";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import Select from "@mui/material/Select";
  import FormControl from "@mui/material/FormControl";
  import { Badge } from '@mui/material';  
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

  function App() {
    const products = [
      {
        name: "Fancy Product",
        rating: "",
        price: "$40.00 - $80.00",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },
      {
        name: "Special Item ",
        rating: "⭐⭐⭐⭐⭐",
        price: " $20.00 $18.00 ",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: true,
      },
      {
        name: "Sale Item ",
        rating: "",
        price: " $50.00 $25.00  ",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: true,
      },
      {
        name: "Popular Item ",
        rating: "⭐⭐⭐⭐⭐",
        price: " $40.00 ",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },
      {
        name: "Sale Item ",
        rating: "",
        price: " $50.00 $25.00 ",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: true,
      },
      {
        name: "Fancy Product ",
        rating: "",
        price: " $120.00 - $280.00 ",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },
      {
        name: "Special Item",
        rating: "⭐⭐⭐⭐⭐",
        price: " $20.00 $18.00 ",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: true,
      },
      {
        name: "Popular Item",
        rating: "⭐⭐⭐⭐⭐",
        price: " $40.00 ",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },
    ];

    const [age, setAge] =useState("");
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([])

    const addToCart = (productName) => {
      setCartCount(cartCount + 1);
      setCartItems([...cartItems, productName]);
    };

    const removeFromCart = (productName) => {
      if (cartCount > 0) {
        setCartCount(cartCount - 1);
      }
      setCartItems(cartItems.filter(item => item !== productName));
    };
      

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const handleCartClick = () => {
      alert(`Cart Items:\n${cartItems.join('\n')}`);
    };

    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="appbar">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <div className="bar">
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                  Start Bootstrap &nbsp; &nbsp;
                </Typography>

                <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                  Home &nbsp; &nbsp;
                </Typography>
                <Box sx={{ minWidth: 90 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      <b>Shop</b>
                    </InputLabel>
                    
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>All Products</MenuItem>
                      <MenuItem value={20}>Popular items</MenuItem>
                      <MenuItem value={30}>New Arrivals</MenuItem>
                    </Select>
                  </FormControl>
                  <IconButton className='cart' color="inherit" onClick={handleCartClick}   style={{ position: 'absolute', top: '10px', right: '80px' }}>
                <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon  />
                </Badge>
              </IconButton>
                  
                </Box>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <div className="rg">
          <div className="box">
            <h1>Shop in Style</h1>
            <h4>With this shop hompeage template</h4>
          </div>
          <div className="card-row ">
            
            {products &&
              products.map(({ name, price, rating, img }) => (
                <Card className="Card">
                  <CardMedia
                    sx={{ height: 180 }}
                    image={img}
                    title="green iguana"
                  />
                  
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {rating}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {price}
                    </Typography>
                  </CardContent>
                  <Button variant="contained" sx={{marginRight:2}} onClick={() => addToCart(name)}>Add to cart</Button>
                  <Button variant="contained" color="error" onClick={() => removeFromCart(name)}> Remove</Button>

                </Card>
              ))}
          </div>
        </div>
      </div>
    );
  }

  export default App;
