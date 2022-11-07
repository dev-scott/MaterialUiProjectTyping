import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from '../Drawer/Drawer';

const PAGES = ["Jouer", "Resultat", "Contactez nous", "A propos"];

const Header = () => {


    const [value, setValue] = useState();

    const theme = useTheme();
    console.log(theme)

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch)

    return (
        <React.Fragment>

            <AppBar sx={{ background: "#063970" }}>

                <Toolbar>





                    {isMatch ? (
                        <>

                            <Typography>
                                Typing-Fast

                            </Typography>
                            <DrawerComp />



                        </>


                    ) : (

                        <>
                            <ShoppingCartIcon />


                            <Tabs sx={{ marginLeft: 'auto' }} textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary" >


                                {PAGES.map((page, index) => (

                                    <Tab key={index} label={page} />

                                ))}



                            </Tabs>

                            <Button sx={{ marginLeft: "auto" }} variant="contained" >Login</Button>
                            <Button sx={{ marginLeft: "10px" }} variant="contained" >Sigup</Button>



                        </>


                    )}

                </Toolbar>



            </AppBar>

        </React.Fragment>
    )
}

export default Header