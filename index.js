/* eslint-disable max-classes-per-file */
const buildings = [
  {
    name: 'Eighth and Penn',
    buttons: [
      '',
      'R',
      '12',
      '11',
      '10',
      '9',
      '8',
      '7',
      '6',
      '5',
      '4',
      '3',
      '2',
      '1',
    ],
  },
  {
    name: 'Century',
    buttons: [
      'BR',
      'l',
      '2R',
      '2',
      '3',
      '3R',
      '4',
      '5',
      '6',
      '6R',
      '7',
      '7R',
      '8',
      '9',
      '10',
      '11',
    ],
  },
];

class App {
  constructor(mount) {
    this.mount = mount;
    this.buildingViews = [];
  }

  addBuildingView(buildingView) {
    this.buildingViews.push(buildingView);
  }

  render() {
    const navHTML = this.buildingViews.reduce(
      (buildingView, acc) =>
        `${acc}
        <li>
          <button class="tab selected">${buildingView.name}</button>
        </li> `,
      ''
    );

    const buildingViewHTML = this.buildingViews.reduce(
      (buildingView, acc) =>
        `${acc}
        <li>
          <button class="tab selected">${buildingView.render()}</button>
        </li>`
    );

    this.mount.innerHTML = `
      <nav>
        <ul class="navItems">
          ${navHTML}
        </ul>
      </nav>
      <main>
        ${buildingViewHTML}
      </main>`;
  }
}

class ElevatorButton {
  constructor(text) {
    this.text = text;
    this.isComplete = false;
  }

  render() {
    return `
      <button class='elevatorButton'>${this.text}</button>
    `;
  }
}

class BuildingView {
  constructor(name) {
    this.name = name;
    this.elevatorButtons = [];
  }

  render() {
    let btnsHTML = '';
    for (const btn of this.elevatorButtons) {
      btnsHTML += `<li>${btn.render()}</li>`;
    }

    return `
      <div class='container>
        <ol class="buttonsContainer">
          ${btnsHTML}
        </ol>
      </div>
    `;
  }

  addButton(btn) {
    this.elevatorButtons.push(btn);
  }
}

const root = document.getElementById('root');
const app = new App(root);

for (const building of buildings) {
  const buildingView = new BuildingView(building.name);

  for (const btn of building.buttons) {
    const elevatorButton = new ElevatorButton(btn);
    buildingView.addButton(elevatorButton);
  }

  app.addBuildingView(buildingView);
}

app.render();
