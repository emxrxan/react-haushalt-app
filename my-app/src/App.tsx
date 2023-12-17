import React from 'react';
import { Stack } from '@fluentui/react'
import { FormComponent } from './components/Form/FormComponent';

const App :React.FC = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Stack>
        <Stack.Item>
          <FormComponent />
        </Stack.Item>
        <Stack.Item>
          <div>Eintrag</div>
        </Stack.Item>
        <Stack.Item>
          <div>GesamtBilnaz</div>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default App;
