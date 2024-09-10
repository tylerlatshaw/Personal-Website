export default function NetlifyCommands() {

  return <div className="developer-module w-full">
    <h2 id="netlify-cli-commands">Netlify CLI Commands</h2>

    <table className="w-full">
      <thead>
        <tr>
          <th>Command</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>netlify login</code></td>
          <td>Authenticate with Netlify</td>
        </tr>
        <tr>
          <td><code>netlify status</code></td>
          <td>Get the status of the server</td>
        </tr>
        <tr>
          <td><code>netlify build</code></td>
          <td>Start a new build</td>
        </tr>
        <tr>
          <td><code>netlify serve</code></td>
          <td>Start a new build and start the server (this does not watch for code changes - any changes will require a new build using this command)</td>
        </tr>
        <tr>
          <td><code>netlify dev</code></td>
          <td>Start a new dev server</td>
        </tr>
      </tbody>
    </table>

    <br />
    <p>Reference Documentation: <a href="https://cli.netlify.com/">https://cli.netlify.com/</a></p>
  </div>;
}
