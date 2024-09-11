export default function NodeCommands() {

  return <div className="developer-module w-full">
    <h2>Node CLI Commands</h2>
    
    <table className="w-full">
      <thead>
        <tr>
          <th>Command</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>npm install</code></td>
          <td>Installs all required packages</td>
        </tr>
        <tr>
          <td><code>npm install &lt;package_name&gt;</code></td>
          <td>Installs the specified package</td>
        </tr>
        <tr>
          <td><code>npm install &lt;package_name&gt; --save-dev</code></td>
          <td>Installs the specified package as a dev dependency</td>
        </tr>
        <tr>
          <td><code>npm install &lt;package_name&gt;@latest --save --save-exact</code></td>
          <td>Installs the specified package at the current version and prevents updates</td>
        </tr>
        <tr>
          <td><code>npm uninstall &lt;package_name&gt;</code></td>
          <td>Unnstalls the specified package</td>
        </tr>
        <tr>
          <td><code>npm run dev</code></td>
          <td>Start dev server</td>
        </tr>
        <tr>
          <td><code>npm run build</code></td>
          <td>Start new build</td>
        </tr>
        <tr>
          <td><code>npm run start</code></td>
          <td>Start project server after build</td>
        </tr>
        <tr>
          <td><code>npm run lint</code></td>
          <td>ESLint fix code rules</td>
        </tr>
        <tr>
          <td><code>npm help</code></td>
          <td>Launches help commands</td>
        </tr>
      </tbody>
    </table>
  </div>;
}
