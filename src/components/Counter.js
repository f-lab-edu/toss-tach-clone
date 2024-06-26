// import StateComponent from "./StateComponent.js";

// Sample
// class Counter extends StateComponent {
//   constructor(props) {
//       super(props);
//       this.render();
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
// }

// // Usage
// const counter = new Counter({ initialCount: 5, label: 'Counter' });
