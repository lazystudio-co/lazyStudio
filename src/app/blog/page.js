"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/container";

// Content model: posts, categories, authors
const POSTS_DATA = [
  {
    id: "p1",
    title: "Designing for Scale: System Architecture Patterns for Modern Web Apps",
    excerpt:
      "Practical guidance for architecting resilient, scalable web platforms that support product growth while minimizing technical debt. Covers modular services, horizontal scaling, fault tolerance, and observability.",
    category: "Engineering",
    date: "2026-03-01",
    author: "Jane Carter",
    readTime: "10 min",
    featured: true,
  },
  {
    id: "p2",
    title: "Design Systems That Scale: From Tokens to Production",
    excerpt:
      "How to build a design system that actually gets adopted — tokens, component APIs, and governance patterns that keep consistency without slowing delivery.",
    category: "Design",
    date: "2026-02-12",
    author: "Liam Brooks",
    readTime: "9 min",
  },
  {
    id: "p3",
    title: "Accelerating Growth with Experimentation: Building an Analytics-Driven Roadmap",
    excerpt:
      "A practical playbook for product teams: hypothesis-driven experiments, instrumentation, and decision frameworks that move metrics and reduce risk.",
    category: "Strategy",
    date: "2026-01-20",
    author: "Maya Patel",
    readTime: "8 min",
  },
  {
    id: "p4",
    title: "Optimizing Time-to-Interactive at the Edge",
    excerpt:
      "Techniques and architecture patterns to decrease load times, prioritize critical rendering paths, and leverage edge compute for faster first meaningful paint.",
    category: "Performance",
    date: "2025-12-10",
    author: "Jane Carter",
    readTime: "7 min",
  },
  {
    id: "p5",
    title: "Case Study: How We Increased Conversion 52% for a Fintech Platform",
    excerpt:
      "An in-depth case study covering discovery, experiment design, implementation details, and the optimization roadmap that led to measurable uplift.",
    category: "Case Study",
    date: "2025-11-05",
    author: "Maya Patel",
    readTime: "12 min",
    featured: true,
  },
  {
    id: "p6",
    title: "MLOps for Product Teams: Practical Guide",
    excerpt:
      "A pragmatic guide to model versioning, deployment, monitoring, and feedback loops suitable for product teams building ML features.",
    category: "Research",
    date: "2025-10-02",
    author: "Liam Brooks",
    readTime: "11 min",
  },
  {
    id: "p7",
    title: "Cinematic Brand Video: Process & Playbook",
    excerpt:
      "From creative brief to final grade — how we plan, shoot, and edit cinematic brand assets that scale across channels.",
    category: "Video",
    date: "2025-09-14",
    author: "Liam Brooks",
    readTime: "6 min",
  },
  {
    id: "p8",
    title: "API Design Patterns for High-Throughput Services",
    excerpt:
      "Designing APIs that scale: idempotency, rate-limiting strategies, contract stability, and evolution patterns for long-lived services.",
    category: "Engineering",
    date: "2025-08-20",
    author: "Jane Carter",
    readTime: "9 min",
  },
  {
    id: "p9",
    title: "Hiring and Building High-Performance Cross-Functional Teams",
    excerpt:
      "Organizational practices that create psychological safety, fast iteration cycles, and ownership across product, design, and engineering.",
    category: "Agency Life",
    date: "2025-07-05",
    author: "Maya Patel",
    readTime: "7 min",
  },
];

const CATEGORIES = ["Engineering", "Design", "Strategy", "Product", "Research", "Case Study", "Video", "Agency Life"];

const AUTHORS = [
  { name: "Jane Carter", role: "Head of Engineering" },
  { name: "Liam Brooks", role: "Design Director" },
  { name: "Maya Patel", role: "Strategy Lead" },
];

export default function Blog() {
  const [query, setQuery] = useState("");

  // Memoized slices for rendering
  const posts = useMemo(() => POSTS_DATA, []);
  const featured = useMemo(() => posts.filter((p) => p.featured), [posts]);
  const recent = useMemo(() => posts.filter((p) => !p.featured), [posts]);
  const filtered = useMemo(() => {
    if (!query) return posts;
    const q = query.toLowerCase();
    return posts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [posts, query]);

  return (
    <div className="w-full bg-white text-black font-sans pb-24">
      <Container className="px-8 lg:px-12 2xl:px-16">

        {/* Hero */}
        <section className="pt-24 pb-8">
          <h1 className="text-5xl md:text-6xl font-Excon font-black leading-tight mb-4">Insights, Research & Case Studies</h1>
          <p className="text-xl text-sec max-w-3xl leading-relaxed font-SatoshiBoldRegular">
            Long-form technical posts, product playbooks, and data-backed case studies from our studio — practical guidance for designers,
            engineers, and product teams building at scale.
          </p>
        </section>

        {/* Featured + Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            {featured.length > 0 && (
              <article className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-200">
                <div className="p-10">
                  <div className="text-sm text-sec font-medium mb-2">{featured[0].category} • {featured[0].date} • {featured[0].readTime}</div>
                  <h2 className="text-3xl md:text-4xl font-Excon font-black mb-4">{featured[0].title}</h2>
                  <p className="text-sec leading-relaxed mb-6 font-SatoshiBoldRegular">{featured[0].excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-sm font-semibold font-Excon">{featured[0].author}</div>
                      <div className="text-sm text-gray-500">Author</div>
                    </div>
                    <button className="ml-auto bg-black text-white px-6 py-3 rounded-full text-sm font-semibold font-SatoshiBoldRegular">Read the report</button>
                  </div>
                </div>
              </article>
            )}

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {recent.slice(0, 4).map((post) => (
                <article key={post.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-xs text-sec font-medium mb-2">{post.category} • {post.date}</div>
                  <h3 className="text-xl font-Excon mb-2">{post.title}</h3>
                  <p className="text-sec mb-4 font-SatoshiBoldRegular">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <label className="block text-sm font-medium mb-2 text-gray-700">Search insights</label>
              <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full px-4 py-3 border rounded-md text-sm" placeholder="Search by topic, author or keyword" />
            </div>

            <div className="p-6 border border-gray-100 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">Categories</h4>
              <ul className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <button className="text-sm px-3 py-2 bg-gray-50 rounded-full border text-gray-700">{c}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-gray-100 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">Featured authors</h4>
              <ul className="space-y-3">
                {AUTHORS.map((a) => (
                  <li key={a.name} className="text-sm">
                    <div className="font-semibold font-Excon">{a.name}</div>
                    <div className="text-sm text-gray-600">{a.role}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-gray-100 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">Subscribe for research</h4>
              <p className="text-sm text-gray-600 mb-4">Get our monthly research brief and product playbooks.</p>
              <div className="flex gap-2">
                <input placeholder="Email address" className="flex-1 px-4 py-2 border rounded-md text-sm" />
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold">Subscribe</button>
              </div>
            </div>
          </aside>
        </section>

        {/* Research */}
        <section className="mb-16">
          <h3 className="text-2xl font-Excon font-bold mb-6">In-depth Research & Playbooks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.filter((p) => p.category === "Research" || p.category === "Engineering").slice(0, 3).map((p) => (
              <article key={p.id} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-xs text-sec mb-2">{p.category} • {p.date}</div>
                <h4 className="font-Excon font-semibold mb-2">{p.title}</h4>
                <p className="text-sec text-sm mb-4 font-SatoshiBoldRegular">{p.excerpt}</p>
                <div className="text-sm text-gray-600">{p.readTime} • {p.author}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-24">
          <h3 className="text-2xl font-Excon font-bold mb-6">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.filter((p) => p.category === "Case Study").map((p) => (
              <article key={p.id} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-xs text-sec mb-2">{p.date}</div>
                <h4 className="font-Excon font-semibold mb-2">{p.title}</h4>
                <p className="text-sec text-sm mb-4 font-SatoshiBoldRegular">{p.excerpt}</p>
                <div className="text-sm text-gray-600">{p.readTime} • {p.author}</div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-Excon font-bold mb-4">Research you can act on</h3>
          <p className="text-sec mb-6 max-w-2xl mx-auto font-SatoshiBoldRegular">
            Each piece is grounded in measurable outcomes — experiments, A/B tests, performance benchmarks, and customer interviews. Subscribe for monthly briefs and downloadable playbooks.
          </p>
          <div className="max-w-xl mx-auto flex gap-3 justify-center">
            <input placeholder="Email address" className="flex-1 px-4 py-3 border rounded-md text-sm" />
            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold">Get research</button>
          </div>
        </section>

      </Container>
    </div>
  );
}