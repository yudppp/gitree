var git = require("git-promise");
git("status -sb", (stdout) => {
  return stdout.match(/## (.*)/)[1];
}).then((branch) => {
  console.log(branch); // This is your current branch
});
