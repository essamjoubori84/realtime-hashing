import React from 'react';
import createHash from 'sha.js';

const sha1 = createHash('sha1');
const sha256 = createHash('sha256');
const sha512 = createHash('sha512');

const getSha1 = str => sha1.update(str, 'utf8').digest('hex');
const getSha256 = str => sha256.update(str, 'utf8').digest('hex');
const getSha512 = str => sha512.update(str, 'utf8').digest('hex');

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const defaultStr = 'foo';
    this.state = {
      str: defaultStr,
      sha1Hash: getSha1(defaultStr),
      sha256Hash: getSha256(defaultStr),
      sha512Hash: getSha512(defaultStr),
    }
  }

  onStrChange = e => {
    const value = e.target.value;
    this.setState({
      str: value,
      sha1Hash: getSha1(value),
      sha256Hash: getSha256(value),
      sha512Hash: getSha512(value),
    });
  };

  getStyles() {
    return {
      input: {
        padding: 10,
        fontSize: 40,
      },
      sha: {
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
        <div>
          <div>SHA1</div>
          <div style={styles.sha}>
            {this.state.sha1Hash}
          </div>
          <div>SHA256</div>
          <div style={styles.sha}>
            {this.state.sha256Hash}
          </div>
          <div>SHA512</div>
          <div style={styles.sha}>
            {this.state.sha512Hash}
          </div>
        </div>
      </div>
    )
  }
}