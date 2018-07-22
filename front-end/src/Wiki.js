import React, { Component } from 'react';
import superagent from 'superagent';

class Wiki extends Component {
  state = { wiki: undefined, searchText: undefined, searching: false };
  onChange = this.onChange.bind(this);
  search = this.search.bind(this);
  onKeyDown = this.onKeyDown.bind(this);
  
  search() {
    this.setState({ searching: true })
    superagent.get(`${process.env.REACT_APP_API_LOCATION}/wiki`)
    .query({'search': this.state.searchText})
    .end((err, res) => {
      if (err) { return console.log(err); }
      this.setState({ wiki: res.body, searching: false });
    });
  }

  onChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.state.searchText && this.search();
    }
  }
  
   wikiHtml = (json) => {
     return (
      <article className="wiki-results">
       <h3 className="wiki-search-item">"{json[0]}" may refer to:</h3>
        <ul>
        {json[1].map((item, index) => {
          return <li className="wiki-item" key={item}>
            <a target="_blank" href={json[3][index]}>{item}</a> 
            <div>{json[2][index]}</div>
          </li>
        })}
        </ul>
      </article>
    );
  };

  render() {
   return (
    <React.Fragment> 
      <nav className="nav">
        <ul><li><a href="/">Home</a></li></ul>
      </nav>  
      <header className="header"><h1 className="header-title">wiki search</h1></header>
      <main>
        <input 
          type="text"
          className="wiki-search" 
          placeholder="wiki search"
          readOnly={this.state.searching}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
         />
         {this.state.searching ?
            <h3 className="wiki-searching">fetching unicorns...</h3> :
            (this.state.wiki && this.wikiHtml(this.state.wiki))
        }
      </main>
      <footer></footer>
    </React.Fragment>  
   );
  }
}

export default Wiki;
