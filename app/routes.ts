import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // home "/"

  route("about", "routes/about.tsx"),
  route("ehub", "routes/ehub.tsx"),
  route("learning", "routes/learning.tsx"),
  route("community", "routes/community.tsx"),
  route("support", "routes/support.tsx"),

  route("pricing", "routes/pricing.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("/ehub-login", "routes/ehub-login.tsx"),
  route("/learning-login", "routes/learning-login.tsx"),
  route("/signup", "routes/signup.tsx"),
  route("/learning-resources-page", "routes/learning-resources-page.tsx"),
  route("LearningCourseView", "routes/LearningCourseView.tsx"),
  route("account-payments", "routes/account-payments.tsx"),
  route("account-password", "routes/account-password.tsx"),
  route("account-paymentFAQs", "routes/account-paymentFAQs.tsx"),
  route("account-hubattendance", "routes/account-hubattendance.tsx"),
  route("settings-personal-information", "routes/settings-personal-information.tsx"),
  route("settings-education-info", "routes/settings-education-info.tsx"),
  route("settings-work-info", "routes/settings-work-info.tsx"),
  route("settings-demographic-info", "routes/settings-demographic-info.tsx"),
  route("RewardsPage", "routes/RewardsPage.tsx"),
  route("CommunityNotifications", "routes/CommunityNotifications.tsx"),
  route("CommunityDirectMessages", "routes/CommunityDirectMessages.tsx"),
  route("EhubLoadingScreen", "routes/EhubLoadingScreen.tsx"),
  route("CommunityDirectMessageChat/:id", "routes/CommunityDirectMessageChat.tsx"),
  route("CommunityBookmarks", "routes/CommunityBookmarks.tsx"),
  route("CommunityFeed", "routes/CommunityFeed.tsx"),
  route("CommunityMembers", "routes/CommunityMembers.tsx"),
  route("CommunityAnnouncement", "routes/CommunityAnnouncement.tsx"),
  route("CommunityEvents", "routes/CommunityEvents.tsx"),
  route("CommunitySpotlight", "routes/CommunitySpotlight.tsx"),
  route("CommunityProfile", "routes/CommunityProfile.tsx"),
  route("CommunityLeaderboard", "routes/CommunityLeaderboard.tsx"),
  route("StartHere", "components/community/StartHere.tsx"),
  route("WelcomeChecklist", "components/community/WelcomeChecklist.tsx"),
  route("InterestGroups", "components/community/InterestGroups.tsx"),
  route("PublicPage", "routes/PublicPage.tsx"),
  route("aipage", "routes/aipage.tsx"),
  route("creative", "routes/creative.tsx"),
  route("business", "routes/business.tsx"),
  route("PublicSupport", "routes/PublicSupport.tsx"),
  route("ApplicationPage", "routes/ApplicationPage.tsx"),
  route("CourseViewPage", "routes/CourseViewPage.tsx"),
  route("Topic learning", "routes/TopicLearning.tsx"),

route("ai", "ai/learning-portal-dashboard.tsx", [
  //  default page for /ai
  index("ai/ai-path.tsx"),

  // Engine routes (all unique files)
  route("agents", "ai/ai-agents.tsx"),
  route("lesson", "ai/ai-lesson.tsx"),
  route("code", "ai/ai-code.tsx"),
  route("project", "ai/ai-project.tsx"),

  route("quiz", "ai/ai-quiz.tsx"),
  route("grading", "ai/ai-grading.tsx"),
  route("feedback", "ai/ai-feedback.tsx"),

  route("plagiarism", "ai/ai-plagiarism.tsx"),
  route("detection", "ai/ai-detection.tsx"),

  route("chat", "ai/ai-chat.tsx"),
  route("voice", "ai/ai-voice.tsx"),
]),
] satisfies RouteConfig;