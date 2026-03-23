const highlights = [
  '基于 React 的单页面应用结构',
  '使用 Vite 作为开发与构建工具',
  '预置了可直接修改的首页样式与内容',
]

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">React Starter</p>
        <h1>你的 React 前端项目已经创建好了</h1>
        <p className="description">
          这是一个轻量的 React + Vite 起始模板，你可以从这里继续添加页面、组件、接口请求和状态管理。
        </p>

        <div className="actions">
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            React 文档
          </a>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            Vite 文档
          </a>
        </div>
      </section>

      <section className="feature-card">
        <h2>项目包含</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
