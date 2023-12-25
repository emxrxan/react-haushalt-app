import React, { useEffect, useState } from 'react';
import { Stack } from '@fluentui/react'
import { FormComponent } from './components/Form/FormComponent';
import { EintragListe } from './class/EintragListe';
import { Eintrag } from './class/Eintrag';
import { eintragType } from './interface/eintragType';

const myEintragList:EintragListe = new EintragListe()

const App :React.FC = () => {
  const [newEintrag, setNewEintrag] = useState<eintragType | null>(null)

  useEffect(() => { 
    newEintrag  && myEintragList.addNewEintrag(new Eintrag(newEintrag))
    console.log(myEintragList.getAllEintrag())
  },[newEintrag])
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Stack>
        <Stack.Item>
          <FormComponent setNewEintrag={setNewEintrag} />
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
