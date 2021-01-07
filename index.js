/* eslint-disable max-classes-per-file */

const buildings = {
  eighthAndPenn: {
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
  century: {
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
};

class Building {
  constructor(name, buttonNames) {
    this.name = name;
    this.buttonNames = buttonNames;
    this.tab = document.getElementById(`${name}Tab`);
    this.view = document.getElementById(`${name}View`);
    this.list = document.getElementById(`${name}List`);
  }

  show() {
    this.view.classList.remove('hidden');
  }

  hide() {
    this.view.classList.add('hidden');
  }

  addButton(elevatorButton) {
    const li = document.createElement('li');
    li.classList.add('elevatorButtonContainer');
    this.list.appendChild(li);
    elevatorButton.addToParent(li);
  }
}

const eighthAndPennDom = new Building(
  'eighthAndPenn',
  buildings.eighthAndPenn.buttons
);

const centuryDom = new Building('century', buildings.century.buttons);

class Dom {
  constructor(domBuildings) {
    this.buildings = domBuildings;
  }

  handleTabClick(buildingTab) {
    this.buildings.forEach((building) => {
      if (buildingTab === building.tab) {
        building.show();
        building.tab.classList.add('selected');
      } else {
        building.hide();
        building.tab.classList.remove('selected');
      }
    });
  }
}

const dom = new Dom([eighthAndPennDom, centuryDom]);

// Go between tabs for different buildings
const tabs = [...document.querySelectorAll('.tab')];

tabs.forEach((tab) =>
  tab.addEventListener('click', (event) => {
    dom.handleTabClick(event.target);
  })
);

// Ensure storage is available in the current browser session
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// Check if current day in localStorage. If not, clear storage and store current day.
function clearStorageOnNewDay() {
  if (!storageAvailable('localStorage')) return;
  if (localStorage.getItem('date') !== new Date().toDateString()) {
    localStorage.clear();
    localStorage.setItem('date', new Date().toDateString());
  }
}

clearStorageOnNewDay();

class ButtonState {
  constructor(name, domElement) {
    this.name = name;
    this.domElement = domElement;
    this.subscriptions = [];
    this.completed = storageAvailable('localStorage')
      ? !!localStorage[name]
      : false;
  }

  get completed() {
    return this._completed;
  }

  set completed(value) {
    this._completed = value;

    if (storageAvailable('localStorage')) {
      localStorage.setItem(this.name, value);
    }

    this.subscriptions.forEach((subscription) => subscription(value));
  }

  toggleCompleted = () => {
    this.completed = !this.completed;
  };

  onChange = (cb) => {
    this.subscriptions.push(cb);
  };
}

class DomButton {
  constructor(name, completed) {
    this.name = name;
    this.domElement = document.createElement('button');
    this.domElement.textContent = this.name;
    this.domElement.classList += 'elevatorButton';
    this.subscriptions = [];
    this.completed = completed;
    this.domElement.addEventListener('click', (e) => this._onClick(e));
  }

  onClick = (cb) => {
    this.subscriptions.push(cb);
  };

  _onClick = (e) => {
    this.subscriptions.forEach((subscription) => subscription(e));
  };

  addToParent = (parent) => {
    parent.appendChild(this.domElement);
  };

  get completed() {
    return this._completed;
  }

  set completed(value) {
    if (value) {
      this.domElement.classList.add('completed');
    } else {
      this.domElement.classList.remove('completed');
    }
  }
}

class ElevatorButton {
  constructor(name) {
    this.name = name;
    this.state = new ButtonState(name);
    this.domButton = new DomButton(name, this.state.completed);
    this.state.onChange(this.onStateChange);
    this.domButton.onClick(this.onClick);
  }

  addToParent = (parent) => {
    this.domButton.addToParent(parent);
  };

  onStateChange = (newValue) => {
    this.domButton.completed = newValue;
    console.log('state changed');
    console.log({ state: this.state.completed });
  };

  onClick = () => {
    console.log({ prevState: this.state.completed });
    console.log('clicked');
    this.state.toggleCompleted();
  };
}

// Add buttons to screen

const eighthAndPennButtons = buildings.eighthAndPenn.buttons.map(
  (name) => new ElevatorButton(name)
);
eighthAndPennButtons.forEach((button) => eighthAndPennDom.addButton(button));

const centuryButtons = buildings.century.buttons.map(
  (name) => new ElevatorButton(name)
);
centuryButtons.forEach((button) => {
  centuryDom.addButton(button);
});