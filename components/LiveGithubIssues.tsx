"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";

type GitHubIssue = {
  id: number;
  number: number;
  title: string;
  html_url: string;
  labels: {
    id: number;
    name: string;
  }[];
};

export default function LiveGithubIssues() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/repos/zoherr/xacos/issues")
      .then(res => res.json())
      .then(data => {
        // Filter out pull requests
        const onlyIssues = data.filter((item: any) => !item.pull_request);
        setIssues(onlyIssues);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="border-t bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Live GitHub Issues
          </h2>
          <p className="text-lg text-muted-foreground">
            What we’re actively building and improving in Xacos
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {loading && (
            <div className="text-center text-muted-foreground">
              Loading issues…
            </div>
          )}

          {!loading && issues.length === 0 && (
            <div className="text-center text-muted-foreground">
              No open issues 🎉
            </div>
          )}

          {!loading &&
            issues.map(issue => (
              <Card
                key={issue.id}
                className="flex flex-col gap-3 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      #{issue.number} — {issue.title}
                    </h3>

                    {issue.labels.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {issue.labels.map(label => (
                          <span
                            key={label.id}
                            className="rounded-full border px-3 py-0.5 text-xs font-medium text-muted-foreground"
                          >
                            {label.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    View
                  </Link>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
