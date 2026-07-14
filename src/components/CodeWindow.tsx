/**
 * Static, zero-JS hero mockup: a light code editor rendering a short
 * Python snippet. Always LTR (it's code), decorative only.
 */
export default function CodeWindow() {
  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-window-header">
        <span className="code-dot" />
        <span className="code-dot" />
        <span className="code-dot" />
        <span className="code-window-title">student_project.py</span>
      </div>
      <pre className="code-window-body">
        <code>
          <span className="code-line">
            <span className="tok-kw">class</span> <span className="tok-fn">TeenDeveloper</span>(Student):
          </span>
          <span className="code-line">
            {'    '}
            <span className="tok-kw">def</span> <span className="tok-fn">__init__</span>(self):
          </span>
          <span className="code-line">
            {'        '}self.age = <span className="tok-fn">range</span>(13, 19)
          </span>
          <span className="code-line">{'        '}self.portfolio = []</span>
          <span className="code-line">&nbsp;</span>
          <span className="code-line">
            {'    '}
            <span className="tok-kw">def</span> <span className="tok-fn">learn</span>(self, skill):
          </span>
          <span className="code-line">{'        '}project = self.build(skill)</span>
          <span className="code-line">{'        '}self.portfolio.append(project)</span>
          <span className="code-line">&nbsp;</span>
          <span className="code-line">
            student.learn(<span className="tok-str">"python"</span>)
          </span>
          <span className="code-line">
            <span className="tok-com"># ✓ real software, real skills</span>
          </span>
        </code>
      </pre>
    </div>
  );
}
