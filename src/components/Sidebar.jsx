import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  Drawer,
  useMediaQuery,
  useTheme,
  IconButton,
  Paper,
} from "@mui/material";
import {
  AccountBalance as AccountBalanceIcon,
  Assessment as AssessmentIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  Computer as ComputerIcon,
  BarChart as BarChartIcon,
  Quiz as QuizIcon,
  School as SchoolIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  PhoneAndroid as PhoneIphoneIcon,
} from "@mui/icons-material";

const categories = [
  {
    name: "All Categories",
    icon: <DashboardIcon />,
    count: 0,
    active: true,
    color: "primary",
  },
  {
    name: "React",
    icon: <AssessmentIcon />,
    count: 312,
    color: "secondary",
  },
  {
    name: "React Native",
    icon: <PhoneIphoneIcon />, // Mobile-friendly icon
    count: 178,
    color: "success",
  },
  {
    name: "Vue.js",
    icon: <AccountBalanceIcon />,
    count: 208,
    color: "success",
  },
  {
    name: "CSS & Styling",
    icon: <BarChartIcon />,
    count: 289,
    color: "info",
  },
  {
    name: "JavaScript",
    icon: <BusinessIcon />,
    count: 354,
    color: "warning",
  },
  {
    name: "TypeScript",
    icon: <TrendingUpIcon />,
    count: 165,
    color: "error",
  },
  {
    name: "UI/UX Design",
    icon: <BarChartIcon />,
    count: 198,
    color: "primary",
  },
  {
    name: "Web Performance",
    icon: <TrendingUpIcon />,
    count: 123,
    color: "secondary",
  },
  {
    name: "Build Tools",
    icon: <ComputerIcon />,
    count: 132,
    color: "success",
  },
  {
    name: "Authentication",
    icon: <BusinessIcon />,
    count: 110,
    color: "info",
  },
  {
    name: "Responsive Design",
    icon: <BarChartIcon />,
    count: 142,
    color: "warning",
  },
  {
    name: "Testing",
    icon: <SchoolIcon />,
    count: 97,
    color: "error",
  },
  {
    name: "Career & Interviews",
    icon: <QuizIcon />,
    count: 184,
    color: "primary",
  },
];

const Sidebar = ({ open, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    if (isMobile) {
      onClose();
    }
  };

  const sidebarContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "text.primary" }}
        >
          Categories
        </Typography>
        {isMobile && (
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      {/* Categories List */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        <List dense>
          {categories.map((category) => (
            <ListItem key={category.name} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                selected={selectedCategory === category.name}
                onClick={() => handleCategorySelect(category.name)}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  px: 2,
                  transition: "all 0.2s ease-in-out",
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    color: "white",
                    boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                    "& .MuiChip-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                      fontWeight: 600,
                    },
                  },
                  "&:hover": {
                    backgroundColor: "action.hover",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 44 }}>
                  {category.icon}
                </ListItemIcon>
                <ListItemText
                  primary={category.name}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    },
                  }}
                />
                {category.count > 0 && (
                  <Chip
                    label={category.count}
                    size="small"
                    sx={{
                      bgcolor:
                        selectedCategory === category.name
                          ? "rgba(255,255,255,0.2)"
                          : `${category.color}.50`,
                      color:
                        selectedCategory === category.name
                          ? "white"
                          : `${category.color}.700`,
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      height: 24,
                      minWidth: 32,
                      "& .MuiChip-label": {
                        px: 1,
                      },
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer Stats */}
      <Box
        sx={{
          p: 3,
          borderTop: "1px solid",
          borderColor: "divider",
          backgroundColor: "grey.50",
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mb: 1 }}
        >
          Community Stats
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Total Questions
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            1,847
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Active Users
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            234
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: 320,
            borderRadius: "0 16px 16px 0",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        width: 320,
        flexShrink: 0,
        height: "calc(100vh - 72px)",
        position: "sticky",
        top: 72,
        borderRadius: 0,
        borderRight: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      {sidebarContent}
    </Paper>
  );
};

export default Sidebar;
