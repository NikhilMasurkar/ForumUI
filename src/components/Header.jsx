import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  alpha,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  Forum as ForumIcon,
  LibraryBooks as LibraryBooksIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    minWidth: 200,
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 300,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const navigationItems = [
    { label: "Buy Courses", icon: <SchoolIcon /> },
    { label: "Programs", icon: <LibraryBooksIcon /> },
    { label: "Free Resources", icon: <HomeIcon /> },
    { label: "Forums", icon: <ForumIcon />, variant: "outlined" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#3f51b5",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: { xs: 56, sm: 64 },
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Mobile Menu Button */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
              sx={{
                mr: { xs: 1, sm: 2 },
                display: { lg: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: { xs: 1, lg: 0 },
                fontWeight: 700,
                mr: { lg: 4 },
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                display: "flex",
                alignItems: "center",
              }}
            >
              React Forum
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                mr: 4,
                gap: 1,
              }}
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  variant={item.variant || "text"}
                  startIcon={item.icon}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    px: 2,
                    borderRadius: 2,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Search Bar - Desktop & Tablet */}
            {!isMobile && (
              <Search
                sx={{
                  flexGrow: 1,
                  maxWidth: { sm: 300, md: 400, lg: 500 },
                  mx: { sm: 2, md: 3 },
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search forums, questions, topics..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}

            {/* Mobile Search Button */}
            {isMobile && (
              <IconButton
                size="large"
                color="inherit"
                onClick={handleSearchToggle}
                sx={{ mr: 1 }}
              >
                <SearchIcon />
              </IconButton>
            )}

            <Box sx={{ flexGrow: { xs: 0, lg: 1 } }} />

            {/* Right Side Icons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.5, sm: 1 },
              }}
            >
              <IconButton size={isMobile ? "medium" : "large"} color="inherit">
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton
                size={isMobile ? "medium" : "large"}
                edge="end"
                color="inherit"
                onClick={handleMenu}
              >
                <Avatar
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    bgcolor: "secondary.main",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  U
                </Avatar>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: 2,
                    minWidth: 180,
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Questions</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>

          {/* Mobile Search Bar */}
          {isMobile && searchOpen && (
            <Box
              sx={{
                p: 2,
                borderTop: "1px solid",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <Search sx={{ width: "100%" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search forums, questions, topics..."
                  inputProps={{ "aria-label": "search" }}
                  autoFocus
                />
              </Search>
            </Box>
          )}
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        PaperProps={{
          sx: {
            width: { xs: 280, sm: 320 },
            borderRadius: "0 16px 16px 0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            React Forum
          </Typography>
          <IconButton onClick={handleMobileMenuToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                sx={{
                  py: 1.5,
                  mx: 1,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "primary.50",
                  },
                }}
              >
                <Box sx={{ mr: 2, color: "primary.main" }}>{item.icon}</Box>
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
