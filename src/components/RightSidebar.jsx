import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  Chip,
  Avatar,
  LinearProgress,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  Stars as StarsIcon,
  People as PeopleIcon,
  QuestionAnswer as QuestionAnswerIcon,
} from "@mui/icons-material";

const RightSidebar = () => {
  const trendingTopics = [
    { name: "React Performance Tuning", questions: 51, trend: "+34%" },
    { name: "Vue Composition API", questions: 37, trend: "+26%" },
    { name: "Tailwind CSS Tips", questions: 42, trend: "+19%" },
    { name: "React Native Navigation", questions: 29, trend: "+23%" },
    { name: "TypeScript for Beginners", questions: 46, trend: "+31%" },
    { name: "Testing with Jest & RTL", questions: 33, trend: "+17%" },
  ];

  const topContributors = [
    {
      name: "Nikhil Masurkar",
      role: "Frontend Developer",
      points: 1250,
      avatar: "N",
    },
    { name: "Sarat Velumurik", role: "Tech Lead", points: 2340, avatar: "S" },
    {
      name: "Priya Sharma",
      role: "Product Designer",
      points: 980,
      avatar: "P",
    },
    { name: "Rahul Gupta", role: "Full Stack Dev", points: 875, avatar: "R" },
  ];

  return (
    <Box
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
        overflowY: "auto",
      }}
    >
      {/* Promotional Card */}
      <Card
        sx={{
          mb: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <StarsIcon sx={{ fontSize: 40, mb: 1, opacity: 0.9 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Enroll in FrontEnd Development Course
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Get HTML Free with exclusive benefits
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Enroll Now
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card
        elevation={0}
        sx={{ mb: 3, border: "1px solid", borderColor: "divider" }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Trending Topics
            </Typography>
          </Box>
          <List dense>
            {trendingTopics.map((topic, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {topic.name}
                    </Typography>
                    <Chip
                      label={topic.trend}
                      size="small"
                      color="success"
                      sx={{ fontSize: "0.7rem", height: 18 }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {topic.questions} questions
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card
        elevation={0}
        sx={{ mb: 3, border: "1px solid", borderColor: "divider" }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PeopleIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Top Contributors
            </Typography>
          </Box>
          <List dense>
            {topContributors.map((contributor, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 32,
                      height: 32,
                      mr: 2,
                      fontSize: "0.875rem",
                    }}
                  >
                    {contributor.avatar}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, mb: 0.5 }}
                    >
                      {contributor.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {contributor.role}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="primary.main"
                        sx={{ fontWeight: 600 }}
                      >
                        {contributor.points} pts
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Community Stats */}
      <Card
        elevation={0}
        sx={{ mb: 3, border: "1px solid", borderColor: "divider" }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <QuestionAnswerIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Community Stats
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2">Questions Today</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                127
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{ height: 6, borderRadius: 3 }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2">Answers Today</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                234
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={85}
              color="secondary"
              sx={{ height: 6, borderRadius: 3 }}
            />
          </Box>

          <Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2">Active Users</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                1,234
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={65}
              color="success"
              sx={{ height: 6, borderRadius: 3 }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RightSidebar;
