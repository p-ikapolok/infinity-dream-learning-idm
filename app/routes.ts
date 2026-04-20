import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // home "/"

  route("creative", "routes/creative.tsx"),
  route("entrepreneurship", "routes/entrepreneurship.tsx"),
  route("about", "routes/about.tsx"),
  route("all-access", "routes/all-access.tsx"),
  route("ehub", "routes/ehub.tsx"),
  route("learning", "routes/learning.tsx"),
  route("community", "routes/community.tsx"),
  route("support", "routes/support.tsx"),

  route("pricing", "routes/pricing.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("marketplace", "routes/marketplace.tsx"),
  route("/ehub-login", "routes/ehub-login.tsx"),
  route("/learning-login", "routes/learning-login.tsx"),
  route("/signup", "routes/signup.tsx"),
  route("/learning-resources-page", "routes/learning-resources-page.tsx"),
] satisfies RouteConfig;