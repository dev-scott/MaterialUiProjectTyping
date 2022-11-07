import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["Jouer", "Resultat", "Contactez nous", "A propos", "Se connecter", "S'inscrire"];

const DrawerComp = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>

        <List>

          {

            PAGES.map((page, index) => (


              <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>

                      {page}
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>

            ))


          }


        </List>

      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>

        <MenuIcon />


      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp