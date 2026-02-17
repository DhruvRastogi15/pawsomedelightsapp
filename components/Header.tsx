import "./styles/header.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2400,
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
        height:'150px'
      }}
    >
      <Toolbar disableGutters>
        <div className="header">
          <Box className="top-bar">
            One Bowl At A Time - Feeding Strays With Every Order →
          </Box>
          <header className="header2">
            <div className="header-inner">
              <div className="logo">
                PAWSOME DELIGHTS
              </div>
            </div>
          </header>
        </div>
      </Toolbar>
    </AppBar>
  );
}
