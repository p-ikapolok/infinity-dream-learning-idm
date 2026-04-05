import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // home "/"

  route("programs", "routes/programs.tsx"),
  route("ai-data-tech", "routes/ai-data-tech.tsx"),
  route("creative", "routes/creative.tsx"),
  route("entrepreneurship", "routes/entrepreneurship.tsx"),
  route("about", "routes/about.tsx"),
  route("all-access", "routes/all-access.tsx"),
  route("ehub", "routes/ehub.tsx"),
  route("learning", "routes/learning.tsx"),
  route("community", "routes/community.tsx"),
  route("support", "routes/support.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("rewards", "routes/rewards.tsx"),
  route("profile", "routes/profile.tsx"),
  route("settings", "routes/settings.tsx"),

  route("learning/course/:id", "routes/learning.course.tsx"),
  route("learning/lesson/:id", "routes/learning.lesson.tsx"),

  route("certificates", "routes/certificates.tsx"),
  route("achievements", "routes/achievements.tsx"),
  route("progress", "routes/progress.tsx"),
  route("user", "routes/user.tsx"),
  route("notifications", "routes/notifications.tsx"),
  route("messages", "routes/messages.tsx"),
  route("followers", "routes/followers.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("admin", "routes/admin.tsx"),
  route("instructor", "routes/instructor.tsx"),
  route("course-builder", "routes/course-builder.tsx"),
  route("upload-lesson", "routes/upload-lesson.tsx"),
  route("course", "routes/course.tsx"),
  route("my-courses", "routes/my-courses.tsx"),
  route("certificate", "routes/certificate.tsx"),
  route("marketplace", "routes/marketplace.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;