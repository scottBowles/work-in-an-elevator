/* eslint-disable max-classes-per-file */

// Data for App
const buildings = [
  {
    name: 'Eighth & Penn',
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
    isDefault: false,
  },
  {
    name: 'Century Building',
    buttons: [
      '11',
      '10',
      '9',
      '8',
      '7R',
      '7',
      '6R',
      '6',
      '5',
      '4',
      '3R',
      '3',
      '2',
      '2R',
      'L',
      'BR',
    ],
    isDefault: true,
  },
];

/**
 * Renders App with nav and building views
 * @param {HTMLnode} mount DOM node to which the app will be added as innerHTML
 */
class App {
  constructor(mount) {
    this.mount = mount;
    this.buildingViews = [];
  }

  addBuildingView(buildingView) {
    this.buildingViews.push(buildingView);
  }

  render() {
    this.mount.innerHTML = `
      <nav>
        <ul class="navItems">
          ${this.buildingViews
            .map(
              (view) => `
            <li class="navItem">
              <button class="tab ${view.isDefault && 'selected'}">${
                view.name
              }</button>
            </li>
          `
            )
            .join('')}
        </ul>
      </nav>
      <main>
        ${this.buildingViews
          .map(
            (view) => `
          <div class="buildingView ${view.isDefault || 'hidden'}">
            ${view.render()}
          </div>`
          )
          .join('')}
      </main>
      <footer>
          <div class='bottomText'>Century Building</div>
          <div class='bottom'></div>
      </footer>`;
  }
}

/**
 * Elevator Button component
 * @param {string} text Button text
 */
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

/**
 * View for buildings
 * @param {string} name Building name
 * @param {boolean} isDefault Determines whether view will be shows on initial render
 */
class BuildingView {
  constructor(name, isDefault) {
    this.name = name;
    this.isDefault = isDefault;
    this.elevatorButtons = [];
  }

  render() {
    return `
      <div class='container'>
      
        <ol class="buttonsContainer">
          ${this.elevatorButtons
            .map(
              (btn) =>
                `<li class="elevatorButtonContainer">${btn.render()}</li>`
            )
            .join('')}
        </ol>
        
        

      </div>
    `;
  }

  addButton(btn) {
    this.elevatorButtons.push(btn);
  }
}

/**
 *
 * @param {HTMLnode} mount DOM node to which the app will be added as innerHTML
 * @param {array} buildingData Building data -- each building should have name, buttons, isDefault properties
 */
function startApp(mount, buildingData) {
  const app = new App(mount);

  for (const building of buildingData) {
    const buildingView = new BuildingView(building.name, building.isDefault);

    for (const btn of building.buttons) {
      const elevatorButton = new ElevatorButton(btn);
      buildingView.addButton(elevatorButton);
    }

    app.addBuildingView(buildingView);
  }

  app.render();
}

const root = document.getElementById('root');
startApp(root, buildings);

/**
 * EVENT LISTENERS
 */

/** Select tab listeners */
const tabs = [...document.querySelectorAll('.tab')];

function selectTab(selectedTab) {
  tabs.forEach((tab) => {
    if (tab === selectedTab) {
      tab.classList.add('selected');
    } else {
      tab.classList.remove('selected');
    }
  });
}

tabs.forEach((tab) =>
  tab.addEventListener('click', (event) => selectTab(event.target))
);

/** Complete button listeners */
const btns = [...document.querySelectorAll('.elevatorButton')];

function toggleCompleted(btn) {
  btn.classList.toggle('completed');
}

btns.forEach((btn) =>
  btn.addEventListener('click', (event) => toggleCompleted(event.target))
);

// TODO: Add localStorage for changes