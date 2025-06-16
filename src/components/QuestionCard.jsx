import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Divider,
  Stack,
  Badge,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Comment as CommentIcon,
  ThumbUp as ThumbUpIcon,
  BookmarkBorder as BookmarkIcon,
  Share as ShareIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const QuestionCard = ({ question, sx }) => {
  const getCategoryColor = (category) => {
    const colors = {
      React: "secondary",
      "React Native": "success",
      "Vue.js": "success",
      "CSS & Styling": "info",
      JavaScript: "warning",
      TypeScript: "error",
      "UI/UX Design": "primary",
      "Web Performance": "secondary",
      "Build Tools": "success",
      Authentication: "info",
      "Responsive Design": "warning",
      Testing: "error",
      "Career & Interviews": "primary",
    };
    return colors[category] || "default";
  };

  const formatTimeAgo = (timestamp) => {
    // Simple time formatting - in real app, use a library like date-fns
    return timestamp;
  };

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 4px 20px rgba(63, 81, 181, 0.1)",
          transform: "translateY(-2px)",
        },
        ...sx,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 40,
                height: 40,
                fontWeight: 600,
              }}
            >
              {question.author.avatar}
            </Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                {question.author.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Chip
                  label={question.author.role}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: "0.75rem", height: 20 }}
                />
                <Typography variant="caption" color="text.secondary">
                  {question.author.reputation}+ reputation
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="small" color="default">
              <BookmarkIcon />
            </IconButton>
            <IconButton size="small" color="default">
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Question Content */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { color: "primary.main" },
              }}
            >
              {question.title}
            </Typography>
            {question.hasAcceptedAnswer && (
              <CheckCircleIcon color="success" fontSize="small" />
            )}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, lineHeight: 1.6 }}
          >
            {question.content}
          </Typography>
        </Box>

        {/* Tags */}
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              label={question.category}
              size="small"
              color={getCategoryColor(question.category)}
              sx={{ mb: 1 }}
            />
            {question.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{ mb: 1, fontSize: "0.75rem" }}
              />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <IconButton size="small" color="primary">
                <ThumbUpIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {question.stats.likes}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography variant="body2" color="text.secondary">
                {question.stats.answers} answers
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <VisibilityIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {question.stats.views} views
              </Typography>
            </Box>
          </Box>

          <Typography variant="caption" color="text.secondary">
            {formatTimeAgo(question.timestamp)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
