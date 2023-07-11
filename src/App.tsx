import React from 'react';
import Dashboard from './components/Dashboard';
import Authentication from './components/Authentication';
import { UserType } from './types/UserType';

interface AppState {
  user: UserType | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: null,
    };
  }

  setUser = (user: UserType) => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <Authentication setUser={this.setUser} />
        {user && <Dashboard user={user} />}
      </div>
    );
  }
}

export default App;