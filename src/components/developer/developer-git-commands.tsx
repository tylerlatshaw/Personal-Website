export default function GitCommands() {

  return <div className="developer-module w-full">
    <h2 id="git-cli-repository-commands">Git CLI Repository Commands</h2>

    <table className="w-full">
      <thead>
        <tr>
          <th>Command</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>git clone /path/to/repository</code></td>
          <td>Create a working copy of a local repository</td>
        </tr>
        <tr>
          <td><code>git clone username@host:/path/to/repository</code></td>
          <td>Create a working copy of a remote repository</td>
        </tr>
        <tr>
          <td><code>git add &lt;filename&gt;</code></td>
          <td>Add a file</td>
        </tr>
        <tr>
          <td><code>git commit -m &quot;Commit message&quot;</code></td>
          <td>Create a new commit</td>
        </tr>
        <tr>
          <td><code>git push origin main</code></td>
          <td>Push changes to main</td>
        </tr>
        <tr>
          <td><code>git remote add origin &lt;server&gt;</code></td>
          <td>Connect to a remote repository</td>
        </tr>
        <tr>
          <td><code>git pull</code></td>
          <td>Pull down code changes</td>
        </tr>
        <tr>
          <td><code>git diff</code> / <code>git diff --base &lt;filename&gt;</code> / <code>git diff &lt;sourcebranch&gt; &lt;targetbranch&gt;</code></td>
          <td>Get merge conflicts and changes</td>
        </tr>
        <tr>
          <td><code>git pull</code></td>
          <td>Pull down code changes</td>
        </tr>
      </tbody>
    </table>

    <h2 id="git-cli-branch-commands">Git CLI Branch Commands</h2>

    <table className="w-full">
      <thead>
        <tr>
          <th>Command</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>git status</code></td>
          <td>List existing branches</td>
        </tr>
        <tr>
          <td><code>git checkout -b &lt;branchname&gt;</code></td>
          <td>Create a branch and switch to it</td>
        </tr>
        <tr>
          <td><code>git checkout &lt;branchname&gt;</code></td>
          <td>Switch to an existing branch</td>
        </tr>
        <tr>
          <td><code>git branch -d &lt;branchname&gt;&gt;</code></td>
          <td>Delete the specified branch</td>
        </tr>
        <tr>
          <td><code>git push origin &lt;branchname&gt;</code></td>
          <td>Push changes to the specified branch</td>
        </tr>
        <tr>
          <td><code>git push --all origin</code></td>
          <td>Push changes to all branches</td>
        </tr>
        <tr>
          <td><code>git merge &lt;branchname&gt;</code></td>
          <td>Merge the specified branch into the current branch</td>
        </tr>
      </tbody>
    </table>
  </div>;
}
