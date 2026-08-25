import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Dumbbell,
  Gauge,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kotaana — Train, monitor, grow" },
      {
        name: "description",
        content:
          "A welcoming home for athletes and coaches on Kotaana. Athletes log workouts, nutrition, and progress. Coaches monitor, guide, and follow up.",
      },
      { property: "og:title", content: "Kotaana — Train, monitor, grow" },
      {
        property: "og:description",
        content:
          "A welcoming home for athletes and coaches on Kotaana. Athletes log workouts, nutrition, and progress. Coaches monitor, guide, and follow up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Dumbbell className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold">Kotaana</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/"
              className="rounded-full border border-border px-3 py-1.5 text-sm transition hover:bg-accent/10"
            >
              Athlete
            </Link>
            <Link
              to="/"
              className="rounded-full border border-border px-3 py-1.5 text-sm transition hover:bg-accent/10"
            >
              Coach
            </Link>
            <Link
              to="/"
              className="rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Owner
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-4">
          <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            Welcome to Kotaana
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            A welcoming home for every athlete and coach
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Whether you are here to train, track progress, or guide a team, you
            are welcome. Athletes get personalized workouts, health tracking, and
            progress insights. Coaches get clear dashboards, athlete follow-ups,
            and team statistics.
          </p>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <Link
            to="/"
            className="group rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40"
          >
            <Activity className="h-7 w-7 text-primary" />
            <h2 className="mt-4 text-xl font-semibold">Athlete</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Log workouts, meals, runs, and progress. Stay connected to your
              coach and keep your goals in sight.
            </p>
            <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
              Enter athlete portal <ArrowRight className="inline h-4 w-4" />
            </p>
          </Link>

          <Link
            to="/"
            className="group rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40"
          >
            <Users className="h-7 w-7 text-primary" />
            <h2 className="mt-4 text-xl font-semibold">Coach</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Monitor athletes, manage follow-ups, review statistics, and send
              recommendations.
            </p>
            <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
              Enter coach portal <ArrowRight className="inline h-4 w-4" />
            </p>
          </Link>

          <Link
            to="/"
            className="group rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40"
          >
            <Gauge className="h-7 w-7 text-primary" />
            <h2 className="mt-4 text-xl font-semibold">App owner</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Platform metrics only — users, coaches, AI usage, links, and
              subscriptions.
            </p>
            <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
              Enter owner portal <ArrowRight className="inline h-4 w-4" />
            </p>
          </Link>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "Isolated dashboards",
              body: "Each role has its own secure portal and dashboard. No cross-portal access.",
            },
            {
              icon: BarChart3,
              title: "Built for progress",
              body: "From daily workouts to team trends, every view is designed to move you forward.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </section>

        <footer className="mt-16 border-t border-border py-6 text-center text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Terms
          </Link>
          {" · "}
          <Link to="/" className="hover:text-foreground">
            Privacy
          </Link>
          {" · "}
          <Link to="/" className="hover:text-foreground">
            Medical disclaimer
          </Link>
        </footer>
      </main>
    </div>
  );
}
