import React from "react";

// class Filters extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "now_playing" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     // alert("Your favorite flavor is: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="now_playing">Now Playing</option>
//             <option value="popular">Popular</option>
//             <option value="top_rated">Top Rated</option>
//             <option value="upcoming">Upcoming</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

const Filters = (props) => {
      constructor(props) {
        super(props);
        this.state = { value: "now_playing" };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ value: event.target.value });
      }
    
      handleSubmit(event) {
        // alert("Your favorite flavor is: " + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="now_playing">Now Playing</option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

export default Filters;
