import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
  Fab,
  Skeleton,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  Bookmark as BookmarkIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import QuestionCard from "./QuestionCard";

const questions = [
  {
    id: 1,
    title: "Best Practices for Structuring a React Project",
    content:
      "Can someone share the best practices for organizing a scalable React project structure? I'm looking for recommendations on folder structure, reusable components, and separation of concerns.",
    category: "React",
    author: {
      name: "Nikhil Masurkar",
      avatar: "N",
      role: "Frontend Developer",
      reputation: 1280,
    },
    stats: {
      views: 312,
      answers: 9,
      likes: 21,
    },
    timestamp: "1 hour ago",
    tags: ["react", "project-structure", "best-practices"],
    hasAcceptedAnswer: false,
    isHot: true,
  },
  {
    id: 2,
    title: "How to Optimize Performance in Large Vue Applications",
    content:
      "My Vue.js app is growing and becoming slower. What are effective strategies and tools to optimize performance in large-scale Vue applications?",
    category: "Vue.js",
    author: {
      name: "Sarat Velumurik",
      avatar: "S",
      role: "Tech Lead",
      reputation: 3760,
    },
    stats: {
      views: 590,
      answers: 14,
      likes: 33,
    },
    timestamp: "4 hours ago",
    tags: ["vue", "performance", "optimization"],
    hasAcceptedAnswer: true,
    isHot: true,
  },
  {
    id: 3,
    title: "Tailwind CSS vs. Traditional CSS – Which Should I Use?",
    content:
      "I'm starting a new frontend project and debating between using Tailwind CSS or writing custom CSS. What are the pros and cons of each approach?",
    category: "CSS",
    author: {
      name: "Priya Sharma",
      avatar: "P",
      role: "UI Engineer",
      reputation: 982,
    },
    stats: {
      views: 427,
      answers: 7,
      likes: 18,
    },
    timestamp: "8 hours ago",
    tags: ["tailwind", "css", "frontend"],
    hasAcceptedAnswer: false,
    isHot: false,
  },
  {
    id: 4,
    title: "How to Handle Authentication in Single Page Applications (SPAs)?",
    content:
      "What is the best way to manage user authentication in SPAs using tokens? Should I use localStorage or cookies? What are the security implications?",
    category: "Authentication",
    author: {
      name: "Rahul Gupta",
      avatar: "I",
      role: "Frontend Developer",
      reputation: 745,
    },
    stats: {
      views: 208,
      answers: 5,
      likes: 12,
    },
    timestamp: "1 day ago",
    tags: ["authentication", "spa", "jwt", "security"],
    hasAcceptedAnswer: true,
    isHot: false,
  },
  {
    id: 5,
    title: "Common Pitfalls in Responsive Web Design",
    content:
      "What are the most common mistakes developers make when building responsive websites, and how can they be avoided?",
    category: "Responsive Design",
    author: {
      name: "Nikita Rao",
      avatar: "N",
      role: "Junior Developer",
      reputation: 524,
    },
    stats: {
      views: 702,
      answers: 17,
      likes: 40,
    },
    timestamp: "2 days ago",
    tags: ["responsive-design", "css", "media-queries"],
    hasAcceptedAnswer: true,
    isHot: false,
  },
  {
    id: 6,
    title: "Getting Started with React Native Navigation",
    content:
      "I'm new to React Native and trying to implement navigation between screens. Should I use React Navigation or another library?",
    category: "React Native",
    author: {
      name: "Devika Shah",
      avatar: "D",
      role: "Mobile Developer",
      reputation: 1145,
    },
    stats: {
      views: 319,
      answers: 8,
      likes: 19,
    },
    timestamp: "3 hours ago",
    tags: ["react-native", "navigation", "mobile"],
    hasAcceptedAnswer: false,
    isHot: true,
  },
  {
    id: 7,
    title: "How to Structure TypeScript Types in a Large Codebase",
    content:
      "What are best practices for organizing and managing TypeScript types in a large application?",
    category: "TypeScript",
    author: {
      name: "Kunal Deshmukh",
      avatar: "K",
      role: "Full Stack Dev",
      reputation: 1021,
    },
    stats: {
      views: 201,
      answers: 4,
      likes: 11,
    },
    timestamp: "2 days ago",
    tags: ["typescript", "types", "architecture"],
    hasAcceptedAnswer: false,
    isHot: false,
  },
  {
    id: 8,
    title: "Improving UI Consistency Across a Design System",
    content:
      "How do you maintain UI/UX consistency across different components and screens when working with a design system?",
    category: "UI/UX Design",
    author: {
      name: "Tanvi Iyer",
      avatar: "T",
      role: "Product Designer",
      reputation: 1442,
    },
    stats: {
      views: 278,
      answers: 6,
      likes: 17,
    },
    timestamp: "5 hours ago",
    tags: ["ui", "ux", "design-system"],
    hasAcceptedAnswer: true,
    isHot: false,
  },
  {
    id: 9,
    title: "Webpack vs Vite – Which is Better for Modern Apps?",
    content:
      "I'm building a modern frontend app. Should I choose Webpack or Vite for bundling? What are the trade-offs in terms of performance and ease of use?",
    category: "Build Tools",
    author: {
      name: "Mihir Bansal",
      avatar: "M",
      role: "Frontend Architect",
      reputation: 1603,
    },
    stats: {
      views: 341,
      answers: 10,
      likes: 26,
    },
    timestamp: "6 hours ago",
    tags: ["webpack", "vite", "build-tools"],
    hasAcceptedAnswer: false,
    isHot: true,
  },
  {
    id: 10,
    title: "Improving Page Speed on Lighthouse for Core Web Vitals",
    content:
      "What are actionable steps to improve Core Web Vitals (LCP, FID, CLS) scores on Lighthouse for a React app?",
    category: "Web Performance",
    author: {
      name: "Zara Kapoor",
      avatar: "Z",
      role: "Performance Engineer",
      reputation: 1780,
    },
    stats: {
      views: 498,
      answers: 11,
      likes: 31,
    },
    timestamp: "1 day ago",
    tags: ["performance", "lighthouse", "web-vitals"],
    hasAcceptedAnswer: true,
    isHot: false,
  },
  {
    id: 11,
    title: "Which Testing Library Should I Use with React?",
    content:
      "Should I use Jest, React Testing Library, or Cypress for testing my React components? What are their roles and how do they complement each other?",
    category: "Testing",
    author: {
      name: "Yash Tripathi",
      avatar: "Y",
      role: "QA Engineer",
      reputation: 1194,
    },
    stats: {
      views: 389,
      answers: 9,
      likes: 22,
    },
    timestamp: "8 hours ago",
    tags: ["testing", "jest", "react-testing-library", "cypress"],
    hasAcceptedAnswer: true,
    isHot: false,
  },
  {
    id: 12,
    title: "Frontend Developer Interview: What Should I Prepare?",
    content:
      "I'm preparing for a frontend developer role. What topics should I cover and what kind of questions should I expect?",
    category: "Career & Interviews",
    author: {
      name: "Pooja Nair",
      avatar: "P",
      role: "Job Seeker",
      reputation: 870,
    },
    stats: {
      views: 623,
      answers: 13,
      likes: 37,
    },
    timestamp: "3 days ago",
    tags: ["interview", "frontend", "career"],
    hasAcceptedAnswer: false,
    isHot: true,
  },
];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setLoading(true);
    setTimeout(() => setLoading(false), 500); // Simulate loading
  };

  const filteredQuestions = questions.filter(
    (question) =>
      question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const tabs = [
    { label: "Newest", icon: <TrendingUpIcon />, count: questions.length },
    { label: "Active", icon: <ScheduleIcon />, count: 45 },
    { label: "My Questions", icon: <PersonIcon />, count: 8 },
    { label: "My Answers", icon: <QuestionAnswerIcon />, count: 12 },
    { label: "Bookmarked", icon: <BookmarkIcon />, count: 5 },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3 },
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ px: "0 !important" }}>
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "stretch", sm: "center" },
              gap: 2,
              mb: 2,
            }}
          >
            <Box>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                sx={{
                  fontWeight: 800,
                  color: "text.primary",
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                }}
              >
                All Categories
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discover and discuss topics across all Frontend Categories
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              size={isMobile ? "medium" : "large"}
              sx={{
                borderRadius: 3,
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.875rem", sm: "1rem" },
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Ask Question
            </Button>
          </Box>
        </Box>

        {/* Search and Filter Section */}
        <Card
          elevation={0}
          sx={{
            mb: 3,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Grid container spacing={{ xs: 2, sm: 3 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search questions, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      backgroundColor: "grey.50",
                      "&:hover": {
                        backgroundColor: "background.paper",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "background.paper",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Sort by</InputLabel>
                  <Select
                    value={sortBy}
                    label="Sort by"
                    onChange={(e) => setSortBy(e.target.value)}
                    sx={{ borderRadius: 3 }}
                  >
                    <MenuItem value="newest">Newest First</MenuItem>
                    <MenuItem value="active">Most Active</MenuItem>
                    <MenuItem value="views">Most Viewed</MenuItem>
                    <MenuItem value="answers">Most Answered</MenuItem>
                    <MenuItem value="likes">Most Liked</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    borderColor: "primary.200",
                    "&:hover": {
                      borderColor: "primary.main",
                      backgroundColor: "primary.50",
                    },
                  }}
                >
                  More Filters
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Card
          elevation={0}
          sx={{
            mb: 3,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                minHeight: { xs: 56, sm: 64 },
                fontSize: { xs: "0.875rem", sm: "1rem" },
                px: { xs: 2, sm: 3 },
              },
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {tab.icon}
                    <span>{tab.label}</span>
                    <Chip
                      label={tab.count}
                      size="small"
                      sx={{
                        ml: 1,
                        height: 20,
                        fontSize: "0.75rem",
                        backgroundColor:
                          activeTab === index ? "primary.main" : "grey.200",
                        color: activeTab === index ? "white" : "text.secondary",
                      }}
                    />
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Card>

        {/* Questions List */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {filteredQuestions.length} Questions
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Hot Topics"
                color="error"
                size="small"
                sx={{ fontWeight: 600 }}
              />
              <Chip
                label="Trending"
                color="warning"
                size="small"
                sx={{ fontWeight: 600 }}
              />
            </Stack>
          </Box>

          {loading
            ? // Loading Skeletons
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} sx={{ mb: 2, p: 3, borderRadius: 3 }}>
                  <Skeleton variant="text" width="60%" height={32} />
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={20}
                    sx={{ mt: 1 }}
                  />
                  <Skeleton variant="text" width="80%" height={20} />
                  <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                    <Skeleton
                      variant="rectangular"
                      width={80}
                      height={24}
                      sx={{ borderRadius: 1 }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width={60}
                      height={24}
                      sx={{ borderRadius: 1 }}
                    />
                  </Box>
                </Card>
              ))
            : filteredQuestions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  sx={{ mb: 3 }}
                />
              ))}
        </Box>

        {/* Load More Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: 3,
              px: 4,
              py: 2,
              borderColor: "primary.main",
              color: "primary.main",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(99, 102, 241, 0.3)",
              },
            }}
          >
            Load More Questions
          </Button>
        </Box>

        {/* Floating Action Button for Mobile */}
        {isMobile && (
          <Fab
            color="primary"
            aria-label="ask question"
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              },
            }}
          >
            <AddIcon />
          </Fab>
        )}
      </Container>
    </Box>
  );
};

export default MainContent;
