let response = await get(
  `https://api.github.com/repos/johnlindquist/simplescripts`
)
echo(response.data.name + " is working!")

exec(`exit 1`)
