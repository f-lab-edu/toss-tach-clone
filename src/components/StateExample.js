// class Component {
//   constructor(props = {}) {
//       this.props = props;
//       this.state = {};
//       this.init();
//   }

//   init() {
//       this.state = this.initState();
//       this.render();
//   }

//   initState() {
//       return {};
//   }

//   setState(newState) {
//       this.state = { ...this.state, ...newState };
//       this.render();
//   }

//   render() {}
// }

// class Counter extends Component {
//   constructor(props) {
//       super(props);
//   }

//   initState() {
//       return {
//           count: this.props.initialCount || 0
//       };
//   }

//   increment() {
//       this.setState({ count: this.state.count + 1 });
//   }

//   decrement() {
//       this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//       const { count } = this.state;
//       const { label } = this.props;

//       this.container.innerHTML = `
//           <div>
//               <h3>${label}</h3>
//               <p>Count: ${count}</p>
//               <button id="increment">+</button>
//               <button id="decrement">-</button>
//           </div>
//       `;

//       this.container.querySelector('#increment').onclick = () => this.increment();
//       this.container.querySelector('#decrement').onclick = () => this.decrement();
//   }

//   mount(container) {
//       this.container = container;
//       this.render();
//   }
// }

// // Usage
// const app = document.getElementById('app');
// const counter = new Counter({ initialCount: 5, label: 'Counter' });
// counter.mount(app);
