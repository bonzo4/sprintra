export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="from-sprintra-blue-500 to-sprintra-blue-600 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-sprintra-orange-500 absolute -top-1 -right-1 h-4 w-4 animate-pulse rounded-full opacity-80"></div>
              </div>
              <span className="from-sprintra-blue-400 to-sprintra-orange-400 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                Sprintra
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden items-center space-x-8 md:flex">
              <a
                href="#features"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Docs
              </a>
              <button className="from-sprintra-blue-600 to-sprintra-blue-700 hover:from-sprintra-blue-700 hover:to-sprintra-blue-800 rounded-lg bg-gradient-to-r px-6 py-2 font-medium text-white transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="via-sprintra-blue-900/20 absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-900"></div>
        <div className="bg-sprintra-blue-500/10 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl"></div>
        <div className="bg-sprintra-orange-500/10 absolute right-1/4 bottom-0 h-96 w-96 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 text-5xl leading-tight font-bold lg:text-7xl">
              <span className="from-sprintra-blue-400 via-sprintra-blue-500 to-sprintra-orange-400 bg-gradient-to-r bg-clip-text text-transparent">
                Sprint at Lightning Speed
              </span>
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
              From idea to demo—without the planning chaos.
              <br />
              <span className="text-sprintra-orange-400 font-semibold">
                AI-powered sprint planning
              </span>{" "}
              for hackathons and indie builders.
            </p>

            <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="group from-sprintra-blue-600 to-sprintra-blue-700 hover:from-sprintra-blue-700 hover:to-sprintra-blue-800 hover:shadow-sprintra-blue-500/25 relative rounded-xl bg-gradient-to-r px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl">
                <span className="relative z-10">Start Building Now</span>
                <div className="from-sprintra-blue-500 to-sprintra-orange-500 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-20"></div>
              </button>
              <button className="hover:border-sprintra-orange-400 rounded-xl border-2 border-slate-600 px-10 py-4 text-lg font-semibold text-slate-300 transition-all hover:text-white">
                <span className="flex items-center space-x-2">
                  <span>Watch Demo</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Interactive Kanban Preview */}
            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {/* To Do Column */}
                  <div className="space-y-4">
                    <h3 className="flex items-center text-lg font-semibold text-slate-300">
                      <div className="mr-2 h-3 w-3 rounded-full bg-slate-500"></div>
                      To Do
                    </h3>
                    <div className="cursor-pointer rounded-lg border border-slate-600 bg-slate-700/50 p-4 transition-colors hover:border-blue-500/50">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sprintra-orange-400 text-sm font-medium">
                          🔥 Critical
                        </span>
                        <span className="text-xs text-slate-400">2hr</span>
                      </div>
                      <p className="text-sm text-white">
                        Set up Next.js + Tailwind
                      </p>
                    </div>
                  </div>

                  {/* In Progress Column */}
                  <div className="space-y-4">
                    <h3 className="flex items-center text-lg font-semibold text-slate-300">
                      <div className="bg-sprintra-blue-500 mr-2 h-3 w-3 animate-pulse rounded-full"></div>
                      In Progress
                    </h3>
                    <div className="border-sprintra-blue-500/50 bg-sprintra-blue-900/20 relative overflow-hidden rounded-lg border p-4">
                      <div className="from-sprintra-blue-500/10 absolute inset-0 animate-pulse bg-gradient-to-r to-transparent"></div>
                      <div className="relative">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sprintra-blue-400 text-sm font-medium">
                            ⚡ API
                          </span>
                          <span className="text-xs text-slate-400">
                            1hr left
                          </span>
                        </div>
                        <p className="text-sm text-white">
                          Integrate OpenAI API
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Done Column */}
                  <div className="space-y-4">
                    <h3 className="flex items-center text-lg font-semibold text-slate-300">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      Done
                    </h3>
                    <div className="rounded-lg border border-green-500/30 bg-green-900/20 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-green-400">
                          ✅ Complete
                        </span>
                        <span className="text-xs text-slate-400">30min</span>
                      </div>
                      <p className="text-sm text-white line-through opacity-75">
                        Project setup
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sprintra Boost Button */}
                <div className="mt-8 text-center">
                  <button className="group from-sprintra-orange-500 to-sprintra-orange-600 hover:from-sprintra-orange-600 hover:to-sprintra-orange-700 hover:shadow-sprintra-orange-500/25 relative rounded-full bg-gradient-to-r px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl">
                    <span className="flex items-center space-x-2">
                      <svg
                        className="h-5 w-5 animate-spin group-hover:animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>Sprintra Boost</span>
                    </span>
                    <div className="from-sprintra-orange-400 absolute inset-0 animate-pulse rounded-full bg-gradient-to-r to-red-400 opacity-0 transition-opacity group-hover:opacity-30"></div>
                  </button>
                  <p className="mt-2 text-sm text-slate-400">
                    AI auto-reprioritizes your tasks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-slate-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              <span className="from-sprintra-blue-400 to-sprintra-orange-400 bg-gradient-to-r bg-clip-text text-transparent">
                Build at Warp Speed
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Stop planning, start shipping. Sprintra&rsquo;s AI turns your
              wildest ideas into structured sprints.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Feature 1 */}
            <div className="group hover:border-sprintra-blue-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
              <div className="mb-6 flex items-center">
                <div className="from-sprintra-blue-500 to-sprintra-blue-600 mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Lightning Setup
                </h3>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                One sentence becomes a full sprint plan. Tech stack, timeline,
                templates—all in seconds.
              </p>
              <div className="rounded-lg border border-slate-600 bg-slate-900/50 p-4">
                <div className="text-sprintra-orange-400 mb-2 font-mono text-sm">
                  Input:
                </div>
                <div className="font-mono text-white">
                  &ldquo;Build a travel app MVP in 48 hours&rdquo;
                </div>
                <div className="text-sprintra-blue-400 mt-3 mb-2 font-mono text-sm">
                  Output:
                </div>
                <div className="space-y-1 text-sm text-slate-300">
                  <div>✓ Day 1: Auth + API setup</div>
                  <div>✓ Day 2: UI + Demo prep</div>
                  <div>✓ Tech: Next.js + Firebase + RapidAPI</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group hover:border-sprintra-orange-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
              <div className="mb-6 flex items-center">
                <div className="from-sprintra-orange-500 to-sprintra-orange-600 mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Time-Boxed Flow
                </h3>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                2-hour hackathon blocks or daily indie sprints. Never lose
                momentum again.
              </p>
              <div className="space-y-3">
                <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/20 to-red-600/20 p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-red-400">
                      🔥 Critical Path
                    </span>
                    <span className="text-sm text-slate-400">2hr</span>
                  </div>
                  <div className="mt-1 text-white">
                    Set up authentication flow
                  </div>
                </div>
                <div className="border-sprintra-blue-500/30 from-sprintra-blue-500/20 to-sprintra-blue-600/20 rounded-lg border bg-gradient-to-r p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sprintra-blue-400 font-semibold">
                      ⚡ Sprint
                    </span>
                    <span className="text-sm text-slate-400">1hr</span>
                  </div>
                  <div className="mt-1 text-white">
                    API integration & testing
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group hover:border-sprintra-blue-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Cheat Codes Library
                </h3>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                One-click access to APIs, code snippets, and design assets. No
                more tab juggling.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="hover:bg-sprintra-blue-500/20 hover:text-sprintra-blue-400 cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors">
                  API Docs
                </div>
                <div className="hover:bg-sprintra-orange-500/20 hover:text-sprintra-orange-400 cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors">
                  Code Snippets
                </div>
                <div className="cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors hover:bg-purple-500/20 hover:text-purple-400">
                  Figma Assets
                </div>
                <div className="cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors hover:bg-green-500/20 hover:text-green-400">
                  Boilerplates
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group hover:border-sprintra-orange-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Smart Pivots</h3>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                Falling behind? AI suggests scope cuts and alternatives to keep
                you shipping.
              </p>
              <div className="rounded-lg border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-red-500/10 p-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500">
                    <svg
                      className="h-4 w-4 text-slate-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-400">
                      4 hours behind schedule
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      Suggested: Simplify hotel search or use mock data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="via-sprintra-blue-900/20 relative bg-gradient-to-br from-slate-900 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-sprintra-blue-400 absolute top-10 left-10 h-2 w-2 rounded-full"></div>
          <div className="bg-sprintra-orange-400 absolute top-20 right-20 h-1 w-1 rounded-full"></div>
          <div className="bg-sprintra-blue-400 absolute bottom-10 left-1/4 h-1 w-1 rounded-full"></div>
          <div className="bg-sprintra-orange-400 absolute right-1/3 bottom-20 h-2 w-2 rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-4xl font-bold lg:text-6xl">
              <span className="from-sprintra-blue-400 via-sprintra-orange-400 to-sprintra-blue-400 bg-gradient-to-r bg-clip-text text-transparent">
                Ready to Ship Faster?
              </span>
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-slate-300 lg:text-2xl">
              Join thousands of builders who&rsquo;ve shipped their MVPs in
              record time.
              <br />
              <span className="text-sprintra-orange-400">
                No credit card required.
              </span>
            </p>

            <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="group from-sprintra-blue-600 to-sprintra-orange-600 hover:from-sprintra-blue-700 hover:to-sprintra-orange-700 hover:shadow-sprintra-blue-500/25 relative rounded-2xl bg-gradient-to-r px-12 py-5 text-xl font-bold text-white shadow-2xl transition-all">
                <span className="relative z-10 flex items-center space-x-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>Start Your Sprint</span>
                </span>
                <div className="from-sprintra-orange-500 to-sprintra-blue-500 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-30"></div>
              </button>
              <button className="text-lg font-medium text-slate-300 underline underline-offset-4 transition-colors hover:text-white">
                View live demo →
              </button>
            </div>

            {/* Social Proof */}
            <div className="border-t border-slate-800 pt-12">
              <p className="mb-8 text-lg text-slate-400">
                Trusted by builders from
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
                <div className="hover:text-sprintra-orange-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
                  Y Combinator
                </div>
                <div className="hover:text-sprintra-blue-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
                  Techstars
                </div>
                <div className="hover:text-sprintra-orange-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
                  Indie Hackers
                </div>
                <div className="hover:text-sprintra-blue-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
                  Product Hunt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
