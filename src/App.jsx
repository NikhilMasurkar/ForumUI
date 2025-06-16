import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import { theme } from "./proThemeProvider";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Header onSidebarToggle={handleSidebarToggle} />
        <Box sx={{ display: "flex", flex: 1, position: "relative" }}>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <MainContent />
          <RightSidebar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
