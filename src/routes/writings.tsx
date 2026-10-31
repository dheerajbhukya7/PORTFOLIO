import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/writings")({
  component: WritingsLayout,
});

function WritingsLayout() {
  return <Outlet />;
}
