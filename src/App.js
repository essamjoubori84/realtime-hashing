import React from 'react';
import sha1 from 'sha1';
import md5 from 'md5';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const defaultStr = 'foo';
    this.state = {
      str: defaultStr,
      sha1Hash: sha1(defaultStr),
      md5Hash: md5(defaultStr),
    }
  }

  onStrChange = e => {
    const value = e.target.value;
    this.setState({
      str: value,
      sha1Hash: sha1(value),
      md5Hash: md5(value),
    });
  };

  getStyles() {
    return {
      input: {
        padding: 10,
        fontSize: 40,
      },
      section: {
        marginTop: 30,
      },
      hash: {
        wordBreak: 'break-all',
      }
    }
  }

  render() {
    const styles = this.getStyles();

    return (
      <div>
        <div>
          <input
            style={styles.input}
            type="text"
            value={this.state.str}
            onChange={this.onStrChange}
          />
        </div>
        <div style={styles.section}>
          <div>SHA1</div>
          <div style={styles.hash}>
            {this.state.sha1Hash}
          </div>
        </div>
        <div style={styles.section}>
          <div>MD5</div>
          <div style={styles.hash}>
            {this.state.md5Hash}
          </div>
        </div>
      </div>
    )
  }
}