export default function MakeGitActionPage() {
  return (
    <div className="prose">
      <h1>xacos make:git-action</h1>
      <p>Generate GitHub Actions workflows for automated testing, building, and deployment.</p>
      <h2>Usage</h2>
      <pre><code>xacos make:git-action</code></pre>
      <h2>Generated Workflows</h2>
      <ul>
        <li><strong>CI Workflow</strong> - Run tests on pull requests</li>
        <li><strong>Build Workflow</strong> - Build and validate on push</li>
        <li><strong>Deploy Workflow</strong> - Deploy to production</li>
      </ul>
      <h2>What Gets Created</h2>
      <ul>
        <li><code>.github/workflows/ci.yml</code> - Continuous integration</li>
        <li><code>.github/workflows/deploy.yml</code> - Deployment automation</li>
      </ul>
      <h2>Features</h2>
      <ul>
        <li>Automated testing</li>
        <li>TypeScript type checking</li>
        <li>Code linting</li>
        <li>Docker image building</li>
        <li>Deployment to cloud providers</li>
      </ul>
    </div>
  );
}
