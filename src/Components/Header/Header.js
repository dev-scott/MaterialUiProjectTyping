import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from '../Drawer/Drawer';
import { Link } from "react-router-dom";
import "./Header.scss"

const PAGES = ["Jouer", "Resultat", "Contactez_nous", "A_propos"];
const PAGES_BTN = ["Se connecter", "S'inscrir"];

const Header = () => {


    const [value, setValue] = useState();

    const theme = useTheme();
    console.log(theme)

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch)

    return (
        <React.Fragment>

            <AppBar sx={{ background: "#063970", }} className="AppBar" >

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


                            <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} >


                                {PAGES.map((page, index) => (

                                    <Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}>

                                        <Tab key={index} label={page} />
                                    </Link>


                                ))}



                            </Tabs>

                            {/* {PAGES_BTN.map((page_btn , index)=> (
                                    
                                    
                                    
                                    ))} */}

                            <Button sx={{ marginLeft: "auto" }} variant="contained" > <Link to="Se_connecter" style={{ textDecoration: 'none', color: "white" }}>  Login </Link> </Button>
                            <Button sx={{ marginLeft: "10px" }} variant="contained" >  <Link to="S'inscrire" style={{ textDecoration: "none", color: "white" }}> Sigup </Link></Button>



                        </>


                    )}

                </Toolbar>



            </AppBar>

        </React.Fragment>
    )
}

export default Header