const generateTeam = team => {
    const generateManager = manager => {
        return ` 
        <section class="manager">
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-info">
                Manager: ${manager.getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Email: ${manager.getEmail()}</li>
              <li class="list-group-item">Employee ID: ${manager.getId()}</li>
              <li class="list-group-item">Office Tel #: ${manager.getTel()}</li>
            </ul>
          </div>
        </section>`
    }
    const generateEngineer = engineer => {
        return ` 
        <section class="engineer">
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-info">
                Engineer: ${engineer.getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Email: ${engineer.getEmail()}</li>
              <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
              <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
          </div>
        </section>`
    }
    const generateIntern = intern => {
        return `
        <section class="intern">
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-info">
                Intern: ${intern.getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Email: ${intern.getEmail()}</li>
              <li class="list-group-item">Employee ID: ${intern.getId()}</li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </section>`
    }
    const html = [];
    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));
    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''));
    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''));
    return html.join('');
}
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid justify-content-center">
      <span class="navbar-brand mb-0 h1">My Team</span>
    </div>
  </nav>
  <main>
     ${generateTeam(team)}
  </main>
    <script src="../index.js"></script>
</body>
</html>`;
}