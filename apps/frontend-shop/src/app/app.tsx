import NxWelcome from './nx-welcome';
import Routs from './routing';

export function App() {
  return (
    <div>
      <Routs />
      <NxWelcome title="@shop-monorepo/frontend-shop" />
    </div>
  );
}

export default App;
